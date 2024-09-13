import React, { useState } from 'react';
import TrendList from './TrendList';
import FeedList from './FeedList';
import LatestList from './LatestList';
//import { postData } from '../data/DUMMY_DATA';
import CreateForm from './CreateForm';

function Main({ dataType, setDataType, schKeyword, isWrite, setIsWrite }) {
  const [originData, setOriginData] = useState({
    trending: [],
    latest: [],
    feed: [],
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

  const selectComponent = () => {
    if (!isWrite) {
      switch (dataType) {
        case 'trending':
          return <TrendList dataType={dataType} dataArr={filteredArr} />;
        case 'feed':
          return <FeedList dataType={dataType} dataArr={filteredArr} />;
        case 'latest':
          return <LatestList dataType={dataType} dataArr={filteredArr} />;
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
