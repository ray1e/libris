import { Menu, Upload, X } from "lucide-react";
import { TopAppBar } from "../components/common/TopAppBar.jsx";
import { Button } from "../components/common/Button.jsx";
import { Field } from "../components/common/Field.jsx";
import { RatingBadge } from "../components/common/RatingBadge.jsx";
import { SideMenu } from "../components/common/SideMenu.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../services/booksApi.js";

export function AddBook() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [readStatus, setReadStatus] = useState("to-read");
  const [finishedDate, setFinishedDate] = useState("");
  const [rating, setRating] = useState("");

  const [addBook] = useAddBookMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookFormData = {
      title: title.trim(),
      authors,
      readStatus,
      finishedDate: finishedDate || null,
      rating:
        rating !== "" && rating !== null && !isNaN(rating)
          ? Number(rating)
          : null,
    };

    try {
      const response = await addBook(bookFormData).unwrap();
      console.log(response);
    } catch (error) {
      console.error("Error creating book", error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="relative w-full flex flex-col gap-4 h-full overflow-hidden px-4">
      <SideMenu isOpen={sideMenuOpen} onClose={() => setSideMenuOpen(false)} />
      {/*Header */}
      <div className="pt-2 shrink-0 pb-1">
        <TopAppBar
          title="Add New Book"
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
              variant="iconOnly"
              icon={<X />}
              className="px-0"
              onClick={() => navigate("/")}
            />
          }
        />
      </div>

      {/*Add book form*/}
      <form className="flex flex-1 flex-col gap-2 overflow-y-auto min-h-0 scrollbar-thumb-surface-action-secondary scrollbar-none md:scrollbar-auto scroll-ml-1">
        {/*Book upload*/}
        <div className="grid grid-cols-2 gap-3 items-center">
          <img
            src="https://picsum.photos/300/400"
            alt="Book cover placeholder"
            width={300}
            height={400}
            className="h-44 rounded-lg object-cover w-full aspect-2/3 shrink-0"
          />
          <Button
            variant="secondary"
            label="Upload Image"
            rightIcon={<Upload />}
            type="button"
          />
        </div>

        {/*input boxes */}
        <div className="flex flex-col gap-4 mt-2">
          <Field
            labelText="Title"
            fieldType="required"
            placeholderText="Enter book title"
            inputType="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Field
            labelText="Author"
            fieldType="required"
            placeholderText="Enter book author(s)"
            inputType="text"
            onChange={(e) => setAuthors(e.target.value)}
          />
          <Field
            labelText="Status"
            fieldType="required"
            placeholderText="Enter book author(s)"
            inputType="text"
            as="select"
            onChange={(e) => setReadStatus(e.target.value)}
          >
            <option value="to-read">want to read</option>
            <option value="finished">completed</option>
            <option value="reading">reading</option>
          </Field>
          {readStatus === "finished" && (
            <Field
              labelText="Date Finished"
              fieldType="required"
              inputType="date"
              placeholderText="Select date"
              onChange={(e) => setFinishedDate(e.target.value)}
            />
          )}
          {readStatus !== "to-read" && (
            <RatingBadge
              labelText="Rating"
              ratingReadOnly={false}
              ratingValue={rating}
              ratingSize="md"
              onRatingChange={(selectedRating) => setRating(selectedRating)}
            />
          )}
          <Field
            labelText="Genre"
            fieldType="optional"
            placeholderText="Select genre"
            inputType="text"
          />
          <Field
            labelText="Pages"
            fieldType="optional"
            placeholderText="Enter number of pages"
          />
          <Field
            labelText="Description"
            fieldType="optional"
            placeholderText="Type here"
            inputType="text"
          />
        </div>
        <div className="flex justify-between items-center mt-3">
          <Button
            variant="secondary"
            type="button"
            label="Cancel"
            onClick={() => navigate("/")}
          />
          <Button
            variant="primary"
            label="Save Book"
            onClick={handleSubmit}
            className="px-3"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
