import React, { useState } from "react";

const AddReply = React.memo(
  ({
    currentUserImg,
    setReplyClick,
    setNewReply,
    setReplyAdded,
    replyingToUser,
  }) => {
    const [textInput, setTextInput] = useState("@" + replyingToUser + ", ");

    return (
      <>
        <div className="add-reply">
          <img className="user__img" src={currentUserImg} alt="User Profile." />
          <form className="user__reply">
            <textarea
              className="reply__area"
              placeholder=""
              value={textInput}
              onInput={(e) => setTextInput(e.target.value)}
            ></textarea>
            <button
              className="btn btn--reply"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setNewReply(textInput);
                setReplyAdded(
                  textInput.length > replyingToUser.length + 3 ? true : false
                );
                setTextInput("");
                setReplyClick(
                  textInput.length > replyingToUser.length + 3 ? false : true
                );
                setTextInput("@" + replyingToUser + ", ");
              }}
            >
              REPLY
            </button>
          </form>
        </div>
      </>
    );
  }
);

export default AddReply;
