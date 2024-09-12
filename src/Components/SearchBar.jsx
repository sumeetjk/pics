import "./SearchBar.css";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <form className="search-bar" onSubmit={handleFormSubmit}>
      <label>Enter Search Term:</label>
      <input value={term} onChange={handleChange} />
    </form>
  );
}
