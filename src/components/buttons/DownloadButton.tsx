type Props = {
  download: () => void;
};

function DownloadButton({ download }: Props) {
  return (
    <button
      onClick={download}
      className="from-ig-orange via-ig-pink to-ig-l-purple text-md group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br p-0.5 font-semibold hover:text-white focus:outline-none"
    >
      <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
        Download Unfollows
      </span>
    </button>
  );
}

export default DownloadButton;
