import Post from "./Post";
import { useEffect, useState } from "react";
const API_URL = "https://jsonplaceholder.typicode.com/posts";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(
    () =>
      async function fetchData() {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const posts = await response.json();
          setPosts(posts);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
        fetchData();
      },

    []
  );

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((posts) => setPosts(posts))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setLoading(false));
  // }, []);
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </>
  );
}

export default Posts;
