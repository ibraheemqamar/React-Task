import  React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableHead } from '@mui/material';


function UsersTable() {


  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    await axios.get('https://api.escuelajs.co/api/v1/users').then((results) => {
      setUsers(results.data)
    })
  }
  useEffect(() => {
    getUsers()
  },[])

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
       
         <TableHead className='table-head'>
         <TableRow >
              <TableCell>
                ID 
              </TableCell>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                 Email
              </TableCell>
            </TableRow>
         </TableHead> 
         <TableBody>
          {
             users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
                
              </TableCell>
              <TableCell >
                {row.name}
                
              </TableCell>
              <TableCell>
                {row.email}
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
        <TableFooter className="table-footer">
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );

}
export default UsersTable;