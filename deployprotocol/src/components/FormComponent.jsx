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
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function FormComponent({
  obvs,
  obsArr,
  lvl,
  lvlArr,
  addToArr,
  recipient,
  setObvs,
  setLvl,
  setRecipient,
}) {
  const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ width: "100%" }}
      >
        <FormControl
          fullWidth
          sx={{
            gap: 2,
            animation: `${fadeIn} 1s ease-in forwards`,
            justifyContent: "centre",
            flex: 3,
          }}
        >
          <FormLabel
            id="observation"
            sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Observation
          </FormLabel>
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
        </FormControl>
        <FormControl
          fullWidth
          sx={{
            gap: 2,
            animation: `${fadeIn} 1s ease-in forwards`,
            justifyContent: "centre",
            flex: 1,
          }}
        >
          <FormLabel id="level" sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            Level
          </FormLabel>
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
        </FormControl>
      </Stack>
      <br />
      <FormLabel
        htmlFor="recipient"
        sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
      >
        Recipient
      </FormLabel>
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
      <Button onClick={addToArr}><AddBoxIcon /></Button>
    </>
  );
}

