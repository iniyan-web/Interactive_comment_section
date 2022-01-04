import React from "react";

const DeleteComment = ({ setDeleteClick, setDeleteComment }) => {
  return (
    <>
      <div className="delete-comment">
        <div className="dc-modal">
          <div className="modal__text">
            <h2 className="mt__heading">Delete Comment</h2>
            <p className="mt__info">
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
          </div>
          <div className="modal__actions">
            <button
              className="btn btn--cancel"
              onClick={() => setDeleteClick(false)}
            >
              NO, CANCEL
            </button>
            <button
              className="btn btn--delete"
              onClick={() => {
                setDeleteClick(false);
                setDeleteComment(true);
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

export default DeleteComment;
