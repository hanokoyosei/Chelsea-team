import React, {useContext, useEffect} from "react";
import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { newsContext } from "../../contexts/newsContext";

const { Meta } = Card
const NewsCard = () => {
  const { getNews, news } = useContext(newsContext)
  useEffect(() => {
      getNews();
  }, [])
  return (
    <div 
        style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}>
          {news.map((item) => (
              <Card
              hoverable
              key={item.id}
              style={{ width: '580px', margin: '10px' }}
              cover={<img alt="example" src={item.image1} style={{width: '550px', height: '350px', marginLeft: '2.5%'}}/>}
              actions={[<StarOutlined style={{ color: "black", fontSize: "25px" }} />]}>
              <Meta
              title={<h4>{item.title}</h4>}
              description={
              <>
              <h3>{item.description}</h3>
              <p style={{color: 'black'}}>{item.paragraph}</p>
              </>}/>
              </Card>
              ))}
        </div>
  );
};

export default NewsCard;

