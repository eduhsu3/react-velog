import Card from './Card';

function FeedList({ dataArr, removeHandler }) {
  console.log(dataArr);
  return (
    <div className="list-container">
      <ul>
        {dataArr.map((item) => (
          <Card key={item.id} item={item} removeHandler={removeHandler} />
        ))}
      </ul>
    </div>
  );
}

export default FeedList;
