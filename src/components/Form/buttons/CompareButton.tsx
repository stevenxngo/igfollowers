type Props = {
  compFunc: () => void;
};

function CompareButton({ compFunc }: Props) {
  return (
    <button
      onClick={compFunc}
      className="rounded-lg bg-violet-500 px-6 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-violet-400 active:bg-violet-600"
    >
      Compare
    </button>
  );
}

export default CompareButton;
