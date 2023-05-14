import React from "react";
import TopBarView from "../view/topBarView";
import {useRecoilValue} from "recoil";
import {userGroupsState, userIdState} from "../model/userAtoms";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

function TopBar() {
    const userLoggedIn = useRecoilValue(userIdState);
    const groups = useRecoilValue(userGroupsState);
    const navigate = useNavigate;

    function getLink(path, name, id) {
        return <Link to={id ? (path + "/" + id) : path} key={id}>{name}</Link>
    }

    return (
        <TopBarView userLoggedIn={userLoggedIn} navigate={navigate} groups={groups} getLink={getLink}/>
    )
}
export default TopBar;