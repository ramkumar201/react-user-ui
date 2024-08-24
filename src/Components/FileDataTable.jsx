import DataTable from "react-data-table-component";
// import Loader from "./Loader";
// import { useState, useEffect } from "react";

const FileDataTable = () => {
  // const [pending, setPending] = useState(true);
  // const [rows, setRows] = useState([]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "File Type",
      selector: (row) => row.year,
    },
    {
      name: "File Name",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Last Update",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setRows(data);
  //     setPending(false);
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, [data]);

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      fixedHeader={true}
      // progressPending={pending}
      // progressComponent={<Loader />}
    />
  );
};

export default FileDataTable;
