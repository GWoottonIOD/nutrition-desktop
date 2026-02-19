import { Routes, Route } from "react-router-dom";
import PageNotAllowed from "../pages/PNA";
import PNF from "../pages/PNF";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PNF />} />
        {/* <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/submit" element={<SubmitForm />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/pna" element={<PageNotAllowed />} />
      </Routes>
    </>
  );
}
