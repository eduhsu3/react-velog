import Card from './Card';
import { useState, useRef } from 'react';
import DetailModal from './DetailModal';

function TrendList({ dataArr, removeHandler }) {
  const [clickData, setClickData] = useState(null);
  const parentModalRef = useRef();

  function modalOpenHandler(prmData) {
    setClickData(prmData);
    parentModalRef.current.showModal(); // ★ 모달 열기

    // ★ 상태가 업데이트된 후에 모달을 띄우기 위해 setTimeout 추가
    //이것은 권장되는 방법은 아닙니다, 왜냐하면 상태 업데이트 후 동작을 확실히 보장하지 못하는 임시적인 해결책일 수 있기 때문입니다. 특히 딜레이를 0으로 두는 경우, 상태가 제대로 반영되기 전에 동작이 실행될 가능성도 있습니다.
    /* setTimeout(() => {
      parentModalRef.current.showModal();
    }, 0); */
  }
  function modalCloseHandler() {
    setClickData(null);
    parentModalRef.current.close();
  }
  return (
    <div className="list-container">
      <ul>
        {dataArr.map((item) => (
          <Card key={item.id} item={item} modalOpenHandler={modalOpenHandler} modalCloseHandler={modalCloseHandler} removeHandler={removeHandler} />
        ))}
      </ul>
      <DetailModal modalCloseHandler={modalCloseHandler} ref={parentModalRef} item={clickData} />
    </div>
  );
}

export default TrendList;
