import React, { useRef } from 'react';
import styles from './Card.module.css';

function Card({ item }) {
  /* const postDate = new Date(item.createdAt);
  const year = postDate.getFullYear();
  const month = String(postDate.getMonth() + 1).padStart(2, '0');
  const day = String(postDate.getDate()).padStart(2, '0'); */

  function timeAgo(postDate) {
    const now = new Date(); // 현재 시간
    const diff = now - new Date(postDate); // 현재 시간과 게시 시간의 차이 (밀리초 단위)

    // 밀리초를 시간 단위로 변환
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30); // 대략적으로 계산
    const years = Math.floor(days / 365); // 대략적으로 계산

    // 조건에 따라 적절한 형식으로 반환
    if (seconds < 60) return '방금 전';
    if (minutes < 60) return `${minutes}분 전`;
    if (hours < 24) return `${hours}시간 전`;
    if (days === 1) return '어제';
    if (days < 7) return `${days}일 전`;
    if (weeks === 1) return '1주일 전';
    if (weeks < 4) return `${weeks}주 전`;
    if (months === 1) return '한 달 전';
    if (months < 12) return `${months}달 전`;
    if (years === 1) return '1년 전';
    return `${years}년 전`;
  }

  /* ================================ */

  const modalRef = useRef();

  const openDialog = () => {
    modalRef.current.showModal(); // 다이얼로그 열기
  };

  const closeDialog = () => {
    modalRef.current.close(); // 다이얼로그 닫기
  };

  return (
    <li>
      <div className={styles.card} onClick={openDialog}>
        <div className={styles['photo-wrap']}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={styles['top-info']}>
          <p className={styles['title']}>{item.title}</p>
          <p className={styles['s-text']}>{item.content}</p>
          <p className={styles['day-info']}>
            <span>{timeAgo(item.createdAt)}</span> &middot; <span>{item.comments}개의 댓글</span>
          </p>
        </div>

        <div className={styles['bottom-info']}>
          <div className={styles['l-ele']}>
            <div className={styles['p-photo']}>
              <img src={item.userImage} alt={item.author} />
            </div>
            <span>by</span>
            <span className={styles['nickname']}>{item.author}</span>
          </div>

          <div className={styles['r-ele']}>
            <button className={styles['like-btn']}>
              <span>♥</span>
              <span>{item.likes}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================= */}

      <dialog ref={modalRef} className="card-dialog">
        <button autoFocus onClick={closeDialog}>
          Close
        </button>

        <div className={styles.card}>
          <div className={styles['photo-wrap']}>
            <img src={item.image} alt={item.title} />
          </div>
          <div className={styles['top-info']}>
            <p className={styles['title']}>{item.title}</p>
            <p className={styles['s-text']}>{item.content}</p>
            <p className={styles['day-info']}>
              <span>{timeAgo(item.createdAt)}</span> &middot; <span>{item.comments}개의 댓글</span>
            </p>
          </div>

          <div className={styles['bottom-info']}>
            <div className={styles['l-ele']}>
              <div className={styles['p-photo']}>
                <img src={item.userImage} alt={item.author} />
              </div>
              <span>by</span>
              <span className={styles['nickname']}>{item.author}</span>
            </div>

            <div className={styles['r-ele']}>
              <button className={styles['like-btn']}>
                <span>♥</span>
                <span>{item.likes}</span>
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </li>
  );
}

export default Card;
