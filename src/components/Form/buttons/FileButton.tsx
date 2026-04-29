import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { FiUpload, FiCheck } from "react-icons/fi";

type Props = {
  type: "followers" | "following";
  label: string;
  setData: Dispatch<SetStateAction<undefined>>;
};

function FileButton({ type, label, setData }: Props) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target?.result as string);
          setData(json);
          setFileName(file.name);
          setError(null);
        } catch {
          setError("Invalid JSON");
          setFileName(null);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <label
        htmlFor={type}
        className={`flex w-44 cursor-pointer flex-col items-center gap-2.5 rounded-xl border-2 border-dashed px-4 py-6 transition-colors duration-200 ${
          fileName
            ? "border-violet-400/60 bg-violet-400/5"
            : "border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900"
        }`}
      >
        {fileName ? (
          <FiCheck className="text-xl text-violet-400" />
        ) : (
          <FiUpload className="text-xl text-neutral-500" />
        )}
        <span className="text-sm font-semibold text-neutral-200">{label}</span>
        <span
          className={`max-w-full truncate text-xs ${
            fileName ? "text-violet-400" : "text-neutral-500"
          }`}
        >
          {fileName ?? "Click to upload"}
        </span>
        <input
          id={type}
          type="file"
          accept=".json"
          onChange={processFile}
          className="hidden"
        />
      </label>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default FileButton;
