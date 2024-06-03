function Info() {
  return (
    <div className="mb-2 mt-4">
      <h2 className="bg-gradient-to-br from-ig-orange via-ig-pink to-ig-l-purple bg-clip-text text-3xl font-bold text-transparent">
        How to Use
      </h2>

      <a
        href="https://youtu.be/vfQjqbCuicY"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-4 text-center text-lg font-bold underline hover:text-ig-l-purple"
      >
        Data Download Tutorial
      </a>

      <div className="mx-auto mt-1 max-w-sm px-4 text-justify sm:max-w-md sm:px-0">
        <ol className="list-decimal text-white">
          <li>
            Go to{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="italic underline hover:text-ig-l-purple"
              href="https://www.instagram.com/download/request/"
            >
              Instagram Data Download
            </a>{" "}
            and follow{" "}
            <a
              href="https://help.instagram.com/181231772500920/?cms_platform=www&helpref=platform_switcher#:~:text=Download%20a%20copy%20of%20your%20information%20in%20Accounts%20Center%3A"
              target="_blank"
              rel="noopener noreferrer"
              className="italic underline hover:text-ig-l-purple"
            >
              these steps
            </a>{" "}
            to download your data from Instagram
          </li>
          <li>
            Select these options:
            <ul className="list-inside list-disc italic">
              <li>Some of your information &rarr; Followers and following</li>
              <li>Download to device</li>
              <li>
                All time <span className="not-italic">for</span> Date range
              </li>
              <li>
                JSON <span className="not-italic">for</span> Format
              </li>
            </ul>
          </li>
          <li>
            Once you recieve an email from Instagram that your data is ready
            (may take a few minutes), download the zip file and extract it
          </li>
          <li>
            Upload the followers and following JSON files to the app (likely
            named followers.json and followers_1.json)
          </li>
        </ol>
      </div>

      <a
        href="https://youtu.be/Pu4-YcPZ9DE"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-4 text-center text-lg font-bold underline hover:text-ig-l-purple"
      >
        Demo
      </a>
    </div>
  );
}

export default Info;
