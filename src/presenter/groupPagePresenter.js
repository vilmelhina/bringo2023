import React from "react";
import GroupPageBingoView from "../view/groupPageBingoView";
import GroupPageSidebarView from "../view/groupPageSidebarView";
import GroupPageHandleMembersView from "../view/groupPageHandleMembersView";
import GroupPageHandleCellsView from "../view/groupPageHandleCellsView";
import GroupPageSettingsView from "../view/groupPageSettingsView";
import {useParams} from "react-router-dom";
import {useRecoilState, useRecoilValue} from "recoil";
import {userGroupsState, userIdState} from "../model/userAtoms";
import {groupCellsState, groupState} from "../model/groupAtoms";
import styles from "../styles/groupPage.module.css";
import {startGame} from "../integration/firebaseDatabase";

function GroupPage() {
    const [componentIndex, setComponentIndex] = React.useState(0);
    const groups = useRecoilValue(userGroupsState);
    const userId = useRecoilValue(userIdState);
    const {id} = useParams();
    const group = useRecoilValue(groupState(id))
    const [cells, setCells] = useRecoilState(groupCellsState(id))

    // TODO: actual values instead of dummy values

    const groupName = group.name;
    const userCells = group.current_game.boards.filter(x => x.user === userId)[0].cells;
    const friendsProgress = group.current_game.boards.filter(x => x.user !== userId).map(x => {return {name: x.user.substring(0,8), progress: x.cells.map(y => y.done)}})
    const scoreBoard = [
        {name: "name1", score: 444},
        {name: "name2", score: 333},
        {name: "name3", score: 888}
    ]

    function userInGroup() {
        return groups.map(x => x.id)
    }

    function userNotInGroup() {
        return <div>You do not belong to this group</div>
    }

    function cellToggled(index) {
        // TODO: update state
        console.log("clicked " + index)
    }

    function addCellCB(cell) {
        setCells([...cells, cell])
    }

    function removeCellCB(cell) {
        setCells(cells.filter((elem) => elem !== cell))
    }

    function startNewGame() {
        console.log("start new game")
        startGame(id, group.members, cells)
    }

    const components = [
        <GroupPageBingoView
            groupName = {groupName}
            userCells = {userCells}
            cellToggled = {cellToggled}
        />,
        <GroupPageHandleMembersView
            groupName = {groupName}
            close = {() => {setComponentIndex(0)}}
        />,
        <GroupPageHandleCellsView
            groupName = {groupName}
            close = {() => {setComponentIndex(0)}}
            cells = {cells}
            addCell = {addCellCB}
            removeCell = {removeCellCB}
        />,
        <GroupPageSettingsView
            groupName = {groupName}
            close = {() => {setComponentIndex(0)}}
        />,
    ]

    return userInGroup() ? <div id={styles.groupContainer}>
        <div id={styles.groupMainContent}>
            {components[componentIndex]}
        </div>
        <GroupPageSidebarView
            groupName = {groupName}
            friendsProgress = {friendsProgress}
            scoreBoard = {scoreBoard}
            showHandleMembers = {() => {setComponentIndex(1)}}
            showHandleCells = {() => {setComponentIndex(2)}}
            showSettings = {() => {setComponentIndex(3)}}
            startNewGame = {startNewGame}
        />
    </div> : userNotInGroup()
}
export default GroupPage;