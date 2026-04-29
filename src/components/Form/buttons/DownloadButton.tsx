import { FiDownload } from "react-icons/fi";

type Props = {
  download: () => void;
};

function DownloadButton({ download }: Props) {
  return (
    <button
      onClick={download}
      className="mt-4 inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-2 text-sm font-medium text-neutral-300 transition-colors duration-200 hover:border-neutral-500 hover:text-white"
    >
      <FiDownload className="text-base" />
      Download as text file
    </button>
  );
}

export default DownloadButton;
