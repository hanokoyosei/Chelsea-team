import React from "react";
import "./Home.css";
import { Card } from "antd";
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
      <h2 style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>Турниры в которых участвует Chelsea</h2>
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
          <Meta title={<h2 style={{color: 'white'}}>English Premier League</h2>} />
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
          <Meta title={<h2 style={{color: 'white'}}>UEFA Champions League</h2>} />
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
          <Meta title={<h2 style={{color: 'white'}}>Emirates FA Cup</h2>} />
        </Card>
        <Card
          hoverable
          style={{ width: 320, background: 'transparent', border: 'transparent' }}
          cover={
            <img
              style={{borderRadius: '50%'}}
              alt="example"
              src="https://i0.wp.com/www.busybuddiesng.com/wp-content/uploads/2017/09/carabao-cup-logo.jpg?w=1440&ssl=1"
            />
          }
        >
          <Meta title={<h2 style={{color: 'white'}}>English Football League</h2>} />
        </Card>
      </div>
      <div>
        
      </div>
        <div style={{display: "flex", justifyContent: 'center'}}>
          <h1 style={{color: 'white'}}>Новости</h1>
        </div>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2%'}}>
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
              style={{ width: 440, marginLeft: '4%' }}
              cover={<img src='https://chelseablues.ru/_nw/789/67991365.jpg' alt='' style={{width: '400px', height: '250px', marginLeft: '4%'}} />}
            >
              <Meta style={{}} title={<h3>Кристенсен продлит контракт с «Челси» на <br/> 4 года</h3>}/>
      </Card>
      </Link>

      <Link to='/news_Mount_semeinaya'>
      <Card
              hoverable
              style={{ width: 440, marginLeft: '4%' }}
              cover={<img src='https://chelseablues.ru/_nw/789/15976084.jpg' alt='' style={{width: '400px', height: '250px', marginLeft: '4%'}} />}
            >
              <Meta style={{}} title={<h3>Маунт: «Семейная атмосфера в «Челси» <br/> подпитывает нас к победе в Премьер-лиге»</h3>}/>
      </Card>
      </Link>
      </div>

  <div class="row" style={{marginLeft: '4%', marginTop: '3%'}}>
  <h2>Premier League Table</h2>
  <h3>2021-22</h3>
  <div class="column">
    <table>
      <tr>
        <th>Position</th>
        <th>Club</th>
        <th>Played</th>
        <th>Won</th>
        <th>Drawn</th>
        <th>Lost</th>
        <th>GF</th>
        <th>GA</th>
        <th>GD</th>
        <th>Points</th>
      </tr>
      <tr>
      <td><img src='https://resources.premierleague.com/premierleague/badges/50/t43@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Manchester City</td>
        <td>17</td>
        <td>13</td>
        <td>2</td>
        <td>2</td>
        <td>40</td>
        <td>9</td>
        <td>31</td>
        <td>41</td>
      </tr>
      <tr>
      <td><img src='https://resources.premierleague.com/premierleague/badges/50/t14@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Liverpool</td>
        <td>16</td>
        <td>11</td>
        <td>4</td>
        <td>1</td>
        <td>45</td>
        <td>12</td>
        <td>33</td>
        <td>37</td>
      </tr>
      <tr>
      <td><img src='https://resources.premierleague.com/premierleague/badges/50/t8@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Chelsea</td>
        <td>16</td>
        <td>11</td>
        <td>3</td>
        <td>2</td>
        <td>38</td>
        <td>11</td>
        <td>27</td>
        <td>36</td>
      </tr>
      <tr>
      <td><img src='https://resources.premierleague.com/premierleague/badges/50/t21@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>West Ham</td>
        <td>16</td>
        <td>8</td>
        <td>4</td>
        <td>4</td>
        <td>28</td>
        <td>19</td>
        <td>9</td>
        <td>28</td>
      </tr>
      <tr>
      <td><img src='https://resources.premierleague.com/premierleague/badges/50/t1@x2.png' alt='' style={{width: '40px', height: '40px'}} /></td>
        <td>Manchester United</td>
        <td>16</td>
        <td>8</td>
        <td>3</td>
        <td>5</td>
        <td>26</td>
        <td>24</td>
        <td>2</td>
        <td>27</td>
      </tr>
    </table>
  <Link to='/table'><h3>Полная таблица</h3></Link>
  </div>
</div>
      

      </div>
  );
};

export default Home;

