import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";

export default function App() {
  const handleSubmit = (term) => {
    console.log("Do a search with ", term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
}
