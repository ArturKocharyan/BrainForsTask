import './App.css';
import {MyTable} from './MyTable/MyTable';
import date from './data/data.json'
import React, { useMemo } from 'react';


function App() {

  const data = useMemo(() => date.items, []);

  const columns = useMemo(
    () => [
      {
        Header: "Created On",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "CREATED-ON");
          return field && field.values.length > 0 ? field.values[0].value : "";
        },
        hidden: false
      },
      {
        Header: "Drug Substance",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FCUSTBBCODE");
          return field && field.values.length > 0
            ? field.values[0].value.label
            : "";
        },
        hidden: false
      },
      {
        Header: "Country",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FCUSTCOUNTRY");
          return field && field.values.length > 0
            ? field.values.map((value) => value.label).join(" ")
            : "";
        },
        hidden: false
      },
      {
        Header: "Country Group",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FCUSTCOUNTRYGROUP");
          return field && field.values.length > 0 ? field.values[0] : "";
        },
        hidden: false
      },
      {
        Header: "CTD Code",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FCUSTCTDCODE");
          return field && field.values.length > 0 ? field.values[0].value : "";
        },
        hidden: true
      },
      {
        Header: "CTD Title",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FCUSTCTDTITLE");
          return field && field.values.length > 0 ? field.values[0].value : "";
        },
        hidden: true
      },
      {
        Header: "Effective Date",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FCUSTEFFECTIVEDATE");
          return field && field.values.length > 0 ? field.values[0].value : "";
        },
        hidden: false
      },
      {
        Header: "Effective Version",
        accessor: (row) => {
          const field = row.fields.find(
            (f) => f.id === "FCUSTEFFECTIVEVERSION"
          );
          return field && field.values.length > 0 ? field.values[0].value : "";
        },
        hidden: false
      },
      {
        Header: "Product Area",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FCUSTPRODUCTAREA");
          return field && field.values.length > 0
            ? field.values.map((value) => value.label).join(" ")
            : "";
        },
        hidden: true
      },
      {
        Header: "Template Stage",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FCUSTTEMPLATESTAGE");
          return field && field.values.length > 0
            ? field.values.map((value) => value.label).join(" ")
            : "";
        },
        hidden: false
      },
      {
        Header: "Description",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FDESCRIPTION");
          return field && field.values.length > 0 ? field.values[0].value : "";
        },
        hidden: false
      },
      {
        Header: "Created By",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FIAPCREATEDBY");
          return field && field.values.length > 0 ? field.values[0].label : "";
        },
        hidden: true
      },
      {
        Header: "Object Type",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FIAPOBJECTTYPE");
          return field && field.values.length > 0 ? field.values[0].label : "";
        },
        hidden: false
      },
      {
        Header: "Template Manager",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FIAPTEMPLATEMANAGER");
          return field && field.values.length > 0 ? field.values[0].label : "";
        },
        hidden: false
      },
      {
        Header: "Template Owner",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FIAPTEMPLATEOWNER");
          return field && field.values.length > 0 ? field.values[0].label : "";
        },
        hidden: false
      },
      {
        Header: "Template Status",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FIAPTEMPLATESTATUS");
          return field && field.values.length > 0 ? field.values[0].label : "";
        },
        hidden: false
      },
      {
        Header: "Template Type",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FIAPTEMPLATETYPE");
          return field && field.values.length > 0 ? field.values[0].label : "";
        },
        hidden: false
      },
      {
        Header: "Title",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "FTITLE");
          return field && field.values.length > 0 ? field.values[0].value : "";
        },
        hidden: false
      },
      {
        Header: "Modified On",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "MODIFIED-ON");
          return field && field.values.length > 0 ? field.values[0].value : "";
        },
        hidden: false
      },
      {
        Header: "Version",
        accessor: (row) => {
          const field = row.fields.find((f) => f.id === "VERSION");
          return field && field.values.length > 0 ? field.values[0].value : "";
        },
        hidden: false
      },
    ],
    []
  );

  return (
    <div className="App">
      <MyTable data={data} columns={columns} />
    </div>
  );
}

export default App;
