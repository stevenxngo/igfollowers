type Props = {
  data?: string[];
};

function OutputBox({ data }: Props) {
  const hasResults = data && data.length > 0;

  return (
    <div className="mt-6 w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
      {hasResults ? (
        <ul className="max-h-52 divide-y divide-neutral-800 overflow-y-auto">
          {data.map((username, i) => (
            <li key={i} className="transition-colors duration-150 hover:bg-neutral-800">
              <a
                href={`https://www.instagram.com/${username}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-1.5 text-left font-mono text-sm text-neutral-200"
              >
                @{username}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex h-52 items-center justify-center">
          <p className="text-sm text-neutral-600">Results will appear here</p>
        </div>
      )}
    </div>
  );
}

export default OutputBox;
