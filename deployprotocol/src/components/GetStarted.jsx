import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled, useColorScheme } from "@mui/material/styles";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";
import OberservationGrid from "./DataGrid";
import { sendTableEmail } from "./SendMail";
import FormComponent from "./FormComponent";
import { PageContainer } from "./PageContainer";
import { obsArr } from "./ObsArr";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundSize: "cover",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&blend=000000&blend-mode=normal&blend-alpha=60")',
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function GetStarted() {
  const { mode, systemMode, setMode } = useColorScheme();
  const { currentUser } = useCurrentUserContext();
  const [name, setName] = React.useState(currentUser?.name);
  const [recipient, setRecipient] = React.useState("user@email.com");
  const [mailedState, setMailedState] = React.useState("");
  const [lvl, setLvl] = React.useState("");
  const [obvs, setObvs] = React.useState("");
  const [completeObvs, setCompleteObvs] = React.useState([]);

  const lvlArr = [1, 2, 3, 4, 5];

  const addToArr = () => {
    const obs = obsArr.find((obv) => obv.id === obvs);
    setCompleteObvs((prev) => [...prev, { ...obs, lvl: lvl }]);
  };

  return (
    <>
      <Box
        id="GetStarted"
        sx={(theme) => ({
          // minWidth: "86vw",
          width: "100%",
          padding: "8px 12px",
          display: "flex",
          flexShrink: 0,
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
          ...theme.applyStyles("dark", {
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
          }),
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        })}
      >
        <PageContainer maxWidth="lg" disableGutters>
          <Stack
            spacing={2}
            useFlexGap
            sx={{
              justifyContent: "space between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* <SitemarkIcon /> */}
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                fontSize: "clamp(3rem, 10vw, 3.5rem)",
              }}
            >
              Observation
            </Typography>
            <Typography
              component="div"
              variant="h1"
              sx={(theme) => ({
                wordBreak: "break-word",
                fontSize: "clamp(3rem, 10vw, 3.5rem)",
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              Mailer
            </Typography>
            <OberservationGrid data={completeObvs} />

            <FormComponent
              obvs={obvs}
              obsArr={obsArr}
              lvl={lvl}
              lvlArr={lvlArr}
              addToArr={addToArr}
              recipient={recipient}
              setObvs={setObvs}
              setLvl={setLvl}
              setRecipient={setRecipient}
            />
            {mailedState}
            {completeObvs.length > 0 && recipient !== "user@email.com" ? (
              <Button onClick={() => setMailedState(sendTableEmail(completeObvs, recipient))}>
                Send Mail
              </Button>
            ) : null}
          </Stack>
        </PageContainer>
      </Box>
    </>
  );
}
