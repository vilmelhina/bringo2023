import React from "react";
import {RecoilRoot} from "recoil";
import StartPage from "./presenter/startPagePresenter";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./presenter/loginPagePresenter";
import AccountPage from "./presenter/accountPagePresenter";
import Loading from "./presenter/loadingPresenter";
import TopBar from "./presenter/topBarPresenter";
import GroupPage from "./presenter/groupPagePresenter";

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
                            <Route path ="/group/:id" element= {<GroupPage/>} />
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
