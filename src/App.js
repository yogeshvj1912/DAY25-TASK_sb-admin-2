import "./css/sb-admin-2.min.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portal from "./components/Portal";
import Loginpage from "./components/Loginpage";
import Combuttons from "./components/Combuttons";
import Comcards from "./components/Comcards";
import Ucolors from "./components/Ucolors";
import Uborders from "./components/Uborders";
import Uanimations from "./components/Uanimations";
import Uothers from "./components/Uothers";
import Registerpage from "./components/Registerpage";
import Forgotpassword from "./components/Forgotpassword";
import Error404 from "./components/Error404";
import Blankpage from "./components/Blankpage";
import Reactcharts from "./components/Reactcharts";
import Tables from "./components/Tables";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Loginpage />} />
          <Route path="/" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="components/buttons" element={<Combuttons />}></Route>
            <Route path="components/cards" element={<Comcards />}></Route>
            <Route path="utilities/colors" element={<Ucolors />}></Route>
            <Route path="utilities/borders" element={<Uborders />}></Route>
            <Route
              path="utilities/animations"
              element={<Uanimations />}
            ></Route>
            <Route path="utilities/others" element={<Uothers />}></Route>
            <Route path="pages/login" element={<Loginpage />}></Route>
            <Route path="pages/register" element={<Registerpage />}></Route>
            <Route
              path="pages/forgot-password"
              element={<Forgotpassword />}
            ></Route>
            <Route path="pages/error-404" element={<Error404 />}></Route>
            <Route path="pages/blank" element={<Blankpage />}></Route>
            <Route path="charts" element={<Reactcharts />}></Route>
            <Route path="tables" element={<Tables />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
