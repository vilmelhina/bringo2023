import React from "react";
import TopBarView from "./topBarView";
import {useRecoilValue} from "recoil";
import {userIdState} from "../model/userAtoms";
import {Link} from "react-router-dom";

function TopBar() {
    const userLoggedIn = useRecoilValue(userIdState);

    return (
        <TopBarView userLoggedIn={userLoggedIn}>
            <Link to="/">Start</Link>
            {userLoggedIn ? <Link to="/account">Account</Link> : <Link to="/login">Log in</Link>}
        </TopBarView>
    )
}
export default TopBar;