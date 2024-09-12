import axios from "axios";

export default async function SearchImages(term) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID sJ5h8FRpofeobQpD0Ki6p1K-mbEdMRlP4aZFd0l-wCU",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
}
