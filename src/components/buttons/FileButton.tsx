import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type Props = {
  type: "followers" | "following";
  text: string;
  setData: Dispatch<SetStateAction<undefined>>;
};

function FileButton({ type, text, setData }: Props) {
  const [error, setError] = useState<string | null>(null);

  const processFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target?.result as string);
          setData(json);
          setError(null);
        } catch (error) {
          setError("Error parsing JSON file");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col content-center">
      <label htmlFor={type} className="mb-2 text-lg sm:text-xl font-bold">
        {text}
      </label>
      <input
        className="block w-full cursor-pointer rounded-md border border-gray-600 bg-gray-700 text-sm sm:text-md text-gray-400 placeholder-gray-400 focus:outline-none"
        id={type}
        type="file"
        accept=".json"
        onChange={processFile}
      />
      <p className="mt-1 text-xs text-red-600 sm:text-sm">{error}</p>
    </div>
  );
}

export default FileButton;
