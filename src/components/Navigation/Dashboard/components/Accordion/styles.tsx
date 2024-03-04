import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Button as ButtonMUI } from "@mui/material";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={ <ArrowDropDownIcon />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.common.white,
    marginLeft: theme.spacing(2),
  },
  "& .MuiAccordionSummary-content": {
    color: theme.palette.common.white,
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  backgroundColor: theme.palette.background.paper,
}));

export const AccordionButton = styled(ButtonMUI)(() => ({
  padding: 16,
  alignItems: "left",
  boxShadow: "none",
  justifyContent: "unset",
  WebkitJustifyContent: "unset",
  paddingLeft: 24 + 16 + 8,
  borderRadius: 0,
  fontWeight: 400,
}));

export const Button = styled(ButtonMUI)(() => ({
  padding: 16,
  alignItems: "left",
  boxShadow: "none",
  justifyContent: "unset",
  WebkitJustifyContent: "unset",
  paddingLeft: 16,
  borderRadius: 0,
  width: "100%",
}));
