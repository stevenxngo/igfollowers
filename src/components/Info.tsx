function Info() {
  return (
    <div className="my-4">
      <h2 className="from-ig-orange via-ig-pink to-ig-l-purple mb-2 bg-gradient-to-br bg-clip-text text-3xl font-bold text-transparent">
        How to Use
      </h2>
      <p className="mx-auto max-w-md text-lg">
        Follow{" "}
        <a
          href="https://help.instagram.com/181231772500920/?cms_platform=www&helpref=platform_switcher#:~:text=Download%20a%20copy%20of%20your%20information%20in%20Accounts%20Center%3A"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ig-pink font-bold underline"
        >
          these steps
        </a>{" "}
        (specifically{" "}
        <span className="font-medium italic">
          "Download a copy of your information in Accounts Center"
        </span>
        ) to download your data from Instagram
      </p>
      <hr className="mx-auto mt-3 h-px w-1/2 border-0 bg-gray-700" />
      <div className="my-2">
        <h4 className="text-2xl font-bold">Important:</h4>
        <ul className="mb-2 list-inside list-disc space-y-1">
          <li>
            Select{" "}
            <span className="font-semibold italic">
              Some of your information
            </span>{" "}
            and{" "}
            <span className="font-semibold italic">
              Followers and following
            </span>{" "}
            for{" "}
            <span className="font-semibold italic">
              How much information do you want?
            </span>
          </li>
          <li>
            Select{" "}
            <span className="font-semibold italic">Download to device</span> for{" "}
            <span className="font-semibold italic">
              What do you want to do with your information?
            </span>
          </li>
          <li>
            Select <span className="font-semibold italic">All time</span> for{" "}
            <span className="font-semibold italic">Date range</span>
          </li>
          <li>
            Select <span className="font-semibold italic">JSON</span> for{" "}
            <span className="font-semibold italic">Format</span>
          </li>
        </ul>
        If you do not follow these steps, the app will not work as intended.
      </div>
      <hr className="mx-auto mt-3 h-px w-1/2 border-0 bg-gray-700" />
      <div className="my-2">
        <p className="mx-auto max-w-md">
          {" "}
          After a couple of minutes (depending on the size of your data), you
          will recieve an email from Instagram with a link to download your
          data. Once you have downloaded your data, unzip the folder and upload
          the appropriate files to the app.
        </p>
        <p className="mx-auto mt-4 max-w-md">
          <span className="font-semibold italic">Note:</span> the followers file
          is likely named followers.json or followers_1.json and the following
          file is likely named following.json.
        </p>
        <hr className="mx-auto mt-3 h-px w-1/2 border-0 bg-gray-700" />
        <a
          href="https://youtu.be/Pu4-YcPZ9DE"
          target="_blank"
          rel="noopener noreferrer"
          className="block mx-auto mt-4 text-2xl font-bold underline hover:text-ig-pink"
        >
          Demo Video
        </a>
      </div>
    </div>
  );
}

export default Info;
