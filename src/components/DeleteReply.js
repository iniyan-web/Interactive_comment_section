import React from "react";

const DeleteReply = ({ setDeleteRClick, setDeleteReply }) => {
  return (
    <>
      <div className="delete-reply">
        <div className="dr-modal">
          <div className="modal__text">
            <h2 className="mt__heading">Delete reply</h2>
            <p className="mt__info">
              Are you sure you want to delete this reply? This will remove the
              reply and can't be undone.
            </p>
          </div>
          <div className="modal__actions">
            <button
              className="btn btn--cancel"
              onClick={() => setDeleteRClick(false)}
            >
              NO, CANCEL
            </button>
            <button
              className="btn btn--delete"
              onClick={() => {
                setDeleteRClick(false);
                setDeleteReply(true);
              }}
            >
              YES, DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteReply;
