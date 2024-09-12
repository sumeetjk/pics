import { useState } from "react";

import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";
import SearchImages from "./api";

export default function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await SearchImages(term);

    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
