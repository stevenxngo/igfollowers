import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import { FiUpload, FiCheck, FiX } from "react-icons/fi";

type Props = {
  type: "followers" | "following";
  label: string;
  setData: Dispatch<SetStateAction<undefined>>;
};

function FileButton({ type, label, setData }: Props) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const clear = (e: React.MouseEvent) => {
    e.preventDefault();
    setFileName(null);
    setError(null);
    setData(undefined);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="flex flex-1 flex-col items-center gap-1">
      <div className="relative w-full">
        <label
          htmlFor={type}
          className={`flex w-full cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed px-4 py-4 transition-colors duration-200 ${
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
            ref={inputRef}
            id={type}
            type="file"
            accept=".json"
            onChange={processFile}
            className="hidden"
          />
        </label>
        {fileName && (
          <button
            onClick={clear}
            className="absolute right-2 top-2 rounded-md p-0.5 text-neutral-500 transition-colors duration-150 hover:bg-neutral-700 hover:text-neutral-200"
            aria-label="Clear file"
          >
            <FiX className="text-sm" />
          </button>
        )}
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default FileButton;
