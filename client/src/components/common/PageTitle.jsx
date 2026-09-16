
export function PageTitle({titleText}) {
    return(
        <div className="w-full inline-flex justify-between items-center">
            <span className="body-lg-semi-bold justify-center text-text-headings">{titleText}</span>
        </div>
    )
}