import React from "react";

const Album = ({ albumName, photos }) => {
  return (
    <div className="album">
      <h2>{albumName}</h2>
      <div className="photos">
        {photos.map((photo, index) => (
          <img key={index} src={photo.url} alt="Album Photo" />
        ))}
      </div>
    </div>
  );
};

export default Album;
