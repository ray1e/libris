import { Funnel, Menu, Plus, Search } from "lucide-react";
import { BookCard } from "../components/common/BookCard.jsx";
import { Button } from "../components/common/Button.jsx";
import { InputBox } from "../components/common/InputBox.jsx";
import { SideMenu } from "../components/common/SideMenu.jsx";
import { TopAppBar } from "../components/common/TopAppBar.jsx";
import { useState } from "react";
import { ReadStatusTag } from "../components/common/ReadStatusTag.jsx";

export function Dashboard() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <div className="relative overflow-hidden h-full w-full flex flex-col gap-3 px-4">
      {/*side menu*/}

      <SideMenu
        isOpen={sideMenuOpen}
        onClose={() => setSideMenuOpen(false)}
      />

      {/*Header-section */}
      <div className="pt-2 shrink-0 pb-1">
        <TopAppBar
          title="My Books"
          actionsLeft={
            <Button variant="iconOnly" icon={<Menu />} className="px-0" onClick={() => setSideMenuOpen(true) }/>
          }
          actionsRight={
            <Button
              variant="primary"
              leftIcon={<Plus />}
              label="Add Book"
              className="px-2"
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
          />
          <Button variant="secondary" label="Filter" leftIcon={<Funnel />} />
        </div>
        {/*filter bar */}
        <div className="flex justify-between items-center">
          <Button variant="filter" label="All" className="px-3" />
          <Button variant="filter" label="Reading" />
          <Button variant="filter" label="Want to Read" />
          <Button variant="filter" label="Completed" />
        </div>
      </div>
      {/*Main-section */}
      <main className="flex-1 min-h-0 overflow-y-auto grid grid-cols-2 gap-4 scrollbar-thumb-surface-action-secondary scrollbar-thin md:scrollbar-thin scroll-ml-1">
        <BookCard
          book={{
            title: "Atomic Habits",
            authors: "Cal Newport",
            metaSize: "sm",
          }}
          rating={{ value: 5, readOnly: true, size: "sm" }}
          imageLink="https://picsum.photos/id/1/300/400"
          bookTag={<ReadStatusTag/>}
        />
        <BookCard
          book={{
            title: "Atomic Habits",
            authors: "Cal Newport",
            metaSize: "sm",
          }}
          rating={{ value: 5, readOnly: true, size: "sm" }}
          imageLink="https://picsum.photos/id/31/300/400"
          bookTag={<ReadStatusTag/>}
        />
        <BookCard
          book={{
            title: "Atomic Habits",
            authors: "Cal Newport",
            metaSize: "sm",
          }}
          rating={{ value: 5, readOnly: true, size: "sm" }}
          imageLink="https://picsum.photos/id/14/300/400"
          bookTag={<ReadStatusTag/>}
        />
        <BookCard
          book={{
            title: "Atomic Habits",
            authors: "Cal Newport",
            metaSize: "sm",
          }}
          rating={{ value: 5, readOnly: true, size: "sm" }}
          imageLink="https://picsum.photos/id/55/300/400"
          bookTag={<ReadStatusTag/>}
        />
        <BookCard
          book={{
            title: "Atomic Habits",
            authors: "Cal Newport",
            metaSize: "sm",
          }}
          rating={{ value: 5, readOnly: true, size: "sm" }}
          imageLink="https://picsum.photos/id/61/300/400"
          bookTag={<ReadStatusTag/>}
        />
      </main>
    </div>
  );
}
