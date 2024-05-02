import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
//import ChangePassword from "./changePassword";
import EditProfile from "./EditProfile";
import './App.css'
import './toggle.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
          {/* <Route
            path="/profile/change-password"
            element={<ChangePassword />}
  />*/}
        </Routes> 
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;