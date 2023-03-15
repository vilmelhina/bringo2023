import React from "react";

function BingoBoardView(props) {
    const classNames = "board" + (props.classNames ? " " + props.classNames : "");

    function doneClass(done) {
        if(done) return "cell marked";
        return "cell unmarked";
    }

    function displayCellsCB(cell, index) {
        return (
            <div className={doneClass(cell.done)} key={index}
                 onClick={() => {props.onCellClicked(index)}}>
                {cell.text}
            </div>)
    }

    return <div className={classNames}>
        {props.cells.map(displayCellsCB)}
    </div>
}
export default BingoBoardView;