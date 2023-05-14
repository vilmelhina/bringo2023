import BingoBoard from "../presenter/bingoBoardPresenter";

function GroupPageBingoView(props){

    return (
            <div className="board-container">
                <h2>{props.groupName}</h2>
                <BingoBoard classNames="user-board" onCellClicked={props.cellToggled} cells={props.userCells}/>
            </div>
    );
}
export default GroupPageBingoView;