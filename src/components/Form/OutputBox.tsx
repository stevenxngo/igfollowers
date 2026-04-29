type Props = {
  data?: string[];
};

function OutputBox({ data }: Props) {
  const hasResults = data && data.length > 0;

  return (
    <div className="mx-auto mt-6 w-full max-w-xs overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
      {hasResults ? (
        <ul className="max-h-52 divide-y divide-neutral-800 overflow-y-auto">
          {data.map((username, i) => (
            <li key={i} className="px-4 py-2.5 text-left">
              <span className="font-mono text-sm text-neutral-200">
                @{username}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex h-36 items-center justify-center">
          <p className="text-sm text-neutral-600">Results will appear here</p>
        </div>
      )}
    </div>
  );
}

export default OutputBox;
