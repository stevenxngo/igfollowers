import { useState } from "react";
import FileButton from "./buttons/FileButton";
import CompareButton from "./buttons/CompareButton";
import OutputBox from "./OutputBox";
import DownloadButton from "./buttons/DownloadButton";
import { compareFollows } from "../../logic/follows";

function Form() {
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [error, setError] = useState<string>();
  const [diff, setDiff] = useState<string[]>();

  const compare = () => {
    if (!followers || !following) {
      setDiff([]);
      setError("Please upload both files.");
    } else {
      try {
        const diff = compareFollows(followers, following);
        setDiff(diff);
        setError("");
        console.log(followers);
        console.log(following);
      } catch (e) {
        if (e instanceof Error) {
          setDiff([]);
          setError(
            "There was an error parsing the files. They may be formatted incorrectly.",
          );
        } else {
          setDiff([]);
          setError("An unknown error occurred.");
        }
      }
    }
  };

  const download = () => {
    if (diff) {
      const data = new Blob([diff.join("\n")], { type: "text/plain" });
      const url = URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      a.download = "unfollows.txt";
      a.click();
    }
  };

  return (
    <div className="justify-center">
      <div className="my-5 flex flex-row justify-center gap-8">
        <FileButton
          type="followers"
          text="Upload Followers JSON"
          setData={setFollowers}
        />
        <FileButton
          type="following"
          text="Upload Following JSON"
          setData={setFollowing}
        />
      </div>
      <CompareButton compFunc={compare} />
      <p className="mt-4 text-xs text-red-600 sm:text-sm">{error}</p>
      <OutputBox data={diff} />
      <p className="my-2 font-semibold">Count: {diff ? diff.length : 0}</p>
      {diff && diff.length > 0 && <DownloadButton download={download} />}
    </div>
  );
}

export default Form;
