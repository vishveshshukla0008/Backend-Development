import { FaRegHeart } from "react-icons/fa";

import { FaRegCommentAlt } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { HiOutlineBookmark } from "react-icons/hi";
import { FaHeart } from "react-icons/fa"; //heart liked
import { HiEmojiSad } from "react-icons/hi"; // sad reacted
import { FaSurprise } from "react-icons/fa"; // wow
import { FaFaceLaughSquint } from "react-icons/fa6"; // haha
import { FaHandsHelping } from "react-icons/fa"; // support

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="user-details">
        <div className="img-wrapper">
          <img src={post.user.profileImage} alt="" />
        </div>
        <span>{post?.user.username}</span>
      </div>
      <div className="post-details">
        <img src={post.imageUrl} alt="" />
        <div className="controls">
          <div className="like-btns">
            {/* "love", "support", "sad", "wow", "funny" */}
            <FaHeart className="icon love" />
            <FaHandsHelping className="icon support" />
            <FaSurprise className="icon wow" />
            <HiEmojiSad style={{ fontSize: "24px" }} className="icon sad" />
            <FaFaceLaughSquint className="icon funny" />
          </div>
          <div className="left">
            <div className="like">
              {post.likedByCurrentUser === "love" ? (
                <FaHeart className="love icon" />
              ) : (
                ""
              )}
              {post.likedByCurrentUser === "support" ? (
                <FaHandsHelping className="green" />
              ) : (
                ""
              )}
              {post.likedByCurrentUser == "wow" ? (
                <FaSurprise className="orange" />
              ) : (
                ""
              )}
              {post.likedByCurrentUser == "sad" ? (
                <HiEmojiSad className="yellow" />
              ) : (
                ""
              )}
              {post.likedByCurrentUser == "funny" ? (
                <FaFaceLaughSquint className="yellow" />
              ) : (
                ""
              )}
              {!post.likedByCurrentUser ? <FaRegHeart className="icon" /> : ""}
            </div>
            <FaRegCommentAlt className="icon" />
            <LuSend className="icon" />
          </div>
          <div className="right">
            <HiOutlineBookmark className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
