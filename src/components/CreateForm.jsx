import React, { useRef } from 'react';

function CreateForm({ setOriginData, dataType, setDataType, setIsWrite }) {
  const cateRef = useRef();
  const titleRef = useRef();
  const authorRef = useRef();
  const userImageUrlRef = useRef();
  const contentRef = useRef();
  const thumbUrlRef = useRef();

  function clickSubmitHandler() {
    const cateValue = cateRef.current.value;
    /* -------------- */
    const idValue = Date.now(); //타임스템프 밀리세컨드값   1694593530123
    const createdAt = new Date().toISOString(); //ISO UTC 기준)으로 문자열 값    2024-09-13T05:36:07.100Z
    const likes = Math.floor(Math.random() * 150); //임시로 랜덤값
    const comments = Math.floor(Math.random() * 50); //임시로 랜덤값
    /* ----------- */
    const titleValue = titleRef.current.value;
    const authorValue = authorRef.current.value;
    const userImageUrlValue = userImageUrlRef.current.value;
    const contentValue = contentRef.current.value;
    const thumbUrlValue = thumbUrlRef.current.value;

    const creatNewData = {
      id: idValue,
      createdAt: createdAt,
      likes: likes,
      comments: comments,
      title: titleValue,
      author: authorValue,
      userImage: userImageUrlValue,
      content: contentValue,
      image: thumbUrlValue,
    };
    console.log(cateValue);
    console.log(creatNewData);

    setOriginData((prev) => {
      return { ...prev, [cateValue]: [...prev[cateValue], creatNewData] };
    });
    setDataType(cateValue); // 리빌드 될때 해당 카테고리 위치로 다시 목록이 열리게 해준다.
    setIsWrite(false);
  }

  return (
    <div className="write-container">
      <h2 className="title">Velog 글쓰기</h2>
      <div className="row">
        <label htmlFor="secCate">분류</label>
        <select id="secCate" ref={cateRef} defaultValue={dataType}>
          <option value="trending">트렌드</option>
          <option value="latest">최신</option>
          <option value="feed">피드</option>
        </select>
      </div>
      <div className="row">
        <label htmlFor="iptName">제목</label>
        <input type="text" id="iptName" ref={titleRef} />
      </div>
      <div className="row">
        <label htmlFor="iptAuthor">작성자</label>
        <input type="text" id="iptAuthor" ref={authorRef} />
      </div>
      <div className="row">
        <label htmlFor="iptUserImage">작성자 사진</label>
        <input type="text" id="iptUserImage" ref={userImageUrlRef} />
      </div>
      <div className="row">
        <label htmlFor="iptContent">내용글</label>
        <textarea id="iptContent" rows="5" ref={contentRef}></textarea>
      </div>
      <div className="row">
        <label htmlFor="iptImage">썸네일 사진</label>
        <input type="text" id="iptImage" ref={thumbUrlRef} />
      </div>
      <div className="bottom-btn">
        <button type="button" className="btn-write btn-blue" onClick={clickSubmitHandler}>
          글등록 하기
        </button>
      </div>
    </div>
  );
}

export default CreateForm;
