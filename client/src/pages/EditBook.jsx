import { Menu, Upload, X } from "lucide-react";
import { TopAppBar } from "../components/common/TopAppBar.jsx";
import { Button } from "../components/common/Button.jsx";
import { Field } from "../components/common/Field.jsx";
import { RatingBadge } from "../components/common/RatingBadge.jsx";
import { SideMenu } from "../components/common/SideMenu.jsx";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetBookQuery,
  useUpdateBookMutation,
} from "../services/booksApi.js";

export function EditBook() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const [draft, setDraft] = useState(null);

  const { id } = useParams();

  const [updateBook] = useUpdateBookMutation();
  const { data } = useGetBookQuery(id);
  const book = data?.data;

  const emptyBook = {
    title: "",
    authors: "",
    readStatus: "to-read",
    finishedDate: "",
    rating: "",
  };
  const initialBook = book
    ? {
        title: book.title ?? "",
        authors: book.authors?.join(", ") ?? "",
        readStatus: book.readStatus ?? "to-read",
        finishedDate: book.finishedDate
          ? new Date(book.finishedDate).toISOString().split("T")[0]
          : "",
        rating: book.rating ?? "",
      }
    : emptyBook;

  const form = draft ?? initialBook;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookFormData = {
      title: form.title.trim(),
      authors: form.authors,
      readStatus: form.readStatus,
      finishedDate: form.finishedDate || null,
      rating:
        form.rating !== "" && !isNaN(form.rating)
          ? Number(form.rating)
          : undefined,
    };

    try {
      const response = await updateBook({
        bookId: id,
        ...bookFormData,
      }).unwrap();
      navigate(`/mybook/${id}`);
      console.log(response);
    } catch (error) {
      console.error("Error creating book", error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="pb-2 bg-surface-page relative w-full flex flex-col gap-4 h-full overflow-hidden px-4">
      <SideMenu isOpen={sideMenuOpen} onClose={() => setSideMenuOpen(false)} />
      {/*Header */}
      <div className="pt-2 shrink-0 pb-1">
        <TopAppBar
          title="Edit Book"
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
            value={form.title}
            inputType="text"
            onChange={(e) =>
              setDraft((current) => ({
                ...(current ?? initialBook),
                title: e.target.value,
              }))
            }
          />
          <Field
            labelText="Author"
            fieldType="required"
            value={form.authors}
            placeholderText="Enter book author(s)"
            inputType="text"
            onChange={(e) =>
              setDraft((current) => ({
                ...(current ?? initialBook),
                authors: e.target.value,
              }))
            }
          />
          <Field
            labelText="Status"
            fieldType="required"
            placeholderText="Enter book author(s)"
            inputType="text"
            value={form.readStatus}
            as="select"
            onChange={(e) =>
              setDraft((current) => ({
                ...(current ?? initialBook),
                readStatus: e.target.value,
              }))
            }
          >
            <option value="to-read">want to read</option>
            <option value="finished">completed</option>
            <option value="reading">reading</option>
          </Field>
          {form.readStatus === "finished" && (
            <Field
              labelText="Date Finished"
              fieldType="required"
              inputType="date"
              placeholderText="Select date"
              value={form.finishedDate}
              onChange={(e) =>
                setDraft((current) => ({
                  ...(current ?? initialBook),
                  finishedDate: e.target.value,
                }))
              }
            />
          )}
          {form.readStatus !== "to-read" && (
            <RatingBadge
              labelText="Rating"
              ratingReadOnly={false}
              ratingValue={form.rating}
              ratingSize="md"
              onRatingChange={(selectedRating) =>
                setDraft((current) => ({
                  ...(current ?? initialBook),
                  rating: selectedRating,
                }))
              }
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
            label="Save Changes"
            onClick={handleSubmit}
            className="px-3"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
