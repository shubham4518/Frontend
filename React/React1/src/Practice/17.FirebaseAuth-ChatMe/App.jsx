import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./17.FirebaseAuth-ChatMe/Signup";
import Signin from "./17.FirebaseAuth-ChatMe/Signin";
import Home from "./17.FirebaseAuth-ChatMe/Home";
import Chat from "./17.FirebaseAuth-ChatMe/Chat";
import PrivateRoute from "./17.FirebaseAuth-ChatMe/Component/PrivateRoute";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route
            path="/Chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
