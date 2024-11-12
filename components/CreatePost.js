import React, { useState } from "react";

const CreatePost = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ content, image });
    setContent("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Écrivez votre message..."
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Publier</button>
    </form>
  );
};

export default CreatePost;
