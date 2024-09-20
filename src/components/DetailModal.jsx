import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

const detailModal = forwardRef(function TestModal({ modalCloseHandler, item }, ref) {
  //console.log(item);
  return createPortal(
    <dialog ref={ref}>
      <button autoFocus onClick={modalCloseHandler}>
        Close
      </button>

      {/* <p>{JSON.stringify(item)}</p> */}

      {item !== null ? (
        <>
          <h2>{item.title}</h2>
          <p>
            <img src={item.image} alt="" />
          </p>
          <p>{item.content}</p>
          <p>{item.author}</p>
          <p>{item.likes}</p>
          <p>{item.comments}</p>
          <p>
            <img src={item.userImage} alt="" />
          </p>
        </>
      ) : (
        ''
      )}
    </dialog>,
    document.getElementById('modalHere')
  );
});

export default detailModal;
