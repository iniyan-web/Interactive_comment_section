import React, { useState, useMemo } from "react";
import SubReply from "./SubReply";
import AddSubReply from "./AddSubReply";
import EditReply from "./EditReply";
import DeleteReply from "./DeleteReply";
var subReplyId = 2000;

const Reply = ({
  id,
  content,
  createdAt,
  score,
  replyingTo,
  userImg,
  username,
  subreplies,
  currentUser,
  setDeleteRClick,
  setDeleteReplyId,
}) => {
  const [totalSubReplies, setTotalSubReplies] = useState(subreplies);
  const [scoreCount, setScoreCount] = useState(score);
  const [subReplyClick, setSubReplyClick] = useState(false);
  const [subReplyAdded, setSubReplyAdded] = useState(false);
  const [newSubReply, setNewSubReply] = useState("");
  const [editClick, setEditClick] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [updatedText, setUpdatedText] = useState("");
  const [deleteSRClick, setDeleteSRClick] = useState(false);
  const [deleteSReply, setDeleteSReply] = useState(false);
  const [deleteSReplyId, setDeleteSReplyId] = useState(null);

  const addNewSubReply = (newSubReply) => {
    return (
      subReplyAdded &&
      setTotalSubReplies((state) => [
        ...state,
        {
          id: ++subReplyId,
          content: newSubReply.slice(username.length + 3, newSubReply.length),
          createdAt: "now",
          score: 0,
          replyingTo: username,
          user: {
            image: {
              webp: currentUser.image.webp,
            },
            username: currentUser.username,
          },
        },
      ])
    );
  };

  useMemo(() => addNewSubReply(newSubReply), [newSubReply]);

  const deleteSelectedSReply = (deleteSReplyId) => {
    const updatedSReplies = [...totalSubReplies].filter(
      (item) => item.id !== deleteSReplyId
    );
    deleteSReply && setTotalSubReplies(updatedSReplies);
    setDeleteSReply(false);
  };

  useMemo(() => deleteSelectedSReply(deleteSReplyId), [deleteSReply]);

  return (
    <>
      <div className="reply-wrapper">
        <div className="reply">
          <div className="reply__score">
            <svg
              className="score__plus"
              onClick={() => setScoreCount((prev) => prev + 1)}
              width="11"
              height="11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
            </svg>
            <p className="score__count">{scoreCount}</p>
            <svg
              className="score__minus"
              onClick={() => setScoreCount((prev) => prev - 1)}
              width="11"
              height="3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
            </svg>
          </div>
          <div className="reply__info">
            <div className="r-info__top">
              <div className="user">
                <img className="user__img" src={userImg} alt="User dp." />
                <h3 className="user__name">{username}</h3>
                {username === "juliusomo" && <p className="user__you">you</p>}
                <p className="user__r-creation">{createdAt}</p>
              </div>
              <div className="action-panel">
                {username === "juliusomo" ? (
                  <>
                    <div
                      className="action__delete"
                      onClick={() => {
                        setDeleteRClick(true);
                        setDeleteReplyId(id);
                      }}
                    >
                      <svg
                        className="delete__icon"
                        width="12"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" />
                      </svg>
                      <p className="delete__text">Delete</p>
                    </div>
                    <div
                      className="action__edit"
                      onClick={() => setEditClick((prev) => !prev)}
                    >
                      <svg
                        className="edit__icon"
                        width="14"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" />
                      </svg>
                      <p className="edit__text">Edit</p>
                    </div>
                  </>
                ) : (
                  <div
                    className="action__reply"
                    onClick={() => setSubReplyClick((prev) => !prev)}
                  >
                    <svg
                      className="reply__icon"
                      width="14"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />
                    </svg>
                    <p className="reply__text">Reply</p>
                  </div>
                )}
              </div>
            </div>
            {editClick ? (
              <EditReply
                content={isUpdated ? updatedText : content}
                replyingTo={replyingTo}
                setIsUpdated={setIsUpdated}
                setUpdatedText={setUpdatedText}
                setEditClick={setEditClick}
              />
            ) : (
              <p className="r-info__bottom">
                <span>@{replyingTo} </span>
                {isUpdated ? updatedText : content}
              </p>
            )}
          </div>
        </div>
        {subReplyClick && (
          <AddSubReply
            currentUserImg={currentUser.image.webp}
            setSubReplyClick={setSubReplyClick}
            setNewSubReply={setNewSubReply}
            setSubReplyAdded={setSubReplyAdded}
            replyingToUser={username}
          />
        )}
        {totalSubReplies &&
          totalSubReplies.map((item) => {
            return (
              <SubReply
                key={item.id}
                id={item.id}
                content={item.content}
                createdAt={item.createdAt}
                score={item.score}
                replyingTo={item.replyingTo}
                userImg={item.user.image.webp}
                username={item.user.username}
                setDeleteSRClick={setDeleteSRClick}
                setDeleteSReplyId={setDeleteSReplyId}
              />
            );
          })}
        {deleteSRClick && (
          <DeleteReply
            setDeleteRClick={setDeleteSRClick}
            setDeleteReply={setDeleteSReply}
          />
        )}
      </div>
    </>
  );
};

export default Reply;
