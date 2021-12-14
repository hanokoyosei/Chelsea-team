import React, { useContext, useEffect } from 'react';
import { List, Avatar } from "antd";
import { playersContext } from '../../contexts/playersContext';

const AdminPlayers = () => {
    const { getPlayers, deletePlayer, players } = useContext(playersContext)
    useEffect(() => {
        getPlayers()
    }, [])
    return (
        <List
      className="demo-loadmore-list items-list"
      itemLayout="horizontal"
      dataSource={players}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit" onClick={() => deletePlayer(item.id)}>
              delete
            </a>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.photo} />}
            title={item.player}
          />
        </List.Item>
      )}
    />
    );
};

export default AdminPlayers;