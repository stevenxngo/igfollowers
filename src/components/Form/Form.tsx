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
      } catch (e) {
        setDiff([]);
        setError(
          e instanceof Error
            ? "There was an error parsing the files. They may be formatted incorrectly."
            : "An unknown error occurred.",
        );
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
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-center gap-6">
        <FileButton type="followers" label="Followers" setData={setFollowers} />
        <FileButton type="following" label="Following" setData={setFollowing} />
      </div>
      <div className="mt-6">
        <CompareButton compFunc={compare} />
      </div>
      {error && <p className="mt-3 text-xs text-red-400">{error}</p>}
      <OutputBox data={diff} />
      {diff !== undefined && (
        <p className="mt-3 text-sm text-neutral-500">
          {diff.length === 0
            ? "No results"
            : `${diff.length} ${diff.length === 1 ? "account" : "accounts"} found`}
        </p>
      )}
      {diff && diff.length > 0 && <DownloadButton download={download} />}
    </div>
  );
}

export default Form;
