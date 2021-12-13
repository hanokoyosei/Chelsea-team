import React, { useReducer } from "react";
import axios from "axios";

import { CASE_GET_PLAYERS } from "../helpers/cases";
import { PLAYERS_API } from "../helpers/consts";

export const playersContext = React.createContext();

const INIT_STATE = {
  players: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_PLAYERS:
      return { ...state, players: action.payload.data };
    default:
      return state;
  }
};

const PlayersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createPlayer(newPlayer) {
    await axios.post(PLAYERS_API, newPlayer);
    getPlayers();
  }
  async function getPlayers() {
    let result = await axios.get(PLAYERS_API);
    dispatch({
      type: CASE_GET_PLAYERS,
      payload: result,
    });
  }

  async function deletePlayer(id) {
    await axios.delete(`${PLAYERS_API}/${id}`);
    getPlayers();
  }

  return (
    <playersContext.Provider
      value={{
        players: state.players,
        getPlayers,
        deletePlayer,
        createPlayer,
      }}
    >
      {children}
    </playersContext.Provider>
  );
};
export default PlayersContextProvider;