import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Safitro", firstName: "Ilham", age: 22 },
  { id: 2, lastName: "Leksono", firstName: "Rozaq", age: 21 },
  { id: 3, lastName: "Rizky Maulana", firstName: "Fathu", age: 21 },
  { id: 4, lastName: "Gunanto", firstName: "Dani", age: 21 },
  { id: 5, lastName: "Salim Musafak", firstName: "Mirza", age: 21 },
  { id: 6, lastName: "Rifandi", firstName: "Septiyan", age: 21 },
  { id: 7, lastName: "Azmi Ramadhan", firstName: "Izzal", age: 22 },
  { id: 8, lastName: "Scotia", firstName: "Hilmy", age: 21 },
  { id: 9, lastName: "Ferdiansyah", firstName: "Tesar", age: 21 },
];

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
        </div>
      );
    },
  },
];

const Mydatatable = () => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        Users
        <Link to="/users/new" style={{ textDecoration: "none" }}>
          Add New
        </Link>
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Mydatatable;