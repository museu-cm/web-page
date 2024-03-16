export type Order = "desc" | "asc" | undefined;

type Row = {
  data: Record<string, unknown>;
  rows: (string | number)[];
};

export function stableSort(
  array: Row[],
  comparator: (a: any, b: any) => number,
): Row[] {
  const stabilizedThis = array.map((el, index) => [el, index] as [any, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export function descendingComparator(a: any, b: any, orderBy: any) {
  if (b.data[orderBy] < a.data[orderBy]) {
    return -1;
  }
  if (b.data[orderBy] > a.data[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
