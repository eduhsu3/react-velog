import React, { useState } from 'react';
import TrendList from './TrendList';
import FeedList from './FeedList';
import LatestList from './LatestList';
import { postData } from '../data/DUMMY_DATA';
import CreateForm from './CreateForm';
import { loadLocalHandler, saveLocalHandler } from '../localStorageHandler';

function Main({ dataType, setDataType, schKeyword, isWrite, setIsWrite }) {
  /* const [originData, setOriginData] = useState({
    trending: postData.trending,
    latest: postData.latest,
    feed: postData.feed,
  }); */
  const [originData, setOriginData] = useState(loadLocalHandler);

  const dataArr = originData[dataType];

  const filteredSearch = () => {
    if (schKeyword !== null) {
      return dataArr.filter((item) => item.title.toLowerCase().includes(schKeyword.toLowerCase()));
    } else {
      return dataArr;
    }
  };
  const filteredArr = filteredSearch();

  //데이터 삭제후 다시 리빌드
  const removeHandler = (prmId) => {
    const removedDataArr = dataArr.filter((item) => item.id !== prmId);
    const updateObj = { ...originData, [dataType]: removedDataArr };
    setOriginData(updateObj);
    saveLocalHandler(updateObj);
  };

  const selectComponent = () => {
    if (!isWrite) {
      switch (dataType) {
        case 'trending':
          return <TrendList dataType={dataType} dataArr={filteredArr} removeHandler={removeHandler} />;
        case 'feed':
          return <FeedList dataType={dataType} dataArr={filteredArr} removeHandler={removeHandler} />;
        case 'latest':
          return <LatestList dataType={dataType} dataArr={filteredArr} removeHandler={removeHandler} />;
        default:
          return (
            <div>
              <p>컨텐츠가 존재 하지 않습니다.</p>
            </div>
          );
      }
    } else {
      return <CreateForm originData={originData} setOriginData={setOriginData} dataType={dataType} setDataType={setDataType} setIsWrite={setIsWrite} />;
    }
  };

  return <main>{selectComponent()}</main>;
}

export default Main;
