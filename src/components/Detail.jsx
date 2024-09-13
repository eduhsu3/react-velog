import React from 'react';
import styles from './Card.module.css';

function Detail({ item, timeAgo }) {
  return (
    <>
      {/* <dialog open>
      <p>Greetings, one and all!</p>
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog> */}

      <dialog>
        <button autoFocus>Close</button>

        <div className={styles.card}>
          <div className={styles['photo-wrap']}>
            <img src={item.image} alt={item.title} />
          </div>
          <div className={styles['top-info']}>
            <p className={styles['title']}>{item.title}</p>
            <p className={styles['s-text']}>{item.content}</p>
            <p className={styles['day-info']}>
              <span>{timeAgo}</span> &middot; <span>{item.comments}개의 댓글</span>
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
    </>
  );
}

export default Detail;
