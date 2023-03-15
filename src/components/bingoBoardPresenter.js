import React from "react";
import BingoBoardView from "./bingoBoardView";
function BingoBoard(props) {

    return <BingoBoardView
        classNames={props.classNames}
        onCellClicked={props.onCellClicked}
        cells={props.cells} // {text: "", done: true/false}
    />

}
export default BingoBoard;