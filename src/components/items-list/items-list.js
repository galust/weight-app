import {useSelector} from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {format} from "date-fns";

const ItemsList = () => {
    const items = useSelector((state) => state.main.selected);
    if (!items || !items.length)
        return false;

    return (
        <div className="items-list">
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead sx={{bgcolor: '#16161621'}}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Price&nbsp;($)</TableCell>
                            <TableCell align="right" sortDirection="desc">Weight&nbsp;(kg)</TableCell>
                            <TableCell align="right">Start Date</TableCell>
                            <TableCell align="right">End Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {border: 0}, '&:nth-of-type(even)': {
                                        bgcolor: '#f2f2f3',
                                    }
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.weight}</TableCell>
                                <TableCell align="right">{format(row.dates[0], 'dd/MM/yyyy')}</TableCell>
                                <TableCell align="right">{format(row.dates[1], 'dd/MM/yyyy')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ItemsList;