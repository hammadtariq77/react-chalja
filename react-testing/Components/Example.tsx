"use client";
import React, { useState } from "react";
import axios from "axios";

interface Image {
  id: string;
  author: string;
  download_url: string;
}

const Axio = () => {
  const [images, setImages] = useState<Image[]>([]);

  const api = async () => {
    try {
      const res = await axios.get<Image[]>("https://picsum.photos/v2/list");
      const data = res.data;
      setImages(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={api}>Click</button>
      <div className="grid grid-cols-4">
        {images.map((image) => (
          <div key={image.id}>
            <img
              className="h-[400px] w-[400px]"
              src={image.download_url}
              alt={image.author}
            />
            <p>Author: {image.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Axio;
