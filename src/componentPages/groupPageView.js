import BingoBoard from "../components/bingoBoardPresenter";

function GroupPageView(props){

    function displayFriendsProgressCB(friend, index) {
        return (
            <div className="friend" key={index}>
                <BingoBoard classNames="friend-board"
                            onCellClicked={() => {}}
                            cells={friend.progress.map(x => {return {text: "", done: x}})}/>
                {friend.name}
            </div>
        )
    }

    function displayScoreCB(item, index) {
        return <li key={index}>{item.name} - {item.score}</li>
    }

    return (
        <div id="group-container">
            <div className="board-container">
                <h2>{props.groupName}</h2>
                <BingoBoard classNames="user-board" onCellClicked={props.cellToggled} cells={props.userCells}/>
            </div>
            <div className="sidebar">
                <div className="section">
                    <h3>Friends progress</h3>
                    <div className="friends-progress-container">
                        {props.friendsProgress.map(displayFriendsProgressCB)}
                    </div>
                </div>
                <div className="section">
                    <h3>Group scoreboard</h3>
                    <ol className="score-board">
                        {props.scoreBoard.map(displayScoreCB)}
                    </ol>
                </div>
                {props.role === "admin" ? // TODO: actions for buttons
                    <div className="section">
                        <h3>Admin</h3>
                        <div className="button-container">
                            <button>Handle members</button>
                            <button>Handle bingo cells</button>
                            <button>Generate new boards</button>
                            <button>Settings</button>
                        </div>
                    </div>
                 : ""}
            </div>
        </div>
    );
}
export default GroupPageView;