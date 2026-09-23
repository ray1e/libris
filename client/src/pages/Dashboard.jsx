import { Funnel, Menu, Plus, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookCard } from "../components/common/BookCard.jsx";
import { Button } from "../components/common/Button.jsx";
import { InputBox } from "../components/common/InputBox.jsx";
import { ReadStatusTag } from "../components/common/ReadStatusTag.jsx";
import { SideMenu } from "../components/common/SideMenu.jsx";
import { TopAppBar } from "../components/common/TopAppBar.jsx";
import { useGetAllBooksQuery } from "../services/booksApi.js";

export function Dashboard() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { data, error, isLoading, isSuccess } = useGetAllBooksQuery();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData = (data?.data ?? []).filter((bookData) => {
    const matchTitle = bookData.title
      ?.trim().toLowerCase()
      .includes(search.trim().toLowerCase());
      console.log(`Title returned ${matchTitle}`)
    const matchAuthor = bookData.authors?.some((author) => {
      return author.trim().toLowerCase().includes(search.trim().toLowerCase());
    });
    return matchTitle || matchAuthor;
  }).filter((filteredBook) => {
    return(
      activeFilter === "All" ||
      filteredBook.readStatus === activeFilter
    )
  })

  console.log(data);
  const navigate = useNavigate();

  const handleInputOnChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="relative overflow-hidden h-dvh w-full flex flex-col gap-3 px-4">
      {/*side menu*/}

      <SideMenu isOpen={sideMenuOpen} onClose={() => setSideMenuOpen(false)} />

      {/*Header-section */}
      <div className="pt-2 shrink-0 pb-1">
        <TopAppBar
          title="My Books"
          actionsLeft={
            <Button
              variant="iconOnly"
              icon={<Menu />}
              className="px-0"
              onClick={() => setSideMenuOpen(true)}
            />
          }
          actionsRight={
            <Button
              variant="primary"
              leftIcon={<Plus />}
              label="Add Book"
              className="px-2"
              onClick={() => navigate("/addbook")}
            />
          }
        />
      </div>

      {/*Search-section */}
      <div className="shrink-0 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          {/*search and filter button container */}
          <InputBox
            leftIcon={<Search size="12" />}
            placeholderText="Search books..."
            className="w-64 h-9"
            onChange={handleInputOnChange}
          />
          <Button variant="secondary" label="Filter" leftIcon={<Funnel />} />
        </div>
        {/*filter bar */}
        <div className="flex justify-around items-center">
          <Button 
          variant="filter" 
          isSelected={activeFilter === "All"} 
          onClick={() => setActiveFilter("All")}
          label="All" 
          className="px-3"
           />

          <Button 
          variant="filter" 
          isSelected={activeFilter === "reading"}
          onClick={() => setActiveFilter("reading")}
          label="reading" />

          <Button 
          variant="filter" 
          label="to-read"
          isSelected={activeFilter === "to-read"}
          onClick={() => setActiveFilter("to-read")} />

          <Button 
          variant="filter" 
          label="finished"
          isSelected={activeFilter === "finished"} 
          onClick={() => setActiveFilter("finished")}/>
          
        </div>
      </div>
      {/*Main-section */}
      <main className="flex-1 min-h-0 overflow-y-auto grid grid-cols-2 gap-4 content-start auto-rows-max scrollbar-thumb-surface-action-secondary scrollbar-thin md:scrollbar-thin scroll-ml-1">
        {data?.success &&
          filteredData.map((currentBook) => (
            <BookCard
              key={currentBook._id}
              book={{
                title: currentBook.title,
                authors: currentBook.authors,
                metaSize: "sm",
                readStatus: currentBook.readStatus,
              }}
              rating={{
                value: currentBook?.rating,
                readOnly: true,
                size: "sm",
              }}
              imageLink="https://picsum.photos/id/1/300/400"
              bookTag={<ReadStatusTag readStatus={currentBook.readStatus} />}
            />
          ))}
      </main>
    </div>
  );
}
