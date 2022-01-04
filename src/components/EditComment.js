import React, { useState } from "react";

const EditComment = ({
  content,
  setIsUpdated,
  setUpdatedText,
  setEditClick,
}) => {
  const [textInput, setTextInput] = useState(content);
  const [textChange, setTextChange] = useState(false);
  return (
    <>
      <form className="edit-comment">
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
            setUpdatedText(textInput);
            setIsUpdated(textInput !== "" ? true : false);
            setEditClick(textChange && textInput !== "" ? false : true);
          }}
        >
          UPDATE
        </button>
      </form>
    </>
  );
};

export default EditComment;
