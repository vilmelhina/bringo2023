import BingoBoard from "../presenter/bingoBoardPresenter";
import styles from "../styles/groupPage.module.css";

function GroupPageSidebarView(props){

    function displayFriendsProgressCB(friend, index) {
        return (
            <div className="friend" key={index}>
                <BingoBoard classNames={styles.friendBoard}
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
            <div className={styles.sidebar}>
                <div className={styles.section}>
                    <h3>Friends progress</h3>
                    <div className={styles.friendsProgressContainer}>
                        {props.friendsProgress.map(displayFriendsProgressCB)}
                    </div>
                </div>
                <div className={styles.section}>
                    <h3>Group scoreboard</h3>
                    <ol className={styles.scoreBoard}>
                        {props.scoreBoard.map(displayScoreCB)}
                    </ol>
                </div>
                {props.role === "admin" ? // TODO: actions for buttons
                    <div className={styles.section}>
                        <h3>Admin</h3>
                        <div className={styles.buttonContainer}>
                            <button onClick={props.showHandleMembers}>Handle members</button>
                            <button onClick={props.showHandleCells}>Handle bingo cells</button>
                            <button>Generate new boards</button>
                            <button onClick={props.showSettings}>Settings</button>
                        </div>
                    </div>
                    : ""}
            </div>
    );
}
export default GroupPageSidebarView;