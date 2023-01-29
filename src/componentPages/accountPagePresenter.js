import React from "react";
import AccountPageView from "./accountPageView";
import {useRecoilValue} from "recoil";
import {userDisplayNameState, userEmailState, userIdState, userState} from "../model/userAtoms";
import {logOut} from "../integration/firebaseAuthentication";

function AccountPage() {
    const user = useRecoilValue(userState);
    const userId = useRecoilValue(userIdState);
    const userDisplayName = useRecoilValue(userDisplayNameState);
    const userEmail = useRecoilValue(userEmailState);

    console.log(user);

    return <AccountPageView
                userId={userId}
                userEmail={userEmail}
                userDisplayName={userDisplayName}
                onLogOut={logOut}/>

}
export default AccountPage;