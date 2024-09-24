export function loadLocalHandler() {
  const loadData = localStorage.getItem('velogLocalData');

  // localStorage에 velogLocalData 라는 JSON 데이터가 존재하는 체크가 0순위이다.
  // localStorage에 데이터 자체가 없는 경우 null 을 반환 하는것에대한 유효성이 제일 먼저이다.
  // 이렇게 null 이면 이곳에서 return 하고 끝나고,  null 이 아니면  그다음 코드 try 로 이동한다.
  // 최초에 이렇게 유효성 검사 안해주면 아래 try 안에  JSON.parse(loadData)  이부분에서  null 을 파싱할수없기에  에러뜰것이다.
  if (loadData === null) {
    return {
      trending: [],
      latest: [],
      feed: [],
    };
  }

  //null 아니라면 이제 아래 코드에서는 데이터의 갯수를 체크 해서 다시 한번 데이터 갯수에 대해서 유효성 검사가 이루어 진다.
  try {
    const parseData = JSON.parse(loadData);

    // null 은 아니지만 빈 객체일 경우 기본값 반환
    if (typeof parseData === 'object' && Object.keys(parseData).length === 0) {
      return {
        trending: [],
        latest: [],
        feed: [],
      };
    }

    return parseData; // 함수 호출이 아닌 객체 자체를 반환
  } catch (error) {
    //null 은 아니지만 파싱도중에 error 난 경우
    console.error('초기 아무 데이터도 없는 경우 - JSON parsing error:', error);
  }
}
export function saveLocalHandler(prmObjData) {
  const data = JSON.stringify(prmObjData);
  localStorage.setItem('velogLocalData', data);
}
