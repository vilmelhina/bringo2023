import React from "react";
import LoginPageView from "../view/loginPageView";
import {uiConfig, auth} from "../integration/firebaseAuthentication";
import {StyledFirebaseAuth} from "react-firebaseui";
import {userIdState} from "../model/userAtoms";
import {useRecoilValue} from "recoil";
import {useNavigate} from "react-router";

function LoginPage() {
    const userId = useRecoilValue(userIdState);
    const navigate = useNavigate();
    if(userId) navigate("/account");

    return (
        <div>
            <LoginPageView>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
            </LoginPageView>
        </div>
    )

}
export default LoginPage;