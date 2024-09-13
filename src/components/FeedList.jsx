import Card from './Card';

function FeedList({ dataArr }) {
  console.log(dataArr);
  return (
    <div className="list-container">
      <ul>
        {dataArr.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default FeedList;
