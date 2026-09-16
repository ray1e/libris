export function ReadStatusTag({ readStatus="to-read" /*reading, completed*/  }) {
  return (
    <div className="px-2 py-1 rounded-lg border-2 border-border-information inline-flex justify-center items-center">
      <span className="body-sm text-text-information">
        {readStatus}
      </span>
    </div>
  );
}
