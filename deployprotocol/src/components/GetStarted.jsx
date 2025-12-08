import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import visuallyHidden from "@mui/utils/visuallyHidden";
import { styled, useColorScheme } from "@mui/material/styles";
import UploadFile from "./UploadFile";
import MorphingCV from "./MorphingCV";
import MorphingCVDark from "./MorphingCVDark";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";
import { Card, SignInContainer } from "../pages/SignIn";
import { keyframes } from "@emotion/react";
import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import ForgotPassword from "./ForgotPassword";
import DataGrid from "./DataGrid";
import OberservationGrid from "./DataGrid";
import { sendTableEmail } from "./SendMail";
import FormComponent from "./FormComponent";

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
  backgroundImage: <MorphingCVDark />,
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
  const [templates, setTemplates] = React.useState([1, 2, 3]);
  const [lvl, setLvl] = React.useState("");
  const [obvs, setObvs] = React.useState("");
  const [completeObvs, setCompleteObvs] = React.useState([]);

  console.log(completeObvs);
  const lvlArr = [1, 2, 3, 4, 5];

  const obsArr = [
    {
      id: 1,
      name: "Hemachromic Cells",
      association:
        "Low Energy, Fatigue, Cellular oxygination issues, can be connected to haemoglobin levels and Coeliac Disease.",
      recommendation:
        "Iron Bisglycinate, B12, Folate, B3, B5, B6, Mag/Potassion. Consider IV B-vitamins.",
    },
    {
      id: 2,
      name: "Chylomicrons (delayed clearing)",
      association:
        "Gastrointestinal Pain (esp. right side); Headaches; Nausea; Low Moods; Hormonal Imbalances; Billiuos issues.",
      recommendation:
        "Lecithin; Lipase Digestive Enzymes about 30 minutes after meal (Solgar Advanced); Artichoke Leaf Extract; Milk Thistle.",
    },
    {
      id: 3,
      name: "Chylomicrons (delayed onset - should be present after 1 hour)",
      association: "the Premium version",
      recommendation:
        "Lipase Digestive Enzymes (Solgar Advanced); Artichoke Leaf Extract; Milk Thistle.",
    },
  ];

  const addToArr = () => {
    const obs = obsArr.find((obv) => obv.id === obvs);
    setCompleteObvs((prev) => [...prev, { ...obs, lvl: lvl }]);
  };
  // const formArr =[]

  // const form =
  // <FormControl fullWidth>
  //   {formArr.map((form) => {

  //   })}
  // </FormControl>

  return (
    <>
      <Box
        id="hero"
        sx={(theme) => ({
          minWidth: "86vw",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
          ...theme.applyStyles("dark", {
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
          }),
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ justifyContent: "space between", alignItems: "center", width: '100%' }}
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
              Let's
            </Typography>
            <Typography
              component="span"
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
              Go!
            </Typography>
            <Box
              component="form"
              // onSubmit={handleSubmit}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
                my: "10%",
              }}
            >
                {/* <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 0, sm: 0, md: '20%' }}
                > */}
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
                {/* </Stack> */}
                {completeObvs.length > 0 && recipient !== "user@email.com" ? (
                  <Button
                    onClick={() => sendTableEmail(completeObvs, recipient)}
                  >
                    Send Mail
                  </Button>
                ) : null}
                {/* <Button>Send to </Button> */}
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
