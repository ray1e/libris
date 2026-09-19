import { cn } from "../../lib/utils.js";
import { Button } from "./Button.jsx";
import {
  BookOpenCheck,
  BookOpenText,
  House,
  Search,
  Settings,
  Book,
  BookBookmark,
} from "lucide-react";

export function SideMenu({ isOpen, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 z-40 bg-black/50 transition-opacity duration-300",
          isOpen
            ? "opacity-40 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      {/*side-menu panel */}
      <div
        className={cn(
          "flex flex-col transition-transform duration-300 ease-in-out bg-surface-page absolute top-0 bottom-0 left-0 z-50 shadow-xl w-2/3 justify-start pt-4 pl-3",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/*logo */}
        <div className="outline-surface-action-hover outline-2 w-fit">
           <span>LOGO</span> 
        </div>

        {/*menu items */}
        <nav className="flex flex-col gap-2 rounded-lg justify-center items-start pt-3">
          <Button
            variant="notHighlited"
            leftIcon={<House />}
            label="Overview"
            type="button"
            className="gap-4"
          />
          <Button
            variant="notHighlited"
            leftIcon={<BookOpenText />}
            label="My Books"
            type="button"
            className="gap-4"
          />
          <Button
            variant="notHighlited"
            leftIcon={<Book />}
            label="Currently Reading"
            type="button"
            className="gap-4"
          />
          <Button
            variant="notHighlited"
            leftIcon={<BookBookmark />}
            label="Want to read"
            type="button"
            className="gap-4"
          />
          <Button
            variant="notHighlited"
            leftIcon={<BookOpenCheck />}
            label="Completed"
            type="button"
            className="gap-4"
          />
          <Button
            variant="notHighlited"
            leftIcon={<Search />}
            label="Search"
            type="button"
            className="gap-4"
          />
          <Button
            variant="notHighlited"
            leftIcon={<Settings />}
            label="Settings"
            type="button"
            className="gap-4"
          />
        </nav>
      </div>
    </>
  );
}
