import { Button, MenuItem, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

export default function SignedInOrNotLarge({ width }) {
  const navigate = useNavigate();
  const { currentUser, handleUser } = useCurrentUserContext();

  const logOff = () => {
    navigate("/login");
    setTimeout(() => handleUser(), 500);
  };

  return (
    <>
      {currentUser ? (
        width !== "full" ? (
          <>
            <Typography
              sx={{
                textAlign: "center",
                color: "text.secondary",
                width: { sm: "100%", md: "80%" },
              }}
            >
              {/* Welcome, {currentUser?.email.split("@")[0]} */}
              {/* currentUser?.name.split(" ")[0]|| */}
            </Typography>
            <Button
              color="primary"
              variant="contained"
              size="small"
              sx= {{whiteSpace: "nowrap"}}
              onClick={logOff}
            >
              Sign out
            </Button>
          </>
        ) : (
          <>
            <MenuItem>
              <Button
                color="primary"
                variant="text"
                fullWidth
                onClick={() => navigate("/login")}
              >
                Welcome, {currentUser?.email.split("@")[0]}
                {/* currentUser?.name.split(" ")[0]|| */}
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={logOff}
              >
                Sign out
              </Button>
            </MenuItem>
          </>
        )
      ) : width !== "full" ? (
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
      ) : (
        <>
          <MenuItem>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => navigate("/signup")}
            >
              Sign up
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              color="primary"
              variant="outlined"
              fullWidth
              onClick={() => navigate("/login")}
            >
              Sign in
            </Button>
          </MenuItem>
        </>
      )}
    </>
  );
}
