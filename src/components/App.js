import React, { useEffect, useMemo, useState } from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";
var commentId = 4;

const App = () => {
  const [comments, setComments] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [newComment, setNewComment] = useState("");
  const [commentAdded, setCommentAdded] = useState(false);
  const [deleteClick, setDeleteClick] = useState(false);
  const [deleteComment, setDeleteComment] = useState(false);
  const [deleteCommentId, setDeleteCommentId] = useState(null);

  const getData = async () => {
    const res = await fetch("./data.json");
    if (!res.ok) {
      const message = `An error has occurred: ${res.status}`;
      throw new Error(message);
    }
    const data = await res.json();

    setComments(data.comments);
    setCurrentUser(data.currentUser);
  };

  useEffect(() => {
    getData().catch((error) => error.message);
  }, []);

  const addNewComment = (newComment) => {
    return (
      commentAdded &&
      setComments((state) => [
        ...state,
        {
          id: ++commentId,
          content: newComment,
          createdAt: "now",
          score: 0,
          user: {
            image: {
              webp: currentUser.image.webp,
            },
            username: currentUser.username,
          },
          replies: [],
        },
      ])
    );
  };

  useMemo(() => addNewComment(newComment), [newComment]);

  const deleteSelectedComment = (deleteCommentId) => {
    const updatedComments = [...comments].filter(
      (item) => item.id !== deleteCommentId
    );
    deleteComment && setComments(updatedComments);
    setDeleteComment(false);
  };

  useMemo(() => deleteSelectedComment(deleteCommentId), [deleteComment]);

  return (
    <>
      <main>
        <section className="comment-section">
          {currentUser &&
            comments &&
            comments.map((item) => {
              return (
                <Comment
                  key={item.id}
                  id={item.id}
                  content={item.content}
                  createdAt={item.createdAt}
                  score={item.score}
                  userImg={item.user.image.webp}
                  username={item.user.username}
                  replies={item.replies}
                  currentUser={currentUser}
                  setDeleteClick={setDeleteClick}
                  setDeleteCommentId={setDeleteCommentId}
                />
              );
            })}
          {currentUser && (
            <AddComment
              userImg={currentUser.image.webp}
              setNewComment={setNewComment}
              setCommentAdded={setCommentAdded}
            />
          )}
          {deleteClick && (
            <DeleteComment
              setDeleteClick={setDeleteClick}
              setDeleteComment={setDeleteComment}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default App;
