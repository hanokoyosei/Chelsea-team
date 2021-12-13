import React, { useContext, useEffect } from 'react';
import { Card } from "antd";

import { playersContext } from '../../contexts/playersContext';

const { Meta } = Card;
const Players = () => {
    const { getPlayers, players } = useContext(playersContext)
    useEffect(() => {
        getPlayers();
    }, [])
    return (
        <div 
        className="container"
        style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}>
          {players.map((item) => (
              <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.logo} />}
            >
              <Meta title={item.player}/>
            </Card>
          ))}
        </div>
    );
};

export default Players;