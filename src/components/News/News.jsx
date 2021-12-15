import React from 'react';
import "./News.css"
import { Card } from "antd";

const { Meta } = Card;
const News = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className='div' style={{width: '200px'}}>
            {/* <h3>fjdgsfkj</h3> */}
            </div>
            <div>
            <Card
              hoverable
              style={{ width: 840, marginTop: '2%' }}
              
              cover={<img src='https://chelseablues.ru/_nw/789/56837579.jpg' alt='' style={{width: '700px', height: '500px', marginLeft: '8%'}} />}
            >
              <Meta style={{}} title={<h3>22 февраля 2022 года «Челси» встретится с чемпионом Франции «Лиллем» на <br/> «Стэмфорд Бридж» в первом матче 1/8 финала Лиги Чемпионов. «Синие» отправятся <br/> во Францию на ответный матч 16 марта.</h3>}/>
              <Meta title={<p>Первый матч состоится вскоре после клубного чемпионата мира и матча против «Кристал Пэлас» в <br/> английской Премьер-лиге. 26 февраля, через четыре дня после первого матча, «Челси» сыграет дома <br/> с «Лестер Сити». Ответный матч приходится на матчи лиги с «Ньюкасл Юнайтед» и «Норвич Сити». <br/> На данный момент «Лилль» находится на 11-м месте чемпионата Франции: 6 побед, 7 ничьих и <br/> 5 поражений.</p>} />
            </Card>
            </div>
            <div className='div' style={{width: '240px',}}>

            </div>
        </div>
    );
};

export default News;