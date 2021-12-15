import React from 'react';
import "./News.css"
import { Card } from "antd";

const { Meta } = Card;
const News3 = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className='div' style={{width: '200px'}}>
            </div>
            <div>
            <Card
              hoverable
              style={{ width: 840, marginTop: '2%' }}
              
              cover={<img src='https://chelseablues.ru/_nw/789/15976084.jpg' alt='' style={{width: '700px', height: '500px', marginLeft: '8%'}} />}
            >
              <Meta style={{}} title={<h3>Полузащитник Мейсон Маунт приветствовал семейную атмосферу «Челси» <br/> как стимул для борьбы клуба за титул чемпиона Премьер-лиги.</h3>}/>
              <Meta title={<p>«В настоящее время из академии приходит много игроков, и мы знаем друг друга с шести, семи, <br/> восьми лет», - сказал Маунт. <p/> «Мы очень близкие друзья на поле и вне его. Мы знаем друг друга очень давно, и это помогает, когда <br/> у вас такая тесная связь». <p/> «Вместе с другими ребятами мы определенно похожи на семью; команда очень сплочена». <p/> «И я думаю, что это то, что вам нужно, если вы хотите далеко продвинуться в соревнованиях, если вы <br/> хотите выигрывать большие вещи и выигрывать Премьер-лигу, и, очевидно, это наша <br/> следующая цель».</p>} />
            </Card>
            </div>
            <div className='div' style={{width: '240px',}}>

            </div>
        </div>
    );
};

export default News3;