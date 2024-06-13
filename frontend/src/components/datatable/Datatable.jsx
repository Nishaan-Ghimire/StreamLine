import './datatable.scss';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
const Datatable = () => {
  const actionColumn = [
{
  field: "action",
  headerName: "Action",
  width: 200,
  renderCell: ()=>{
    return(
      <div className="cellAction">
        <Link to="joe">
          
        <div className="viewButton">View</div>
        </Link>
        <div className="deleteButton">Delete</div>
      </div>
    );
  }
}

  ];

  return (
    <div className='datatable'>
      <div className="dataTableTitle">
        Add new user 
        <Link to="/users/new" className='addnew'>Add</Link>
      </div>
         <DataGrid
         className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
