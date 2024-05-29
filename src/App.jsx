import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Mydatatable from "./components/mydatatable/Mydatatable";
import Mylist from "./pages/mylist/Mylist";
import Widget from "./components/widget/Widget";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formsource"
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const {darkMode}= useContext(DarkModeContext);


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route 
                path="new" 
                element={<New inputs={userInputs} title="Add New User"/>}
                />
            </Route>
            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productsId" element={<Single />}></Route>
              <Route
                path="new" 
                element={<New inputs={productInputs} title="Add New Products"/>}
                />
            </Route>
            <Route path="categories">
              <Route index element={<Mylist />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;