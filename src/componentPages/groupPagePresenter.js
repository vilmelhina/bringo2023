import React from "react";
import GroupPageBingoView from "../components/groupPageBingoView";
import GroupPageSidebarView from "../components/groupPageSidebarView";

function GroupPage() {

    // TODO: actual values instead of dummy values

    const groupName = "groupname";
    const userCells = [...Array(25).keys()].map(element => {return {text: "cell" + element, done: false}});
    const friendsProgress = [
        {name: "name1", progress: [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]},
        {name: "name2", progress: [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]},
        {name: "name3", progress: [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]}
    ]
    const scoreBoard = [
        {name: "name1", score: 444},
        {name: "name2", score: 333},
        {name: "name3", score: 888}
    ]
    const role = "admin";

    function cellToggled(index) {
        // TODO: update state
        console.log("clicked " + index)
    }

    return <div id="group-container">
        <GroupPageBingoView
            groupName = {groupName}
            userCells = {userCells}
            cellToggled = {cellToggled}
        />
        <GroupPageSidebarView
            groupName = {groupName}
            friendsProgress = {friendsProgress}
            scoreBoard = {scoreBoard}
            role = {role}
        />
    </div>
    /*return <GroupPageView
                groupName = {groupName}
                userCells = {userCells}
                friendsProgress = {friendsProgress}
                scoreBoard = {scoreBoard}
                role = {role}
                cellToggled = {cellToggled}
            />*/
}
export default GroupPage;