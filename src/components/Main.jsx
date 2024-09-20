import React, { useState } from 'react';
import TrendList from './TrendList';
import FeedList from './FeedList';
import LatestList from './LatestList';
import { postData } from '../data/DUMMY_DATA';
import CreateForm from './CreateForm';

function Main({ dataType, setDataType, schKeyword, isWrite, setIsWrite }) {
  const [originData, setOriginData] = useState({
    trending: postData.trending,
    latest: postData.latest,
    feed: postData.feed,
  });
  const dataArr = originData[dataType];

  const filtedSearch = () => {
    if (schKeyword !== null) {
      return dataArr.filter((item) => item.title.toLowerCase().includes(schKeyword.toLowerCase()));
    } else {
      return dataArr;
    }
  };
  const filteredArr = filtedSearch();

  //데이터 삭제후 다시 리빌드
  const removeHandler = (prmId) => {
    const removedDataArr = dataArr.filter((item) => item.id !== prmId);
    const copyObj = { ...originData, [dataType]: removedDataArr };
    setOriginData(copyObj);
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
      return <CreateForm setOriginData={setOriginData} dataType={dataType} setDataType={setDataType} setIsWrite={setIsWrite} />;
    }
  };

  return <main>{selectComponent()}</main>;
}

export default Main;
