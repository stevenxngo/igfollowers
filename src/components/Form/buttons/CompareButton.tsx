type Props = {
  compFunc: () => void;
};

function CompareButton({ compFunc }: Props) {
  return (
    <button
      onClick={compFunc}
      className="from-ig-pink via-ig-l-purple to-ig-d-purple text-md group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br p-0.5 font-semibold hover:text-white focus:outline-none"
    >
      <span className="relative rounded-md bg-gray-900 px-6 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0">
        Compare
      </span>
    </button>
  );
}

export default CompareButton;
