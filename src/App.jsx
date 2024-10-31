import React, { useEffect } from "react";
import "./App.css";
import ImagesList from "./components/imagesList/ImagesList";
import { fetchPhotos } from "./requests/setPhotos";

function App() {
  useEffect(() => {
    fetchPhotos();
  }, []);

  const photos = [
    {
      name: "1",
      photo: "fdsfdsfsdfsd",
      comment: [
        {
          name: "Vasya",
          text: "Super",
        },
      ],
    },
    {
      name: "1",
      photo: "fdsfdsfsdfsd",
      comment: [
        {
          name: "Vasya",
          text: "Super",
        },
      ],
    },
    {
      name: "1",
      photo: "fdsfdsfsdfsd",
      comment: [
        {
          name: "Vasya",
          text: "Super",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <main>
        <ImagesList photos={photos} />
      </main>
    </div>
  );
}

export default App;
