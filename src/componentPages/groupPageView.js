function GroupPageView(props){

    function doneClass(done) {
        if(done) return "cell marked";
        return "cell unmarked";
    }

    function displayCellCB(cell, index) {
        return (
            <div className={doneClass(cell.done)} key={index}
                 onClick={() => {props.cellToggled(index)}}>
                {cell.text}
            </div>)
    }

    function displayFriendsProgressCB(friend, index) {
        function displayFriendCellCB(done, index) {
            return <div className={doneClass(done)} key={"cell" + index}/>
        }
        return (
            <div className="friend" key={index}>
                <div className="board friend-board">
                    {friend.progress.map(displayFriendCellCB)}
                </div>
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
                <div className="board user-board">
                    {props.userCells.map(displayCellCB)}
                </div>
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