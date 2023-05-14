import React from "react";
import styles from "../styles/bingoBoard.module.css";

function BingoBoardView(props) {
    //const classNames = {styles.board} + (props.classNames ? " " + props.classNames : "");

    function doneClass(done) {
        if(done) return styles.marked;
        return styles.unmarked;
    }

    function displayCellsCB(cell, index) {
        return (
            <div className={doneClass(cell.done)} key={index}
                 onClick={() => {props.onCellClicked(index)}}>
                {cell.text}
            </div>)
    }

    return <div className={ [styles.board, props.classNames].join(' ') }>
        {props.cells.map(displayCellsCB)}
    </div>
}
export default BingoBoardView;