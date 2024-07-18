import React, { useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import "./index.css"; // SocialMedia uchun stillar

function SocialMedia() {
  const [likeCounter, setLikeCounter] = useState(0);

  function handleLike() {
    setLikeCounter(likeCounter + 1);
  }

  function handleDislike() {
    setLikeCounter(likeCounter > 0 ? likeCounter - 1 : 0);
  }

  return (
    <div className="social-media">
      <AiOutlineLike className="like" onClick={handleLike} />
      <span className="like-counter">{likeCounter}</span>
      <AiOutlineDislike className="dis-like" onClick={handleDislike} />
    </div>
  );
}

export default SocialMedia;
