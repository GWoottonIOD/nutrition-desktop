import {
  Button,
  FormControl,
  FormLabel,
  keyframes,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

export default function FormComponent({
  obvs,
  obsArr,
  lvl,
  lvlArr,
  addToArr,
  recipient,
  setObvs,
  setLvl,
  setRecipient
}) {

    const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <FormControl
          fullWidth
          sx={{
            gap: 2,
            animation: `${fadeIn} 1s ease-in forwards`,
            justifyContent: "centre",
            // display: "flex",
          }}
        >
        <FormLabel id="observation">Observation</FormLabel>
        <Select
          // labelId="demo-simple-select-label"
          id="obvs"
          value={obvs}
          onChange={(e) => setObvs(e.target.value)}
        >
          {obsArr.map((item) => (
            <MenuItem value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
        <br />
        <FormLabel id="level">Level</FormLabel>
        <Select
          // labelId="demo-simple-select-label"
          id="lvl"
          value={lvl}
          onChange={(e) => setLvl(e.target.value)}
        >
          {lvlArr.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
        <br />
        {/* </Stack> */}
        <Button onClick={addToArr}>Add</Button>
        <br />
        <FormLabel htmlFor="recipient">Recipient</FormLabel>
        <TextField
          // error={emailError}
          // helperText={emailErrorMessage}
          id="recipient"
          type="email"
          name="recipient"
          placeholder={recipient}
          autoComplete="recipient"
          autoFocus
          required
          variant="outlined"
          fullWidth
          onChange={(e) => setRecipient(e.target.value)}
          // color={emailError ? 'error' : 'primary'}
        />
        <br />
        </FormControl>
      </Stack>
    </>
  );
}
