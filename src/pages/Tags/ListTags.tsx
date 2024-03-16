import { Stack, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import Button from "../../components/form/Button";
import List from "../../components/List";

const ListTags = () => {
  const theme = useTheme();

  const teste = [
    {id: "1", descricao: "Tag 1", situacao: "Ativo"},
    {id: "2", descricao: "Tag 2", situacao: "Inativo"},
    {id: "3", descricao: "Tag 3", situacao: "Ativo"},
    {id: "4", descricao: "Tag 4", situacao: "Inativo"},
  ]

  const rows = useMemo(() => {
    return teste.map((r) => ({
      id: r.id,
      data: r,
      rows: [
        r.descricao,
        r.situacao,
      ],
    }));
  }, [teste]);

  return (
    <Stack
      spacing={3}
      paddingX={6}
      paddingY={4}
      borderRadius={4}
      minWidth={1200}
      minHeight={600}
      sx={{
        backgroundColor: "white",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="column" spacing={1}>
          <Typography variant="h4" fontSize={32}>
            Lista de Tags
          </Typography>
          <Typography variant="body1" fontSize={16} color={theme.palette.grey[600]}>
            A listagem de tags relaciona isso isso e aquilo dos cadastros.
          </Typography>
        </Stack>
        <Button variant="outlined" size="small">
          novo
        </Button>
      </Stack>

      <List
        title="tags"
        description="Lista de tags cadastradas."
        columns={[
          { key: "descricao", description: "Descrição" },
          { key: "situacao", description: "Situação" },
        ]}
        rows={rows}
        isGettingData={false}
        isDeletingData={[]}
        onNew={() => {}}
        onEdit={() => {}}
        onDeleted={() => {}}
        keyPath=""
      />
    </Stack>
  );
};

export default ListTags;
