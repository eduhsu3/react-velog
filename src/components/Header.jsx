import React, { useState } from 'react';

function Header({ setDataType, dataType, setSchKeyword, isWrite, setIsWrite }) {
  const [schIpt, setSchIpt] = useState('');
  function changeHandler(e) {
    setSchIpt(e.target.value);
    if (e.target.value.trim() === '') {
      setSchKeyword(null);
    } else {
      setSchKeyword(e.target.value.trim());
    }
  }
  return (
    <header>
      <div className="row-top">
        <h1 className="logo">Velog</h1>

        {isWrite ? null : (
          <div className="topSch">
            <input type="text" id="iptSearch" value={schIpt} onChange={changeHandler} />
          </div>
        )}

        <div className="util">
          {/* <button>로그인</button> */}
          <button
            onClick={() => {
              setIsWrite((prev) => !prev);
            }}
          >
            {isWrite ? '나가기' : '글쓰기'}
          </button>
        </div>
      </div>
      {isWrite ? null : (
        <div className="row-bottom">
          <nav className="tab-btn">
            <button onClick={() => setDataType('trending')} className={dataType === 'trending' ? 'active' : ''}>
              트렌딩
            </button>
            <button onClick={() => setDataType('latest')} className={dataType === 'latest' ? 'active' : ''}>
              최신
            </button>
            <button onClick={() => setDataType('feed')} className={dataType === 'feed' ? 'active' : ''}>
              피드
            </button>
          </nav>

          <div className="util">
            <select className="sortSec">
              <option value="week">이번주</option>
              <option value="month">이번달</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
