import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const Row = ({ labels }: any) => {

  return (
    <TableRow>
      <TableCell>{labels[0]}</TableCell>
      <TableCell align="right">{labels[1]}</TableCell>
      <TableCell align="right">{labels[2]}</TableCell>
    </TableRow>
  );
};

export default Row;