import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import GameMenu from "./components/GameMenu";
import Leaderboard from "./components/Leaderboard";

import { db } from "./firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

type listType = {
  id: string;
  name: string;
  time: number;
};

function App() {
  const [winStatus, setWinStatus] = useState(false);
  const [isGameStart, setIsGameStart] = useState(false);
  const [time, setTime] = useState(0);
  const [playerList, setPlayerList] = useState<listType[]>([]);
  const [level, setLevel] = useState(0);

  // get data from firestore and store it in playerList
  useEffect(() => {
    const playersCollectionRef = collection(db, "player");
    const getUsers = async () => {
      const data = await getDocs(query(playersCollectionRef, orderBy("time")));
      const list = data.docs.map<listType>((doc) => {
        const docData = doc.data();
        return {
          id: doc.id,
          name: docData.name,
          time: docData.time,
        };
      });
      setPlayerList(list);
    };

    getUsers();
  }, []);

  return (
    <>
      <Navbar
        level={level}
        setLevel={setLevel}
        setWinStatus={setWinStatus}
        setIsGameStart={setIsGameStart}
        setTime={setTime}
      />
      {winStatus ? (
        <Leaderboard
          isWin={winStatus}
          time={time}
          setLevel={setLevel}
          setWinStatus={setWinStatus}
          setIsGameStart={setIsGameStart}
          setTime={setTime}
          playerList={playerList}
          setPlayerList={setPlayerList}
        />
      ) : isGameStart ? (
        <Game
          setWinStatus={setWinStatus}
          winStatus={winStatus}
          time={time}
          setTime={setTime}
        />
      ) : (
        <GameMenu setIsGameStart={setIsGameStart} setLevel={setLevel} />
      )}
    </>
  );
}

export default App;
