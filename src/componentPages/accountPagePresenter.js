import React from "react";
import AccountPageView from "./accountPageView";
import {useRecoilValue} from "recoil";
import {
    userDisplayNameState,
    userEmailState,
    userIdState,
    userGroupsState
} from "../model/userAtoms";
import {logOut} from "../integration/firebaseAuthentication";

function AccountPage() {

    // TODO: add option to delete account
    // TODO: let user change image, email, password, display name
    // TODO: option to leave group

    const userId = useRecoilValue(userIdState);
    const userDisplayName = useRecoilValue(userDisplayNameState);
    const userEmail = useRecoilValue(userEmailState);
    const groups = useRecoilValue(userGroupsState);

    function onSetGroup(group) {
        console.log(group)
    }

    return <AccountPageView
                userId={userId}
                userEmail={userEmail}
                userDisplayName={userDisplayName}
                groups={groups}
                onSetGroup={onSetGroup}
                onLogOut={logOut}/>

}
export default AccountPage;