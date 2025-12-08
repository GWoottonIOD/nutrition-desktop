import React from "react";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";
import MarketingPage from "../components/MarketingPage";
import GetStarted from "../components/GetStarted";

export default function Home() {
  const { currentUser } = useCurrentUserContext()
  return <div>
    {currentUser?.email 
    ? <GetStarted /> 
    : <MarketingPage />
    }
    </div>;
}
