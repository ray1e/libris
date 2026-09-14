import { Button } from "./components/common/Button.jsx";
import {Bookmark} from "lucide-react";
function App() {
  return (
    <>
    <div className="flex gap-4 p-10">
      <Button variant="filter" size="sm" leftIcon={<Bookmark className="size-4" />}>
        library
      </Button>

        <Button variant="secondary" size="sm" leftIcon={<Bookmark className="size-4" />}>
        library
      </Button>

        <Button variant="navigation" size="sm" leftIcon={<Bookmark className="size-4" />}>
        library
      </Button>
    </div>
      
    </>
  );
}

export default App;
