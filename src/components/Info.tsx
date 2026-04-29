function Info() {
  return (
    <div className="text-left">
      <h2 className="mb-6 text-center text-2xl font-bold text-white">
        How to Use
      </h2>

      <ol className="space-y-4 text-sm text-neutral-300">
        <li className="flex gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-xs font-semibold text-neutral-400">
            1
          </span>
          <span>
            Go to{" "}
            <a
              href="https://www.instagram.com/download/request/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 underline-offset-2 hover:underline"
            >
              Instagram Data Download
            </a>{" "}
            and follow{" "}
            <a
              href="https://help.instagram.com/181231772500920/?cms_platform=www&helpref=platform_switcher#:~:text=Download%20a%20copy%20of%20your%20information%20in%20Accounts%20Center%3A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 underline-offset-2 hover:underline"
            >
              these steps
            </a>{" "}
            to download your data from Instagram.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-xs font-semibold text-neutral-400">
            2
          </span>
          <span>
            Select:{" "}
            <span className="text-neutral-200">
              Some of your information &rarr; Followers and following
            </span>
            , format{" "}
            <span className="font-mono text-xs text-neutral-200">JSON</span>,
            date range{" "}
            <span className="text-neutral-200">All time</span>, download to
            device.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-xs font-semibold text-neutral-400">
            3
          </span>
          <span>
            Once you receive an email that your data is ready, download and
            extract the zip file.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-xs font-semibold text-neutral-400">
            4
          </span>
          <span>
            Upload the two JSON files above — typically named{" "}
            <span className="font-mono text-xs text-neutral-200">
              followers.json
            </span>{" "}
            and{" "}
            <span className="font-mono text-xs text-neutral-200">
              followers_1.json
            </span>
            .
          </span>
        </li>
      </ol>

      <div className="mt-6 flex justify-center text-sm">
        <a
          href="https://youtu.be/vfQjqbCuicY"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-400 underline-offset-2 hover:underline"
        >
          Data Download Tutorial &rarr;
        </a>
      </div>
    </div>
  );
}

export default Info;
