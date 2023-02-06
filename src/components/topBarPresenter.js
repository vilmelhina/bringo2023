import React from "react";
import TopBarView from "./topBarView";
import {useRecoilValue} from "recoil";
import {userGroupsState, userIdState} from "../model/userAtoms";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

function TopBar() {
    const userLoggedIn = useRecoilValue(userIdState);
    //const groupsAdmin = useRecoilValue(userGroupsState("admins"));
    const navigate = useNavigate;

    function getLink(path, name, id) {
        return <Link to={path} key={id}>{name}</Link>
    }

    return (
        <TopBarView userLoggedIn={userLoggedIn} navigate={navigate} groups={[{name: "group 1", id:1}, {name: "group 2", id:2}]} getLink={getLink}>

        </TopBarView>
    )
}
export default TopBar;