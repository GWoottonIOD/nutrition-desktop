import { useCurrentUserContext } from "../contexts/CurrentUserContext";
// import MarketingPage from "../components/MarketingPage";
import GetStarted from "../components/GetStarted";
import { Box } from "@mui/material";

export default function Home() {
  // const { currentUser } = useCurrentUserContext();
  return (
    <Box sx={{ width: "100%"}}>
      {/* {currentUser?.email ? <GetStarted /> : <MarketingPage />} */}
      <GetStarted/>
    </Box>
  );
}
