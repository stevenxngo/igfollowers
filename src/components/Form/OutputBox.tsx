type Props = {
  data?: string[];
};

function OutputBox({ data }: Props) {
  return (
    <textarea
      id="output"
      className="mx-auto my-5 block w-2/3 max-w-sm rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm placeholder-gray-400 sm:w-5/12 lg:w-1/4"
      placeholder="Usernames will appear here..."
      readOnly
      rows={8}
      value={data?.join("\n")}
    ></textarea>
  );
}

export default OutputBox;
