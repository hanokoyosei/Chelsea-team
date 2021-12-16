import React, { useContext, useEffect } from 'react';
import { Card } from "antd";
import "./Players.css"
import { playersContext } from '../../contexts/playersContext';

const { Meta } = Card;
const Players = () => {
    const { getPlayers, players } = useContext(playersContext)
    useEffect(() => {
        getPlayers();
    }, [])
    return (
        <div 
        className="players"
        style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}>
          {players.map((item) => (
              <Card
              hoverable
              style={{ width: 240, flexBasis: '20%', background: 'transparent' }}
              cover={<img alt="example" src={item.photo} />}
            >
              <Meta title={`Name: ${item.player}`}/>
              <Meta title={`Nationality: ${item.nationality}`}/>
              <Meta title={`Age: ${item.age}`}/>
              <Meta title={`Number: ${item.number}`}/>
              <Meta title={`Position: ${item.position}`}/>
            </Card>
          ))}
        </div>
    );
};

export default Players;