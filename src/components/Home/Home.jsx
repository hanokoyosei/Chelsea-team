import React from "react";
import "./Home.css";
import { Card, Carousel } from "antd";
import {Link} from "react-router-dom"

const { Meta } = Card;
const contentStyle = {
  height: '700px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  marginTop: '5%'
};
const Home = () => {
  return (
    <div className='body'>
      <h2 style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>Турниры которые участвует Челси</h2>
      <div className="cards">
        <Card
          hoverable
          style={{ width: 320, background: 'transparent', border: 'transparent' }}
          cover={
            <img
              alt="example"
              src="https://st1.latestly.com/wp-content/uploads/2019/08/Premier-League-2019-20-Points-Table-Team-Standings.jpg"
            />
          }
        >
          <Meta title="EPL" />
        </Card>
        <Card
          hoverable
          style={{ width: 320, background: 'transparent', border: 'transparent' }}
          cover={
            <img
              alt="example"
              src="https://pbs.twimg.com/media/DfEyn0lW0AEJd8u.jpg:large"
            />
          }
        >
          <Meta title="UCL" />
        </Card>
        <Card
          hoverable
          style={{ width: 320, background: 'transparent', border: 'transparent' }}
          cover={
            <img
              alt="example"
              src="https://pbs.twimg.com/ext_tw_video_thumb/1129776276670169088/pu/img/rp7QuLezjT_S0u8o.jpg"
            />
          }
        >
          <Meta title="FA CUP" />
        </Card>
        <Card
          hoverable
          style={{ width: 320, background: 'transparent', border: 'transparent' }}
          cover={
            <img
              alt="example"
              src="https://i0.wp.com/www.busybuddiesng.com/wp-content/uploads/2017/09/carabao-cup-logo.jpg?w=1440&ssl=1"
            />
          }
        >
          <Meta title="EFL" />
        </Card>
      </div>
      <div>

      <Carousel autoplay>
    <div>
      <img src='https://i0.wp.com/www.teahub.io/photos/full/241-2411074_leicester-city-fc-wallpaper-football-pinterest-futebol-2014.jpg' alt='' style={{width: '1489px', height: '700px'}} />
    </div>
    <div>
      <img src='https://images.pexels.com/photos/9163132/pexels-photo-9163132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' style={{width: '1489px', height: '700px'}} />
    </div>
    <div>
      <img src='https://pbs.twimg.com/media/ERpZ6RMXUAE9hV5.jpg:large' alt='' style={{width: '1489px', height: '700px'}} />
    </div>
  </Carousel>,
      </div>

        <div style={{display: "flex", justifyContent: 'center'}}>
          <h1>Новости</h1>
        </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Link to='/news_daty_matchey'>  
      <Card
              hoverable
              style={{ width: 440, marginLeft: '2%' }}
              
              cover={<img src='https://chelseablues.ru/_nw/789/56837579.jpg' alt='' style={{width: '400px', height: '250px', marginLeft: '4%'}} />}
            >
              <Meta style={{}} title={<h3>Официально: даты матчей Лиги Чемпионов <br/> против «Лилля»</h3>}/>
      </Card>
      </Link>

      <Link to='/news_Christensen_prodlit'>
      <Card
              hoverable
              style={{ width: 440, marginLeft: '2%' }}
              cover={<img src='https://chelseablues.ru/_nw/789/67991365.jpg' alt='' style={{width: '400px', height: '250px', marginLeft: '4%'}} />}
            >
              <Meta style={{}} title={<h3>Кристенсен продлит контракт с «Челси» на <br/> 4 года</h3>}/>
      </Card>
      </Link>

      <Link to='/news_Mount_semeinaya'>
      <Card
              hoverable
              style={{ width: 440, marginLeft: '2%' }}
              cover={<img src='https://chelseablues.ru/_nw/789/15976084.jpg' alt='' style={{width: '400px', height: '250px', marginLeft: '4%'}} />}
            >
              <Meta style={{}} title={<h3>Маунт: «Семейная атмосфера в «Челси» <br/> подпитывает нас к победе в Премьер-лиге»</h3>}/>
      </Card>
      </Link>
      </div>
      </div>
  );
};

export default Home;

