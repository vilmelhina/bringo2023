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
    const userId = useRecoilValue(userIdState);
    const userDisplayName = useRecoilValue(userDisplayNameState);
    const userEmail = useRecoilValue(userEmailState);
    const groupsAdmin = useRecoilValue(userGroupsState("admins"));
    const groupsMember = useRecoilValue(userGroupsState("members"));

    console.log(groupsAdmin)
    console.log(groupsMember)

    function onSetGroup(group) {
        console.log(group)
    }

    return <AccountPageView
                userId={userId}
                userEmail={userEmail}
                userDisplayName={userDisplayName}
                groupsAdmin={groupsAdmin}
                groupsMember={groupsMember}
                onSetGroup={onSetGroup}
                onLogOut={logOut}/>

}
export default AccountPage;