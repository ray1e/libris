import { BookInfo } from "../components/common/BookInfo.jsx";
import { Button } from "../components/common/Button.jsx";
import { ReadStatusTag } from "../components/common/ReadStatusTag.jsx";
import { TopAppBar } from "../components/common/TopAppBar.jsx";
import { ChevronLeft, Ellipse, Ellipsis } from "lucide-react";

export function BookView() {
  return (
    <div className=" relative w-full flex flex-col gap-4 h-full overflow-hidden px-4">
      {/*Header-section*/}
      <div className="pt-2 shrink-0 pb-1">
        <TopAppBar
          actionsLeft={
            <Button
              variant="navigation"
              label="Back"
              leftIcon={<ChevronLeft />}
            />
          }
          actionsRight={
            <div className="flex flex-icon items-center justify-center gap-3">
              <Button variant="secondary" label="Edit" className="px-3" />
              <Button variant="iconOnly" icon={<Ellipsis />} />
            </div>
          }
        />
      </div>

      <main className="flex flex-col gap-3 overflow-y-auto">
        {/*Book image and metadata */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-4">
          <div className="row-span-2">
            <img
              src={"https://picsum.photos/id/64/300/400"}
              alt="Book cover placeholder"
              className="rounded-lg object-cover w-full aspect-3/4 shrink-0"
            />
          </div>

          <BookInfo
            book={{
              title: "Atomic Habits",
              authors: "Cal Newport",
              metaSize: "md",
            }}
            rating={{ value: 5, readOnly: true, size: "sm" }}
            className="pt-2 gap-3"
            tag={<ReadStatusTag className="w-2/3" />}
          />
          <div className="flex  gap-4">
            <div className="flex flex-col gap-3 body-xsm-semi-bold">
              <span>Date Started</span>
              <span>Date Finished</span>
              <span>Pages</span>
              <span>Genre</span>
            </div>

            <div className="flex flex-col gap-3 body-xsm">
              <span>Jan 16, 2024</span>
              <span>Feb 2, 2024</span>
              <span>330</span>
              <span>Self-help</span>
            </div>
          </div>
        </div>

        {/*To come: notes */}
        <div className="flex flex-col gap-3">
          {/*description*/}
          <div>
            <span className="block body-md-semi-bold">Description</span>
            <span className="body-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit neque animi recusandae atque facilis officia, quo
              explicabo asperiores perspiciatis vitae iste voluptate, dolor
              aspernatur officiis provident expedita voluptatem possimus
              laboriosam.
            </span>
          </div>

          {/*notes */}
          <div>
            <span className="block body-md-semi-bold">Notes(coming soon)</span>
            <span className="body-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              eaque facere cumque, sapiente necessitatibus recusandae porro a,
              voluptas corporis repudiandae sint amet doloribus tempora vero.
              Numquam fugit qui corrupti minus?
            </span>
          </div>

            {/*favorite quotes */}
          <div>
            <span className="block body-md-semi-bold">Favorite Quotes</span>
            <div className="flex flex-col gap-2">
              <span className="body-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae eaque facere cumque, sapiente necessitatibus
                recusandae porro a, voluptas
              </span>
              <span className="body-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae eaque facere cumque, sapiente necessitatibus
                recusandae porro a, voluptas
              </span>
              <span className="body-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae eaque facere cumque, sapiente necessitatibus
                recusandae porro a, voluptas
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
