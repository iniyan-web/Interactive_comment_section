import React, { useState } from "react";
import EditReply from "./EditReply";

const SubReply = ({
  id,
  content,
  createdAt,
  score,
  replyingTo,
  userImg,
  username,
  setDeleteSRClick,
  setDeleteSReplyId,
}) => {
  const [scoreCount, setScoreCount] = useState(score);
  const [editClick, setEditClick] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [updatedText, setUpdatedText] = useState("");
  return (
    <>
      <div className="sub-reply">
        <div className="sreply__score">
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
        <div className="sreply__info">
          <div className="sr-info__top">
            <div className="user">
              <img className="user__img" src={userImg} alt="User dp." />
              <h3 className="user__name">{username}</h3>
              {username === "juliusomo" && <p className="user__you">you</p>}
              <p className="user__sr-creation">{createdAt}</p>
            </div>
            <div className="action-panel">
              <div
                className="action__delete"
                onClick={() => {
                  setDeleteSRClick(true);
                  setDeleteSReplyId(id);
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
            </div>
          </div>
          {editClick ? (
            <EditReply
              content={isUpdated ? updatedText : ` ${content}`}
              replyingTo={replyingTo}
              setIsUpdated={setIsUpdated}
              setUpdatedText={setUpdatedText}
              setEditClick={setEditClick}
            />
          ) : (
            <p className="sr-info__bottom">
              <span>@{replyingTo} </span>
              {isUpdated ? updatedText : content}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SubReply;
