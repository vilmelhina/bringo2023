import React from "react";
import GroupPageBingoView from "../components/groupPageBingoView";
import GroupPageSidebarView from "../components/groupPageSidebarView";
import GroupPageHandleMembersView from "../components/groupPageHandleMembersView";
import GroupPageHandleCellsView from "../components/groupPageHandleCellsView";
import GroupPageSettingsView from "../components/groupPageSettingsView";
import {useParams} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {userGroupsState} from "../model/userAtoms";

function GroupPage() {
    const [componentIndex, setComponentIndex] = React.useState(0);
    const groupsAdmin = useRecoilValue(userGroupsState("admins"));
    const groupsMember = useRecoilValue(userGroupsState("members"));
    const [groupId,] = React.useState(useParams().id)

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

    function userInGroup() {
        return [...groupsMember.map(x => x.id), ...groupsAdmin.map(x => x.id)].find(x => x===groupId)
    }

    function userNotInGroup() {
        return <div>You do not belong to this group</div>
    }

    function cellToggled(index) {
        // TODO: update state
        console.log("clicked " + index)
    }

    const components = [
        <GroupPageBingoView
            groupName = {groupName}
            userCells = {userCells}
            cellToggled = {cellToggled}
        />,
        <GroupPageHandleMembersView groupName = {groupName} close = {() => {setComponentIndex(0)}}/>,
        <GroupPageHandleCellsView groupName = {groupName} close = {() => {setComponentIndex(0)}}/>,
        <GroupPageSettingsView groupName = {groupName} close = {() => {setComponentIndex(0)}}/>,
    ]

    return userInGroup() ? <div id="group-container">
        <div id="group-main-content">
            {components[componentIndex]}
        </div>
        <GroupPageSidebarView
            groupName = {groupName}
            friendsProgress = {friendsProgress}
            scoreBoard = {scoreBoard}
            role = {role}
            showHandleMembers = {() => {setComponentIndex(1)}}
            showHandleCells = {() => {setComponentIndex(2)}}
            showSettings = {() => {setComponentIndex(3)}}
        />
    </div> : userNotInGroup()
}
export default GroupPage;