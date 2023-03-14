import React from "react";
import TopBarView from "./topBarView";
import {useRecoilValue} from "recoil";
import {userGroupsState, userIdState} from "../model/userAtoms";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

function TopBar() {
    const userLoggedIn = useRecoilValue(userIdState);
    const groupsAdmin = useRecoilValue(userGroupsState("admins"));
    const groupsMember = useRecoilValue(userGroupsState("members"));
    const navigate = useNavigate;

    function getLink(path, name, id) {
        return <Link to={path} key={id}>{name}</Link>
    }

    return (
        <TopBarView userLoggedIn={userLoggedIn} navigate={navigate} groups={[...groupsAdmin, ...groupsMember]} getLink={getLink}/>
    )
}
export default TopBar;