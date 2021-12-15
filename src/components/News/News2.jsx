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
              
              cover={<img src='https://chelseablues.ru/_nw/789/67991365.jpg' alt='' style={{width: '700px', height: '500px', marginLeft: '8%'}} />}
            >
              <Meta style={{}} title={<h3>Защитник сборной Дании Андреас Кристенсен согласовал условия личного контракта <br/> с «Челси»</h3>}/>
              <Meta style={{}} title={<p>По информации Дэвида Пастора, защитник подпишет с «Челси» новое соглашение на 4 года с <br/> возможностью продления контракта еще на один сезон. Футболист получит серьезное повышение <br/> в зарплате, а также клуб удовлетворил требования игрока по сроку контракта, дело в том, что игрок <br/> планирует в будущем сменить клуб и попробовать свои силы в Италии.</p>} />
            </Card>
            </div>
            <div className='div' style={{width: '240px',}}>

            </div>
        </div>
    );
};

export default News2;