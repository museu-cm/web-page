import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.white,
    color: theme.palette.grey[600],
    fontSize: 16,
    fontWeight: "400",
    borderColor: "#FFFFFF",
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderColor: "#FFFFFF",
    borderBottom: `solid 1px ${theme.palette.grey[200]}`,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.white,
    borderColor: "#FFFFFF",
  },

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    borderColor: "#FFFFFF",
  },

  // hover effect
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
}));
