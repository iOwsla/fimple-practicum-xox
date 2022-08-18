import React, { useState, useEffect, useRef } from 'react';
import Layout from "../../high-level/layout";
import Box from "../Box";
import style from './style.module.scss';
function Game() {
  const [score, setScore] = useState({
    "X": 0,
    "O": 0
  });
  const [game, setGame] = useState({
    squares: Array(9).fill(null),
    stepNumber: 0,
    xIsNext: true
  });

  const winner = checkWinner(game.squares);
  useEffect(() => {

    setScore({ ...score, [winner]: score[winner] + 1 })
  }, [winner]);
  function onClick(e) {
    if (checkWinner(game.squares) || game.squares[e]) {
      return;
    }
    game.squares[e] = game.xIsNext ? "X" : "O";
    game.stepNumber += 1;
    setGame({
      squares: game.squares,
      xIsNext: !game.xIsNext,
      stepNumber: game.stepNumber
    });
  };
  function resetScore() {
    setScore({
      "X": 0,
      "O": 0
    });
  };
  function resetGame() {
    setGame({
      squares: Array(9).fill(null),
      stepNumber: 0,
      xIsNext: true
    })
  }
  return <Layout>
    <div className={style.games}>
      <div className={style.game}>
        <div className="flex flex_center">
          <Box type={game.squares[0]} onClick={() => onClick(0)}></Box>
          <Box type={game.squares[1]} onClick={() => onClick(1)}></Box>
          <Box type={game.squares[2]} onClick={() => onClick(2)}></Box>
        </div>
        <div className="flex flex_center">
          <Box type={game.squares[3]} onClick={() => onClick(3)}></Box>
          <Box type={game.squares[4]} onClick={() => onClick(4)}></Box>
          <Box type={game.squares[5]} onClick={() => onClick(5)}></Box>
        </div>
        <div className="flex flex_center">
          <Box type={game.squares[6]} onClick={() => onClick(6)}></Box>
          <Box type={game.squares[7]} onClick={() => onClick(7)}></Box>
          <Box type={game.squares[8]} onClick={() => onClick(8)}></Box>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.description}>
          <h1>Fimple React Practicum</h1>
          <p>This project was coded by Ferhat AYDIN ​​for Fimple React Practicum.</p>
        </div>
        <div className={style.show_type}>
          <div className={style.shows}>
            <div className={style.box}>O</div>
            <div className={style.box + " " + style.box_score}>{score["O"]}</div>
          </div>
          <div className={style.shows}>
            <div className={style.box}>X</div>
            <div className={style.box + " " + style.box_score}>{score["X"]}</div>
          </div>
        </div>
        <div className={style.button}>
          <button onClick={() => resetGame()}>Restart Game</button>
          <button onClick={() => resetScore()}>Restart Score</button>
        </div>

      </div>
    </div>
  </Layout>
}
export default Game;
function checkWinner(e) {
  const d = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < d.length; i++) {
    const [x, y, z] = d[i];
    if (e[x] && e[x] == e[y] && e[x] == e[z]) {
      return e[x];
    }
  }
  return undefined;
};