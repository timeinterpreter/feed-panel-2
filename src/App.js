import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Feed from "./components/Feed";
// import moment from 'moment'

import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />

              {/* chat screen */}
              {/* <Feed/> */}
              <Routes>
                <Route path="/room/:roomId" element={<Chat />} />
                <Route path="/Feed" element = {<Feed/>}/>
                {/* <Route path="/Sign Out" element={<Login />} /> */}
                {/* <Route path="/" element={<h1>Welcome</h1>} /> */}
              </Routes>
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
