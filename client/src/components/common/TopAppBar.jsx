import { PageTitle } from "./PageTitle.jsx";

export function TopAppBar({ title, actionsLeft, actionsRight }) {
  return (
    <div className="w-96 bg-surface-page inline-flex justify-between items-center">
      {/* left group */}
      <div className="inline-flex justify-start items-center gap-6">
        {actionsLeft && (
          <div className="inline-flex justify-end items-start gap-1">
            {actionsLeft}
          </div>
        )}
        {/*page title */}
        <PageTitle titleText={title} />
      </div>
      
      {/*right group*/}
      {actionsRight && (
        <div className="inline-flex justify-end items-start gap-1">
          {actionsRight}
        </div>
      )}
    </div>
  );
}
