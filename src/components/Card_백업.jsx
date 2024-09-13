import React from 'react';

function Card({ item }) {
  const date = new Date(item.createdAt);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  //const dateResult
  return (
    <li>
      <div className="card">
        <div className="photo-wrap">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="top-info">
          <p className="title">{item.title}</p>
          <p className="s-text">{item.content}</p>
          <p className="day-info">
            <span>{`${year}년 ${month}월 ${day}일`}</span> &middot; <span>{item.comments}개의 댓글</span>
          </p>
        </div>

        <div className="bottom-info">
          <div className="l-ele">
            <div className="p-photo">
              <img src={item.userImage} alt={item.author} />
            </div>
            <span>by</span>
            <span className="nickname">{item.author}</span>
          </div>

          <div className="r-ele">
            <button className="like-btn">
              <span>♥</span>
              <span>{item.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
