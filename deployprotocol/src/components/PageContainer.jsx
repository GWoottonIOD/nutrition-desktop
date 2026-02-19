import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

export const PageContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "8px 12px"
}));
