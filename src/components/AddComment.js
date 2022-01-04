import React, { useState } from "react";

const AddComment = React.memo(({ userImg, setNewComment, setCommentAdded }) => {
  const [textInput, setTextInput] = useState("");
  return (
    <>
      <div className="add-comment">
        <img className="user__img" src={userImg} alt="User Profile." />
        <form className="user__comment">
          <textarea
            className="comment__area"
            placeholder="Add a comment..."
            value={textInput}
            onInput={(e) => setTextInput(e.target.value)}
          ></textarea>
          <button
            className="btn btn--comment"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setNewComment(textInput);
              setCommentAdded(textInput !== "" ? true : false);
              setTextInput("");
            }}
          >
            SEND
          </button>
        </form>
      </div>
    </>
  );
});

export default AddComment;
