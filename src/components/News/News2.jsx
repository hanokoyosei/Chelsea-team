import React from 'react';
import "./News.css"
import { Card } from "antd";

const { Meta } = Card;
const News2 = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className='div' style={{width: '200px'}}>
            </div>
            <div>
            <Card
              hoverable
              style={{ width: 840, marginTop: '2%' }}
              
              cover={<img src='https://chelseablues.ru/_nw/789/56837579.jpg' alt='' style={{width: '700px', height: '500px', marginLeft: '8%'}} />}
            >
              <Meta style={{}} title={<h3>Защитник сборной Дании Андреас Кристенсен <br/> согласовал условия личного контракта с «Челси»</h3>}/>
              <Meta style={{}} title={<p>По информации Дэвида Пастора, защитник подпишет с «Челси» новое соглашение <br/> на 4 года с возможностью продления контракта еще на один сезон. <br/> Футболист получит серьезное повышение в зарплате, а также клуб удовлетворил <br/> требования игрока по сроку контракта, дело в том, что игрок <br/> планирует в будущем сменить клуб и попробовать свои <br/> силы в Италии.</p>} />
            </Card>
            </div>
            <div className='div' style={{width: '240px',}}>

            </div>
        </div>
    );
};

export default News2;