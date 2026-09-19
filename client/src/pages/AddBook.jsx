import { Calendar, Menu, Upload, X } from "lucide-react";
import { TopAppBar } from "../components/common/TopAppBar.jsx";
import { Button } from "../components/common/Button.jsx";
import { Field } from "../components/common/Field.jsx";
import { RatingBadge } from "../components/common/RatingBadge.jsx";
import { SideMenu } from "../components/common/SideMenu.jsx";
import { useState } from "react";

export function AddBook() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <div className="relative w-full flex flex-col gap-4 h-full overflow-hidden px-4">
      <SideMenu isOpen={sideMenuOpen} onClose={() => setSideMenuOpen(false)} />
      {/*Header */}
      <div className="pt-2 shrink-0 pb-1">
        <TopAppBar
          title="Add New Book"
          actionsLeft={
            <Button variant="iconOnly" icon={<Menu />} className="px-0" onClick={() => setSideMenuOpen(true) }/>
          }
          actionsRight={
            <Button variant="iconOnly" icon={<X />} className="px-0" />
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
          />
          <Field
            labelText="Author"
            fieldType="required"
            placeholderText="Enter book author(s)"
            inputType="text"
          />
          <Field
            labelText="Status"
            fieldType="required"
            placeholderText="Enter book author(s)"
            inputType="text"
            as="select"
          >
            <option value="want to read">want to read</option>
            <option value="completed">completed</option>
            <option value="reading">reading</option>
          </Field>
          <Field
            labelText="Date Finished"
            fieldType="required"
            placeholderText="Enter book title"
            rightIcon={<Calendar />}
          />
          <RatingBadge
            labelText="Rating"
            ratingReadOnly={false}
            ratingValue={3}
            ratingSize="md"
          />
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
          <Button variant="secondary" label="Cancel" />
          <Button
            variant="primary"
            label="Save Book"
            className="px-3"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
