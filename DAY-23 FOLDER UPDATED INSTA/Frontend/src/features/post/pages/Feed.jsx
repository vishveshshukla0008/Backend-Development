import React, { useEffect } from "react";
import "../styles/feed.scss";
import Post from "../components/Post";
import usePost from "../hooks/usePost";
import Navbar from "../../../components/shared/Navbar";

const Feed = () => {
  const { feed, handleGetFeed, loading } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  return (
    <main className="feed-page">
      <Navbar />
      <div className="feed">
        <div className="posts">
          {feed &&
            feed.map((post) => {
              return <Post key={post._id} post={post} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default Feed;
