import BingoBoard from "../presenter/bingoBoardPresenter";
import styles from "../styles/groupPage.module.css";

function GroupPageBingoView(props){

    return (
            <div className={styles.boardContainer}>
                <h2>{props.groupName}</h2>
                <BingoBoard classNames={styles.userBoard} onCellClicked={props.cellToggled} cells={props.userCells}/>
            </div>
    );
}
export default GroupPageBingoView;