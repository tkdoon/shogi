import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Kin from "./image/syougi_koma_kin.png";
import Ou from "./image/syougi_koma_ou.png";
import Gyoku from "./image/syougi_koma_gyoku.png";
import Gin from "./image/syougi_koma_gin.png";
import Kei from "./image/syougi_koma_kei.png";
import Kyou from "./image/syougi_koma_kyou.png";
import Hu from "./image/syougi_koma_hu.png";
import Hi from "./image/syougi_koma_hi.png";
import Kaku from "./image/syougi_koma_kaku.png";
import Narigin from "./image/syougi_koma_narigin.png";
import Narikei from "./image/syougi_koma_narikei.png";
import Narikyou from "./image/syougi_koma_narikyou.png";
import Ryu from "./image/syougi_koma_ryu.png";
import Uma from "./image/syougi_koma_uma.png";
import To from "./image/syougi_koma_to.png";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { blue } from "@material-ui/core/colors";
import _, { cloneDeep } from "lodash";

const App = () => {
  const [board, setBoard] = useState([
    [
      {
        name: "kyou",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "kei",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "gin",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "kin",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "ou",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "kin",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "gin",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "kei",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "kyou",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
    ],
    [
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hi",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "kaku",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
    ],
    [
      {
        name: "hu",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "yours",
        canPlace: false,
        kingCanPlase: false,
      },
    ],
    [
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
    ],
    [
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
    ],
    [
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
    ],
    [
      {
        name: "hu",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hu",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
    ],
    [
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "kaku",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "hi",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "",
        chosen: false,
        whose: "",
        canPlace: false,
        kingCanPlase: false,
      },
    ],
    [
      {
        name: "kyou",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "kei",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "gin",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "kin",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "gyoku",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "kin",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "gin",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "kei",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
      {
        name: "kyou",
        chosen: false,
        whose: "mine",
        canPlace: false,
        kingCanPlase: false,
      },
    ],
  ]);
  // board[縦][横]
  const [boardHistory, setBoardHistory] = useState([]);
  const [myKoma, setMyKoma] = useState([]);
  const [yourKoma, setYourKoma] = useState([]);
  const [turn, setTurn] = useState("mine");
  const [anyIsChosen, setAnyIsChosen] = useState(false);
  const [chosenPlace, setChosenPlace] = useState();
  const [chosenPlace2, setChosenPlace2] = useState();
  const [ownIsChosen, setOwnIsChosen] = useState("");
  const [open, setOpen] = React.useState(false);
  const [chosenKoma, setChosenKoma] = useState("");

  useEffect(() => {
    const boardNow = _.cloneDeep(board);
    const myKomaNow = _.cloneDeep(myKoma);
    const yourKomaNow = _.cloneDeep(yourKoma);
    console.log(boardNow);
    setBoardHistory([...boardHistory, [boardNow, myKomaNow, yourKomaNow]]);
  }, [turn]);

  const handleBoardClick = (i, j) => {
    console.log(board);
    let boardState = _.cloneDeep(board);
    //どこも選ばれてなくて押したところが自分の駒の時
    if (board[i][j].whose === turn && !anyIsChosen) {
      boardState[i][j].chosen = true;
      console.log(boardState[i][j].chosen);
      setAnyIsChosen(true);
      switch (
        board[i][j].name //選択された駒によってどこが置けるのかを判断
      ) {
        case "hu":
          if (
            board[i][j].whose === "yours" &&
            board[i + 1][j].whose !== "yours"
          ) {
            boardState[i + 1][j].canPlace = true;
          } else if (
            board[i][j].whose === "mine" &&
            board[i - 1][j].whose !== "mine"
          ) {
            boardState[i - 1][j].canPlace = true;
          }
          break;
        case "kyou":
          if (board[i][j].whose === "yours") {
            for (let k = 1; k < 9; k++) {
              if (board[i + k][j].whose === "yours") break;
              boardState[i + k][j].canPlace = true;
              if (board[i + k][j].whose === "mine" || i + k === 8) break;
            }
          } else if (board[i][j].whose === "mine") {
            for (let k = 1; k < 9; k++) {
              if (board[i - k][j].whose === "mine") break;
              boardState[i - k][j].canPlace = true;
              if (board[i - k][j].whose === "yours" || i - k === 0) break;
            }
          }
          break;
        case "kei":
          if (board[i][j].whose === "yours") {
            if (j < 8 && board[i + 2][j + 1].whose !== "yours")
              boardState[i + 2][j + 1].canPlace = true;
            if (j > 0 && board[i + 2][j - 1].whose !== "yours")
              boardState[i + 2][j - 1].canPlace = true;
          } else if (board[i][j].whose === "mine") {
            if (j < 8 && board[i - 2][j + 1].whose !== "mine")
              boardState[i - 2][j + 1].canPlace = true;
            if (j > 0 && board[i - 2][j - 1].whose !== "mine")
              boardState[i - 2][j - 1].canPlace = true;
          }
          break;
        case "gin":
          {
            if (i < 8 && j > 0 && board[i + 1][j - 1].whose !== turn)
              boardState[i + 1][j - 1].canPlace = true;
            if (i < 8 && j < 8 && board[i + 1][j + 1].whose !== turn)
              boardState[i + 1][j + 1].canPlace = true;
            if (i > 0 && j > 0 && board[i - 1][j - 1].whose !== turn)
              boardState[i - 1][j - 1].canPlace = true;
            if (i > 0 && j < 8 && board[i - 1][j + 1].whose !== turn)
              boardState[i - 1][j + 1].canPlace = true;
            if (
              board[i][j].whose === "yours" &&
              i < 8 &&
              board[i + 1][j].whose !== "yours"
            ) {
              boardState[i + 1][j].canPlace = true;
            } else if (
              board[i][j].whose === "mine" &&
              i > 0 &&
              board[i - 1][j].whose !== "mine"
            ) {
              boardState[i - 1][j].canPlace = true;
            }
          }
          break;
        case "kin":
        case "narigin":
        case "narikei":
        case "to":
        case "narikyou":
          {
            if (j > 0 && board[i][j - 1].whose !== turn)
              boardState[i][j - 1].canPlace = true;
            if (j < 8 && board[i][j + 1].whose !== turn)
              boardState[i][j + 1].canPlace = true;
            if (i > 0 && board[i - 1][j].whose !== turn)
              boardState[i - 1][j].canPlace = true;
            if (i < 8 && board[i + 1][j].whose !== turn)
              boardState[i + 1][j].canPlace = true;
            if (board[i][j].whose === "yours" && i < 8) {
              if (j < 8 && board[i + 1][j + 1].whose !== "yours")
                boardState[i + 1][j + 1].canPlace = true;
              if (j > 0 && board[i + 1][j - 1].whose !== "yours")
                boardState[i + 1][j - 1].canPlace = true;
            } else if (board[i][j].whose === "mine" && i > 0) {
              if (j > 0 && board[i - 1][j - 1].whose !== "mine")
                boardState[i - 1][j - 1].canPlace = true;
              if (j < 8 && board[i - 1][j + 1].whose !== "mine")
                boardState[i - 1][j + 1].canPlace = true;
            }
          }
          break;
        case "gyoku":
        case "ou":
          {
            if (i < 8 && board[i + 1][j].whose !== turn)
              boardState[i + 1][j].canPlace = true;
            if (i < 8 && j < 8 && board[i + 1][j + 1].whose !== turn)
              boardState[i + 1][j + 1].canPlace = true;
            if (i < 8 && j > 0 && board[i + 1][j - 1].whose !== turn)
              boardState[i + 1][j - 1].canPlace = true;
            if (j < 8 && board[i][j + 1].whose !== turn)
              boardState[i][j + 1].canPlace = true;
            if (j > 0 && board[i][j - 1].whose !== turn)
              boardState[i][j - 1].canPlace = true;
            if (i > 0 && j < 8 && board[i - 1][j + 1].whose !== turn)
              boardState[i - 1][j + 1].canPlace = true;
            if (i > 0 && j > 0 && board[i - 1][j - 1].whose !== turn)
              boardState[i - 1][j - 1].canPlace = true;
            if (i > 0 && board[i - 1][j].whose !== turn)
              boardState[i - 1][j].canPlace = true;
          }
          break;
        case "hi":
          for (let k = 1; k < 9; k++) {
            if (j === 8 || board[i][j + k].whose === turn) break;
            boardState[i][j + k].canPlace = true;
            if (board[i][j + k].name || j + k === 8) break;
          }
          for (let k = 1; k < 9; k++) {
            if (j === 0 || board[i][j - k].whose === turn) break;
            boardState[i][j - k].canPlace = true;
            if (board[i][j - k].name || j - k === 0) break;
          }
          for (let k = 1; k < 9; k++) {
            if (i === 8 || board[i + k][j].whose === turn) break;
            boardState[i + k][j].canPlace = true;
            if (board[i + k][j].name || i + k === 8) break;
          }
          for (let k = 1; k < 9; k++) {
            if (i === 0 || board[i - k][j].whose === turn) break;
            boardState[i - k][j].canPlace = true;
            if (board[i - k][j].name || i - k === 0) break;
          }
          break;
        case "kaku":
          for (let k = 1; k < 9; k++) {
            if (i === 8 || j === 8 || board[i + k][j + k].whose === turn) break;
            boardState[i + k][j + k].canPlace = true;
            if (board[i + k][j + k].name || i + k === 8 || j + k === 8) break;
          }
          for (let k = 1; k < 9; k++) {
            if (i === 8 || j === 0 || board[i + k][j - k].whose === turn) break;
            boardState[i + k][j - k].canPlace = true;
            if (board[i + k][j - k].name || i + k === 8 || j - k === 0) break;
          }
          for (let k = 1; k < 9; k++) {
            if (i === 0 || j === 8 || board[i - k][j + k].whose === turn) break;
            boardState[i - k][j + k].canPlace = true;
            if (board[i - k][j + k].name || i - k === 0 || j + k === 8) break;
          }
          for (let k = 1; k < 9; k++) {
            if (i === 0 || j === 0 || board[i - k][j - k].whose === turn) break;
            boardState[i - k][j - k].canPlace = true;
            if (board[i - k][j - k].name || i - k === 0 || j - k === 0) break;
          }
          break;
        case "ryu":
          for (let k = 1; k < 9; k++) {
            if (j === 8 || board[i][j + k].whose === turn) break;
            boardState[i][j + k].canPlace = true;
            if (board[i][j + k].name || j + k === 8) break;
          }
          for (let k = 1; k < 9; k++) {
            if (j === 0 || board[i][j - k].whose === turn) break;
            boardState[i][j - k].canPlace = true;
            if (board[i][j - k].name || j - k === 0) break;
          }
          for (let k = 1; k < 9; k++) {
            if (i === 8 || board[i + k][j].whose === turn) break;
            boardState[i + k][j].canPlace = true;
            if (board[i + k][j].name || i + k === 8) break;
          }
          for (let k = 1; k < 9; k++) {
            if (i === 0 || board[i - k][j].whose === turn) break;
            boardState[i - k][j].canPlace = true;
            if (board[i - k][j].name || i - k === 0) break;
          }
          if (i < 8 && j < 8 && board[i + 1][j + 1].whose !== turn)
            boardState[i + 1][j + 1].canPlace = true;
          if (i < 8 && j > 0 && board[i + 1][j - 1].whose !== turn)
            boardState[i + 1][j - 1].canPlace = true;
          if (i > 0 && j < 8 && board[i - 1][j + 1].whose !== turn)
            boardState[i - 1][j + 1].canPlace = true;
          if (i > 0 && j > 0 && board[i - 1][j - 1].whose !== turn)
            boardState[i - 1][j - 1].canPlace = true;
          break;
        case "uma":
          for (let k = 1; k < 9; k++) {
            if (i === 8 || j === 8 || board[i + k][j + k].whose === turn) break;
            boardState[i + k][j + k].canPlace = true;
            if (board[i + k][j + k].name || i + k === 8 || j + k === 8) break;
          }
          for (let k = 1; k < 9; k++) {
            if (i === 8 || j === 0 || board[i + k][j - k].whose === turn) break;
            boardState[i + k][j - k].canPlace = true;
            if (board[i + k][j - k].name || i + k === 8 || j - k === 0) break;
          }
          for (let k = 1; k < 9; k++) {
            if (i === 0 || j === 8 || board[i - k][j + k].whose === turn) break;
            boardState[i - k][j + k].canPlace = true;
            if (board[i - k][j + k].name || i - k === 0 || j + k === 8) break;
          }
          for (let k = 1; k < 9; k++) {
            if (i === 0 || j === 0 || board[i - k][j - k].whose === turn) break;
            boardState[i - k][j - k].canPlace = true;
            if (board[i - k][j - k].name || i - k === 0 || j - k === 0) break;
          }
          if (i < 8 && board[i + 1][j].whose !== turn) {
            boardState[i + 1][j].canPlace = true;
            console.log("a");
          }
          if (j > 0 && board[i][j - 1].whose !== turn)
            boardState[i][j - 1].canPlace = true;
          if (j < 8 && board[i][j + 1].whose !== turn)
            boardState[i][j + 1].canPlace = true;
          if (i > 0 && board[i - 1][j].whose !== turn)
            boardState[i - 1][j].canPlace = true;
          break;
        default:
          alert("bag");
      }
      setBoard(boardState);
      setChosenPlace([i, j]); //選んだコマの場所を記憶
    }

    //自分の駒がすでに選ばれているとき
    else if (anyIsChosen) {
      console.log(board[chosenPlace[0]][chosenPlace[1]]);

      if (board[i][j].canPlace) {
        //選んだ場所が駒を置ける場所なら
        setChosenPlace2([i, j]);
        if (board[i][j].whose && board[i][j].whose !== turn) {
          //選んだ場所に相手の駒があるとき

          const KomaPlas =
            turn === "mine"
              ? [...myKoma].concat({ name: getKomaName(i, j), chosen: false })
              : [...yourKoma].concat({
                  name: getKomaName(i, j),
                  chosen: false,
                });
          if (turn === "mine") {
            setMyKoma(KomaPlas);
          } else {
            setYourKoma(KomaPlas);
          } //持ち駒の配列にとった駒を追加
        }
        setChosenKoma(board[chosenPlace[0]][chosenPlace[1]].name);
        boardState[i][j].name = board[chosenPlace[0]][chosenPlace[1]].name; //選んだ位置にさっき選択した駒をセットする
        boardState[i][j].whose = turn;
        boardState[chosenPlace[0]][chosenPlace[1]].chosen = false; //さっき選んだ位置の駒を消す
        boardState[chosenPlace[0]][chosenPlace[1]].name = "";
        boardState[chosenPlace[0]][chosenPlace[1]].whose = "";
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 9; j++) {
            boardState[i][j].canPlace = false; //すべての位置を置けない状態に戻しておく
          }
        }

        setAnyIsChosen(false);
        setBoard(boardState);
        if (
          ((turn === "mine" && (i <= 2 || chosenPlace[0] <= 2)) ||
            (turn === "yours" && (i >= 6 || chosenPlace[0] >= 6))) &&
          (board[chosenPlace[0]][chosenPlace[1]].name === "hu" ||
            board[chosenPlace[0]][chosenPlace[1]].name === "kyou" ||
            board[chosenPlace[0]][chosenPlace[1]].name === "kei" ||
            board[chosenPlace[0]][chosenPlace[1]].name === "gin" ||
            board[chosenPlace[0]][chosenPlace[1]].name === "hi" ||
            board[chosenPlace[0]][chosenPlace[1]].name === "kaku")
        ) {
          setOpen(true);
        } else {
          const next = turn === "mine" ? "yours" : "mine";
          setTurn(next);
        }
      } else {
        //置けない場所だった時の処理
        // setBoard(boardHistory.slice(-1)[0]);
        // console.log("下");
        // console.log(boardHistory);
      }
    }

    //持ち駒が選ばれている状態の時
    else if (
      ownIsChosen &&
      board[i][j].name === "" &&
      !(
        (ownIsChosen.name === "hu" || ownIsChosen.name === "kyou") &&
        ((ownIsChosen.whose === "mine" && i === 0) ||
          (ownIsChosen.whose === "yours" && i === 8))
      ) &&
      !(
        ownIsChosen.name === "kei" &&
        ((ownIsChosen.whose === "mine" && i <= 1) ||
          (ownIsChosen.whose === "yours" && i >= 7))
      ) //歩、桂、香は置けない場所がある
    ) {
      boardState[i][j].name =
        turn === "mine" ? myKoma[chosenPlace].name : yourKoma[chosenPlace].name;
      boardState[i][j].whose = turn;
      setBoard(boardState);
      const restOwnedKoma = turn === "mine" ? myKoma : yourKoma;
      restOwnedKoma.splice(chosenPlace, 1); //選ばれた駒を持ち駒から削除
      if (turn === "mine") {
        setMyKoma(restOwnedKoma);
      } else {
        setYourKoma(restOwnedKoma);
      }
      setOwnIsChosen("");
      const next = turn === "mine" ? "yours" : "mine";
      setTurn(next);
      setChosenPlace();
    }
  };

  const handleOwnedClick = (i) => {
    setChosenPlace(i);
    if (turn === "mine") {
      setOwnIsChosen({ name: myKoma[i].name, whose: "mine" });
      const ownedKoma = [...myKoma];
      ownedKoma[i].chosen = true;
      setMyKoma(ownedKoma);
    } else {
      setOwnIsChosen({ name: yourKoma[i].name, whose: "yours" });
      const ownedKoma = [...yourKoma];
      ownedKoma[i].chosen = true;
      setYourKoma(ownedKoma);
    }
  };

  // const cancel = () => {
  //   console.log(board);
  //   console.log(boardHistory.slice(-1)[0]);
  // };

  const handleMotoClick = () => {
    setOpen(false);
    const next = turn === "mine" ? "yours" : "mine";
    setTurn(next);
  };

  const handleNariClick = () => {
    let boardState = [...board];
    console.log(chosenKoma);
    switch (chosenKoma) {
      case "kyou":
        boardState[chosenPlace2[0]][chosenPlace2[1]].name = "narikyou";
        break;
      case "kei":
        boardState[chosenPlace2[0]][chosenPlace2[1]].name = "narikei";
        break;
      case "gin":
        boardState[chosenPlace2[0]][chosenPlace2[1]].name = "narigin";
        break;
      case "hi":
        boardState[chosenPlace2[0]][chosenPlace2[1]].name = "ryu";
        break;
      case "kaku":
        boardState[chosenPlace2[0]][chosenPlace2[1]].name = "uma";
        break;
      case "hu":
        boardState[chosenPlace2[0]][chosenPlace2[1]].name = "to";
        break;
      default:
    }
    setOpen(false);
    setBoard(boardState);
    const next = turn === "mine" ? "yours" : "mine";
    setTurn(next);
  };

  const getKomaName = (i, j) => {
    switch (board[i][j].name) {
      case "narigin":
        return "gin";
      case "narikei":
        return "kei";
      case "narikyou":
        return "kyou";
      case "to":
        return "hu";
      case "ryu":
        return "hi";
      case "uma":
        return "kaku";
      default:
        return board[i][j].name;
    }
  };

  return (
    <div className="App">
      <Sentence turn={turn} />
      <OwnedKoma
        ownedKoma={yourKoma}
        whose={"yours"}
        onClick={(i) => {
          if (turn === "yours") handleOwnedClick(i);
        }}
        chosen={chosenPlace}
        turn={turn}
      />
      <Board
        className="board"
        board={board}
        onClick={(i, j) => handleBoardClick(i, j)}
      />
      <OwnedKoma
        ownedKoma={myKoma}
        whose={"mine"}
        onClick={(i) => {
          if (turn === "mine") handleOwnedClick(i);
        }}
        chosen={chosenPlace}
        turn={turn}
      />
      <div style={{ textAlign: "center" }}>
        <SimpleDialog
          open={open}
          chosenKoma={chosenKoma}
          turn={turn}
          onMotoClick={() => handleMotoClick()}
          onNariClick={() => handleNariClick()}
        />
      </div>
    </div>
  );
};

const OwnedKoma = (props) => {
  const imgDecide = (i) => {
    switch (props.ownedKoma[i].name) {
      case "kyou":
        return Kyou;
      case "kei":
        return Kei;
      case "gin":
        return Gin;
      case "kin":
        return Kin;
      case "hi":
        return Hi;
      case "kaku":
        return Kaku;
      case "hu":
        return Hu;
      default:
        return false;
    }
  };
  const imgs = props.ownedKoma.map((val, ind) => {
    return (
      <Img
        src={imgDecide(ind)}
        whose={props.whose}
        className="img"
        onClick={() => props.onClick(ind)}
        chosen={props.ownedKoma[ind].chosen}
      />
    );
  });
  return <div className="ownedKoma">{imgs} </div>;
};

const Sentence = (props) => {
  const _turn = props.turn === "mine" ? "先手" : "後手";
  return <p>{_turn}</p>;
};

const Img = styled.img`
  transform: rotate(${(props) => (props.whose === "yours" ? 180 : 0)}deg);
  src: ${(props) => props.src};
  background-color: ${(props) => (props.chosen ? "blue" : "")};
`;

const Mass = styled.div`
  background-color: ${(props) =>
    props.chosen
      ? "blue"
      : props.canPlace
      ? "rgb(10,100,100)"
      : "rgb(223, 151, 19)"};
`;

const Board = (props) => {
  const imgDecide = (i, j) => {
    switch (props.board[i][j].name) {
      case "kyou":
        return Kyou;
      case "kei":
        return Kei;
      case "gin":
        return Gin;
      case "kin":
        return Kin;
      case "ou":
        return Ou;
      case "hi":
        return Hi;
      case "kaku":
        return Kaku;
      case "gyoku":
        return Gyoku;
      case "ryu":
        return Ryu;
      case "uma":
        return Uma;
      case "narigin":
        return Narigin;
      case "narikei":
        return Narikei;
      case "narikyo":
        return Narikyou;
      case "to":
        return To;
      case "hu":
        return Hu;
      default:
        return false;
    }
  };
  const table = props.board.map((val1, ind1) => {
    const b = val1.map((val2, ind2) => {
      console.log(props.board[ind1][ind2].chosen);
      return (
        <Mass
          className="square"
          onClick={() => props.onClick(ind1, ind2)}
          key={`${ind1}${ind2}`}
          chosen={props.board[ind1][ind2].chosen}
          canPlace={props.board[ind1][ind2].canPlace}
        >
          {imgDecide(ind1, ind2) && (
            <Img
              src={imgDecide(ind1, ind2)}
              className="img"
              whose={props.board[ind1][ind2].whose}
            />
          )}
        </Mass>
      );
    });
    return (
      <div className="table-row" key={`${ind1}`}>
        {b}
      </div>
    );
  });

  return <div className="table">{table}</div>;
};

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const imgDecide = () => {
    switch (props.chosenKoma) {
      case "kyou":
        return { moto: Kyou, nari: Narikyou };
      case "kei":
        return { moto: Kei, nari: Narikei };
      case "gin":
        return { moto: Gin, nari: Narigin };
      case "hi":
        return { moto: Hi, nari: Ryu };
      case "kaku":
        return { moto: Kaku, nari: Uma };
      case "hu":
        return { moto: Hu, nari: To };
      default:
        return "";
    }
  };
  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={props.open}
      maxWidth={"sm"}
    >
      <List>
        <Img
          src={imgDecide().moto}
          whose={props.turn}
          style={{ width: "5vw" }}
          onClick={() => props.onMotoClick()}
        />
        <Img
          src={imgDecide().nari}
          whose={props.turn}
          style={{ width: "5vw" }}
          onClick={() => props.onNariClick()}
        />
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default App;
