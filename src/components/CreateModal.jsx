import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

const modal = forwardRef(function CreateModal({ cancelCreateModalHandler, acceptCreateModalHandler }, ref) {
  return createPortal(
    <dialog ref={ref}>
      <p>작성한 글을 저장하시겠습니까?</p>
      <button autoFocus onClick={acceptCreateModalHandler}>
        확인
      </button>
      <button autoFocus onClick={cancelCreateModalHandler}>
        취소
      </button>
    </dialog>,
    document.getElementById('modalHere')
  );
});

export default modal;
