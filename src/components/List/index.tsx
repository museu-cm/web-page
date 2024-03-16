import TableMUI, { TableProps } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "../form/Button";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import {
  Box,
  Stack,
  Typography,
  colors,
  Skeleton,
  TableSortLabel,
} from "@mui/material";
import { Order, stableSort, getComparator } from "./utils/sort";
import {
  Search,
} from "@mui/icons-material";
import { StyledTableCell, StyledTableCellHead, StyledTableRow } from "./styles";

type Row = {
  data: Record<string, unknown>;
  rows: (string | number)[];
};

type Column = {
  key: string;
  description: string;
};

type Props = {
  title: string;
  description: string;
  columns: Column[];
  rows: Row[];
  isGettingData: boolean;
  isDeletingData: string[];
  onNew: () => void;
  onEdit: (id: string) => void;
  onDeleted: (id: string) => void;
  keyPath: string;
  maxWidth?: number;
  onNext?: () => void;
  disableNew?: boolean;
  errorList?: string;
  steps?: {
    actual: number;
    total: number;
  };
} & TableProps;

const List = ({
  title,
  description,
  onNew,
  columns,
  rows,
  onEdit,
  onDeleted,
  isGettingData,
  isDeletingData,
  keyPath,
  maxWidth = 1000,
  onNext = undefined,
  disableNew = false,
  errorList = undefined,
  steps = {
    actual: 0,
    total: 0,
  },
  ...rest
}: Props) => {
  const theme = useTheme();

  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState("descricao");

  const handleRequestSort = (_event: any, property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");

    setOrderBy(property);
  };

  const createSortHandler =
    (property: any) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  const skeletonArray = Array(5).fill("");

  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{
        // bgcolor: theme.palette.grey[100],
        maxHeight: "100vh",
      }}
    >
      <Stack
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        width="100%"
      >
        <TableContainer
          sx={{
            maxHeight: "55vh",
            maxWidth: "90%",
            width: `calc(100vw - 10%)`,
            [theme.breakpoints.down(maxWidth)]: {
              width: `calc(100vw - 48px)`,
              mx: "auto",
            },
            border: `solid 1px ${theme.palette.grey[200]}`,
          }}
        >
          <TableMUI size="medium" stickyHeader {...rest}>
            <TableHead>
              <TableRow>
                {columns.map((c, index) => (
                  <StyledTableCellHead
                    key={index}
                    sortDirection={orderBy === c.key ? order : false}
                    sx={{ backgroundColor: `${theme.palette.grey[100]} !important`}}
                  >
                    <TableSortLabel
                      active={orderBy === c.key}
                      direction={orderBy === c.key ? order : "asc"}
                      onClick={createSortHandler(c.key)}
                      sx={{ fontWeight: "bold" }}
                    >
                      {c.description}
                      {orderBy === c.key ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </StyledTableCellHead>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {!isGettingData &&
                rows.length > 0 &&
                stableSort(rows, getComparator(order, orderBy)).map((row) => (
                  <StyledTableRow key={row.data.id as string}>
                    {row.rows.map((r, index) => (
                      <StyledTableCell
                        dangerouslySetInnerHTML={{ __html: String(r) }}
                        component="th"
                        scope="row"
                        key={String(index)}
                      />
                    ))}
                  </StyledTableRow>
                ))}
            </TableBody>

            {isGettingData && (
              <TableBody>
                {skeletonArray.map((_, index) => (
                  <StyledTableRow key={index}>
                    {columns.map((__, indexC) => (
                      <StyledTableCell component="th" scope="row" key={indexC}>
                        <Skeleton height={19.9} />
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))}
              </TableBody>
            )}
          </TableMUI>

          {!isGettingData && rows.length === 0 && (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="calc(100% - 66px)"
              py={3}
            >
              <Box
                width="150px"
                height="150px"
                sx={{ color: colors.grey[700], bgcolor: colors.grey[200] }}
                borderRadius="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Search sx={{ fontSize: 86 }} />
              </Box>

              <Typography variant="body1" component="h6" marginTop="31px">
                Nenhum resultado encontrado.
              </Typography>
            </Box>
          )}
        </TableContainer>
        {onNext && (
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            marginTop={2}
            padding={2}
            sx={{
              maxWidth: "90%",
              width: `calc(100vw - 4rem)`,
              [theme.breakpoints.down(maxWidth)]: {
                width: `calc(100vw - 48px)`,
                mx: "auto",
              },
            }}
          >
            <Stack justifyContent="center" width="30%">
              <Typography variant="body2">Veículos: {rows.length}</Typography>
            </Stack>

            <Stack justifyContent="center" width="40%">
              <Typography color="red" textAlign="center">
                {errorList}
              </Typography>
            </Stack>

            <Stack justifyContent="center" alignItems="flex-end" width="30%">
              <Button
                size="large"
                sx={{
                  paddingLeft: 6,
                  paddingRight: 6,
                }}
                color="secondary"
                onClick={onNext}
              >
                próximo
              </Button>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default List;
