import React from "react";
import TopBarView from "./topBarView";
import {useRecoilValue} from "recoil";
import {userGroupsState, userIdState} from "../model/userAtoms";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

function TopBar() {
    const userLoggedIn = useRecoilValue(userIdState);
    const groupsAdmin = useRecoilValue(userGroupsState("admins"));
    const navigate = useNavigate()
    return (
        <TopBarView userLoggedIn={userLoggedIn} navigate={navigate} groups={groupsAdmin}>

        </TopBarView>
    )
}
export default TopBar;