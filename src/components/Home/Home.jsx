import React from "react";
import "./Home.css";
import { Card, Carousel } from "antd";
import { Link } from "react-router-dom";

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
      <div style={{marginTop: '3%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <a style={{color: 'black', fontWeight: 'bold'}}>ANYTIME ANYWHERE BY WATCHES OF SWITZERLAND</a>
      <p style={{marginTop: '1%'}}>A cinematic love letter to the modern collector</p>
      <Link to='/discover'><a style={{color: 'black', textDecoration: 'underline' }}>Discover Featured Watches</a></Link>
      </div>
      <div>
      <Carousel autoplay>
    <div>
      <Link to="/img1">
      <img src='https://fcwallpaper.com/wp-content/uploads/2020/05/Backgrounds-Chelsea-FC-HD.jpg' alt='' style={{width: '1489px', height: '700px'}} />
      </Link>
    </div>
    <div>
      <img src='https://i1.wp.com/www.thedabigal.com.ng/wp-content/uploads/2021/05/Chelsea-win-UCL-2021.jpg?fit=2048%2C1268&ssl=1' alt='' style={{width: '1489px', height: '700px'}} />
    </div>
    <div>
      <img src='https://www.wallpaperup.com/uploads/wallpapers/2014/11/29/534420/bd61d05f7ed11600df758ad9e63defc2.jpg' alt='' style={{width: '1489px', height: '700px'}} />
    </div>
    <div>
      <img src='https://i2-prod.football.london/chelsea-fc/transfer-news/article19572886.ece/ALTERNATES/s615/0_GettyImages-1280748069.jpg' alt='' style={{width: '1489px', height: '700px'}} />
    </div>
  </Carousel>,
      </div>
      <div className="links" style={{marginTop: '3%', display: 'flex', flexDirection: 'row'}}>
        <a>
        <h3 style={{color: '#85754e'}}><img style={{width: '50px', height: '25px'}} src='https://content.thewosgroup.com/wosus/icons/affirm-logo-normal.png' alt='' style={{maxWidth: '64px', marginRight: '10px', verticalAlign: 'bottom'}} />FLEXIBLE FINANCING <br/> <p style={{color: 'black'}}>MAKE MONTHLY PAYMENTS WITH AFFIRM</p></h3>
        </a>
        <a><h3 style={{color: '#85754e'}}>AUTHORIZED LUXURY RETAILER<br/><p style={{color: 'black'}}>NOW AVAILABLE TO BUY ONLINE</p></h3></a>
        <a><h3  style={{color: '#85754e'}}>FREE HOME DELIVERY AVAILABLE<br/><p style={{color: 'black'}}>ESTIMATED DELIVERY 1-3 DAYS</p></h3></a>
      </div>
      {/* <div style={{display: 'flex', justifyContent: 'center'}}>
        <img style={{width: '460px', height: '460px'}} src='https://www.watchesofswitzerland.com/medias/wosus-3wide-omega007-oct21.jpg?context=bWFzdGVyfHJvb3R8MzMwNDM5fGltYWdlL2pwZWd8aDEzL2hiYS85MTE5NjUxODIzNjQ2LmpwZ3xhMzdjMjI0OTJkMGY1OTRjYzRjNTIyZWI0ZTIxYmMzNzdhMzM1ZDE2M2RmMWJjNjExZWZjMTRkYzA4ZmY3NzNj&imwidth=640' alt='' />
        <img style={{width: '460px', height: '460px'}} src='https://www.watchesofswitzerland.com/medias/oris-sunwukong-wosushp-3wide-dec21.png?context=bWFzdGVyfHJvb3R8NTU5NDcyfGltYWdlL3BuZ3xoZDQvaGIxLzkxMjg5NDAxNDI2MjIucG5nfDMwOTEyYjI2MTJiMTg0YWI2MWI2ODVmNGQ1NDMwYjQyMzMwNzNkOTY0MTcyYjM4NWM1NjY5OTc3OWI4MzI5ZDM&imwidth=640' alt='' />
        <img style={{width: '460px', height: '460px'}} src='https://www.watchesofswitzerland.com/medias/wosus-hp3wide-breitling-dec21.jpg?context=bWFzdGVyfHJvb3R8NDM2MDZ8aW1hZ2UvanBlZ3xoYjYvaGMxLzkxMzA1OTg5MjQzMTguanBnfDAwMWI0MGE2MmVhOTI1ODU2NzIzYzk2NGNiYTg0NjgyNDQ4MTRkMDkxODNlNjE1YTUyMGMzODNkYjc4MjA2Y2Y&imwidth=640' alt='' />
      </div> */}
    </div>
  );
};

export default Home;
