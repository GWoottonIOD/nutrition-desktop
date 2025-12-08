import { Routes, Route } from "react-router-dom";
import PageNotAllowed from "../pages/PNA";
import PNF from "../pages/PNF";
// import ProtectedRoute from './ProtectedRoute';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MarketingPage from "../components/MarketingPage";
import SubmitForm from "../pages/SubmitForm";
import GetStarted from "../components/GetStarted";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PNF />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/submit" element={<SubmitForm />} />
        <Route path="/getstarted" element={<GetStarted />} />
        {/* <Route path='/userinfo' >
                    <Route path=':id' element={<ProtectedRoute><Theme component={<UserInfoEdit />} /></ProtectedRoute>} />
                </Route> */}
        <Route path="/nutrition-desktop/" element={<Home />} />
        {/* <Route path='/profile' element={<ProtectedRoute><Theme component={<Profile />} /></ProtectedRoute>} /> */}
        <Route path="/pna" element={<PageNotAllowed />} />
      </Routes>
    </>
  );
}
