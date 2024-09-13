import React from 'react';
import TrendList from './TrendList';
import FeedList from './FeedList';
import LatestList from './LatestList';
import { postData } from '../data/DUMMY_DATA';
import CreateForm from './CreateForm';

function Main({ dataType, schKeyword, isWrite }) {
  //console.log('검색어 : ', schKeyword);
  const dataArr = postData[dataType];
  //console.log('현재 데이터 : ', dataArr);
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
      return <CreateForm />;
    }
  };

  return <main>{selectComponent()}</main>;
}

export default Main;
