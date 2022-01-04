import React, { useState } from "react";

const EditComment = ({
  content,
  replyingTo,
  setIsUpdated,
  setUpdatedText,
  setEditClick,
}) => {
  const [textInput, setTextInput] = useState(`@${replyingTo},${content}`);
  const [textChange, setTextChange] = useState(false);
  return (
    <>
      <form className="edit-reply">
        <textarea
          className="edit__area"
          value={textInput}
          onInput={(e) => {
            setTextInput(e.target.value);
            setTextChange(true);
          }}
        ></textarea>
        <button
          className="btn btn--update"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setUpdatedText(
              textInput.slice(replyingTo.length + 2, textInput.length)
            );
            setIsUpdated(
              textInput.length > replyingTo.length + 3 ? true : false
            );
            setEditClick(
              textChange && textInput.length > replyingTo.length + 3
                ? false
                : true
            );
            textChange && setTextInput(`@${replyingTo}, `);
          }}
        >
          UPDATE
        </button>
      </form>
    </>
  );
};

export default EditComment;
