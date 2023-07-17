import React from "react";
import StartPageView from "../view/startPageView";
import {useRecoilValue} from "recoil";
import {userIdState, userState} from "../model/userAtoms";
import {createGroup} from "../integration/firebaseDatabase";

function StartPage() {
    const userId = useRecoilValue(userIdState)

    return <StartPageView
        userLoggedIn = {userId}
        createGroup = {(name) => {createGroup(name, userId)}}
    />

}
export default StartPage;