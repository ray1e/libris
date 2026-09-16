import {
  Bookmark,
  ChevronLeft,
  Ellipsis,
  Menu,
  Plus,
  Search,
  X,
} from "lucide-react";
import { useState } from "react";
import { BookInfo } from "./components/common/BookInfo.jsx";
import { BookMeta } from "./components/common/BookMeta.jsx";
import { Button } from "./components/common/Button.jsx";
import { Field } from "./components/common/Field.jsx";
import { FieldLabel } from "./components/common/FieldLabel.jsx";
import { InputBox } from "./components/common/InputBox.jsx";
import { RatingBadge } from "./components/common/RatingBadge.jsx";
import { ReadStatusTag } from "./components/common/ReadStatusTag.jsx";
import { TopAppBar } from "./components/common/topAppBar.jsx";
import { BookCard } from "./components/common/BookCard.jsx";
function App() {
  const [rating, setRating] = useState(0);
  return (
    <>
      <div className="flex gap-3 p-10">
        <Button
          variant="filter"
          size="sm"
          leftIcon={<Bookmark className="size-4" />}
        >
          library
        </Button>

        <Button
          variant="secondary"
          size="sm"
          leftIcon={<Bookmark className="size-4" />}
        >
          library
        </Button>

        <Button
          variant="navigation"
          size="sm"
          leftIcon={<Bookmark className="size-4" />}
        >
          library
        </Button>

        <div>
          <TopAppBar
            title="My Books"
            actionsLeft={
              <Button
                variant="iconOnly"
                size="sm"
                icon={<Menu className="size-6" />}
                className="px-0"
              ></Button>
            }
            actionsRight={
              <Button
                variant="primary"
                size="sm"
                label="Add Book"
                leftIcon={<Plus className="size-4" />}
              ></Button>
            }
          />
        </div>
        <div>
          <TopAppBar
            title="Add New Book"
            actionsLeft={
              <Button
                variant="iconOnly"
                size="sm"
                icon={<Menu className="size-6" />}
                className="px-0"
              ></Button>
            }
            actionsRight={
              <Button
                variant="iconOnly"
                size="sm"
                icon={<X className="size-5" />}
              ></Button>
            }
          />
        </div>
        <div>
          <TopAppBar
            actionsLeft={
              <Button
                variant="navigation"
                size="sm"
                leftIcon={<ChevronLeft className="size-6" />}
                label="Back"
                className="px-0 text-body-lg-semi-bold text-text-action active:text-text-action-hover"
              ></Button>
            }
            actionsRight={
              <>
                <Button variant="primary" size="sm" label="Edit"></Button>
                <Button
                  variant="iconOnly"
                  size="sm"
                  icon={<Ellipsis className="size-4" />}
                ></Button>
              </>
            }
          />
        </div>
      </div>
      <FieldLabel labelText="label" fieldType="required" />
      <InputBox
        leftIcon={<Search className="size-4" />}
        placeholderText="Search books..."
      />

      <Field
        labelText="Title"
        fieldType="required"
        inputName="title"
        placeholderText="Enter field title"
        inputId="title"
        FieldLabelSize="lg"
      />

      <RatingBadge
        labelText="Rating"
        showLabel={false}
        value={rating}
        onChange={(newRating) => setRating(newRating)}
        fieldLabelSize="lg"
      />
      <ReadStatusTag readStatus="to-read" />
      <div>
        <BookMeta
          bookTitle="Atomic Habits"
          bookAuthors="Cal Newport"
          size="sm"
        />
      </div>
      <div className="flex flex-row p-5 gap-10">
        <BookInfo
          book={{
            title: "Atomic Habits",
            authors: "Cal Newport",
            metaSize: "sm",
            status: "to-read",
          }}
          rating={{
            label: "Rating",
            value: 4,
            onChange: (newRating) => setRating(newRating),
            size: "sm",
            readOnly: true,
            fieldLabelSize: "sm",
          }}
        />

        <BookInfo
          book={{
            title: "Atomic Habits",
            authors: "Cal Newport",
            metaSize: "md",
            status: "to-read",
          }}
          rating={{
            label: "Rating",
            value: 4,
            onChange: (newRating) => setRating(newRating),
            size: "md",
            readOnly: true,
            fieldLabelSize: "md",
          }}
        />

        <BookInfo
          book={{
            title: "Atomic Habits",
            authors: "Cal Newport",
            metaSize: "lg",
            status: "to-read",
          }}
          rating={{
            label: "Rating",
            value: 4,
            onChange: (newRating) => setRating(newRating),
            size: "lg",
            fieldLabelSize: "lg",
          }}

          
        />
        <BookCard/>
      </div>
    </>
  );
}

export default App;
