import React from "react";
import {RecoilRoot} from "recoil";
import StartPage from "./componentPages/startPagePresenter";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./componentPages/loginPagePresenter";
import AccountPage from "./componentPages/accountPagePresenter";
import Loading from "./components/loadingPresenter";
import TopBar from "./components/topBarPresenter";
import GroupPage from "./componentPages/groupPagePresenter";

function App() {
  return (
      <RecoilRoot>
        <div className="App">
            <div id="container">
                <React.Suspense fallback={<Loading/>}>
                    <TopBar/>
                    <div id="content">
                        <Routes>
                            <Route path ="/" element= {<StartPage/>} />
                            <Route path ="/login" element= {<LoginPage/>} />
                            <Route path ="/account" element= {<AccountPage/>} />
                            <Route path ="/group" element= {<GroupPage/>} />
                            <Route path="*" element={<StartPage/>}/>
                        </Routes>
                    </div>
                </React.Suspense>
            </div>
        </div>
      </RecoilRoot>
  );
}

export default App;
