import React from 'react';
import  { Carousel } from 'antd'

const NewsList = () => {
    return (
    <div className='carousel' style={{width: '750px', height: '450px', marginLeft: '2%'}}>
    <Carousel autoplay>
    <div>
      <img style={{height: '450px', width: '750px'}} src='https://i1.wp.com/www.thedabigal.com.ng/wp-content/uploads/2021/05/Chelsea-win-UCL-2021.jpg?fit=2048%2C1268&ssl=1' alt='' />
    </div>
    <div>
      <img style={{height: '450px', width: '750px'}} src='https://www.wallpaperup.com/uploads/wallpapers/2014/11/29/534420/bd61d05f7ed11600df758ad9e63defc2.jpg' alt='' />
    </div>
    <div>
      <img style={{height: '450px', width: '750px'}} src='https://i2-prod.football.london/chelsea-fc/transfer-news/article19572886.ece/ALTERNATES/s615/0_GettyImages-1280748069.jpg' alt='' />
    </div>
    </Carousel>
        </div>
    );
};

export default NewsList;