import React, { useState, useEffect } from "react";
import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post";
import { createPost, getPosts } from "../../postService";

const Journal = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  const handleCreatePost = async (post) => {
    await createPost(post);
    setPosts([...posts, post]); // Ajouter le post nouvellement créé
  };

  return (
    <div>
      <h1>Journal de Bord</h1>
      <CreatePost onCreate={handleCreatePost} />
      <div>
        {posts.map((post, index) => (
          <Post
            key={index}
            author="Auteur"
            content={post.content}
            imageUrl={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Journal;
