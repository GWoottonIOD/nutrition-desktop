import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ColorModeIconDropdown from "../shared-theme/ColorModeIconDropdown";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import ProfileModeIconDropdown from "../shared-theme/ProfileModeIconDropdown";
import SignedInOrNotLarge from "./SignedInOrNot";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { currentUser, handleUser } = useCurrentUserContext();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const logOff = () => {
    navigate("/login");
    setTimeout(() => handleUser(), 500);
  };

  const signed = currentUser?.email ? (
    <>
      <Typography
        sx={{
          textAlign: "center",
          color: "text.secondary",
          width: { sm: "100%", md: "80%" },
        }}
      >
        Welcome, {currentUser?.email.split("@")[0]}
        {/* currentUser?.name.split(" ")[0]|| */}
      </Typography>
      <Button color="primary" variant="contained" size="small" onClick={logOff}>
        log off
      </Button>
    </>
  ) : (
    <>
      <Button
        color="primary"
        variant="text"
        size="small"
        onClick={() => navigate("/login")}
      >
        Sign in
      </Button>
      <Button
        color="primary"
        variant="contained"
        size="small"
        onClick={() => navigate("/signup")}
      >
        Sign up
      </Button>
    </>
  );

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Button
              variant="text"
              color="info"
              size="small"
              onClick={() => navigate("/nutrition-desktop/")}
            >
              <HomeIcon />
            </Button>
            {/* <Sitemark /> */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* <Button variant="text" color="info" size="small">
                Features
              </Button>*/}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {/* <SignedInOrNotLarge width="Not full" /> */}
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <Divider sx={{ my: 3 }} />
                {/* <SignedInOrNotLarge width="full" /> */}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
