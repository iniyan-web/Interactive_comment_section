import React, { useState } from "react";

const AddSubReply = React.memo(
  ({
    currentUserImg,
    setSubReplyClick,
    setNewSubReply,
    setSubReplyAdded,
    replyingToUser,
  }) => {
    const [textInput, setTextInput] = useState(`@${replyingToUser}, `);
    return (
      <>
        <div className="add-subreply">
          <img className="user__img" src={currentUserImg} alt="User Profile." />
          <form className="user__subreply">
            <textarea
              className="subreply__area"
              placeholder=""
              value={textInput}
              onInput={(e) => setTextInput(e.target.value)}
            ></textarea>
            <button
              className="btn btn--subreply"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setNewSubReply(textInput);
                setSubReplyAdded(
                  textInput.length > replyingToUser.length + 3 ? true : false
                );
                setTextInput("");
                setSubReplyClick(
                  textInput.length > replyingToUser.length + 3 ? false : true
                );
                setTextInput(`@${replyingToUser}, `);
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
export default AddSubReply;
