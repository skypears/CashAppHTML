import {
  ArrowBigLeft,
  ChevronDown,
  FileInput,
  FileText,
  Funnel,
} from "lucide-react";
import { HeaderBar } from "../components/webapp";
import Template from "../user-template";
import { Link, useNavigate } from "react-router";
import { Redo, Save, Undo } from "@/imports/icons";
import { JSX } from "react/jsx-runtime";

function ERPOpenInvoices() {
  const navigate = useNavigate();
  return (
    <Template>
      <HeaderBar>
        <button className="btn mr-2" onClick={() => navigate(-1)}>
          <ArrowBigLeft />
        </button>
        <FileText className="w-6 h-6 mr-2" />
        <h2 className="text-xl font-semibold">ERP Open Invoices</h2>
      </HeaderBar>
      <div className="content">
        <div className="m-2 rounded">
          <div className="p-3 bg-white">
            <div className="flex gap-2 items-center mb-3">
              <input type="date" className="input" value={"02-27-2026"} />
              <div className="join ml-auto">
                <button className="btn join-item">
                  <Funnel size={16} />
                </button>
                <div className="join-item ">
                  <button
                    className="btn px-2 rounded-s-none"
                    popoverTarget="filter"
                    style={
                      { anchorName: "--filter" } /* as React.CSSProperties */
                    }
                  >
                    <ChevronDown size={16} />
                  </button>

                  <ul
                    className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto"
                    id="filter"
                    style={
                      {
                        positionAnchor: "--filter",
                      } /* as React.CSSProperties */
                    }
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="btn">
                <Undo />
              </button>
              <button className="btn">
                <Save />
              </button>
              <button className="btn">
                <Redo />
              </button>
              <div className="join">
                <button className="btn join-item">
                  <FileInput size={16} />
                </button>
                <div className="join-item ">
                  <button
                    className="btn px-2 rounded-s-none"
                    popoverTarget="fileInput"
                    style={
                      { anchorName: "--fileInput" } /* as React.CSSProperties */
                    }
                  >
                    <ChevronDown size={16} />
                  </button>

                  <ul
                    className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto"
                    id="fileInput"
                    style={
                      {
                        positionAnchor: "--fileInput",
                      } /* as React.CSSProperties */
                    }
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <DataTable />
          </div>
        </div>
      </div>
    </Template>
  );
}

export default ERPOpenInvoices;

function DataTable() {
  const columns = [
    {
      key: "clientId",
      secondaryLabel: "Client ID",
      primaryLabel: "Client Name",
      align: "text-left",
    },
    {
      key: "custId",
      secondaryLabel: "Customer ID",
      primaryLabel: "Customer Name",
      align: "text-left",
    },
    {
      key: "mcn",
      secondaryLabel: null,
      primaryLabel: "MC#",
      align: "text-right",
    },
    {
      key: "invDate",
      secondaryLabel: null,
      primaryLabel: "Invoice Date",
      align: "text-right",
    },
    {
      key: "invNumber",
      secondaryLabel: "Invoice #",
      primaryLabel: "Invoice Amount",
      align: "text-right",
    },
    {
      key: "invDueDate",
      secondaryLabel: null,
      primaryLabel: "Invoice Due Date",
      align: "text-right",
    },
    {
      key: "loadNumber",
      secondaryLabel: null,
      primaryLabel: "Load Number",
      align: "text-right",
    },
    {
      key: "invDue",
      secondaryLabel: null,
      primaryLabel: "Invoice Due",
      align: "text-right",
    },
  ];
  interface EmailRow {
    id: string;
    clientId: string;
    clientName: string;
    custId: string;
    custName: string;
    mcn: string;
    invDate: string;
    invNumber: string;
    invAmount: string | JSX.Element;
    invDueDate: string;
    loadNumber: string;
    invDue: string;
  }
  const tableData: EmailRow[] = [
    {
      id: "1",
      clientId: "N678769796",
      clientName: "NNG Textiles",
      custId: "C69797",
      custName: "IMI MX Corp",
      mcn: "1001",
      invDate: "01/25/2025",
      invNumber: "INV1007575",
      invAmount: (
        <Link className="link link-info" to="#">
          $1000.00
        </Link>
      ),
      invDueDate: "2025/04/20",
      loadNumber: "1001",
      invDue: "$2,934.00",
    },
    {
      id: "2",
      clientId: "N75895747",
      clientName: "AOC Enterprises",
      custId: "C97985786",
      custName: "UPI Enterprises",
      mcn: "1002",
      invDate: "01/25/2025",
      invNumber: "INV196979",
      invAmount: (
        <Link className="link link-info" to="#">
          $1,000.00
        </Link>
      ),
      invDueDate: "2025/04/20",
      loadNumber: "1002",
      invDue: "$3,979.00",
    },
    {
      id: "3",
      clientId: "N36476476376",
      clientName: "ABG Corporation",
      custId: "C86865878",
      custName: "CAPA Enterprises",
      mcn: "1003",
      invDate: "01/25/2025",
      invNumber: "INV1868698",
      invAmount: (
        <Link className="link link-info" to="#">
          $1,000.00
        </Link>
      ),
      invDueDate: "2025/04/20",
      loadNumber: "1003",
      invDue: "$12,789.00",
    },
  ];
  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
        <table className="table ">
          <thead>
            <tr>
              <th className="w-4">
                <div className="flex items-center justify-center w-12 shrink-0">
                  <input
                    type="checkbox"
                    name="allselect"
                    className="checkbox checkbox-sm rounded"
                  />
                </div>
              </th>
              {columns.map((col) => (
                <th key={col.key} className={`${col.align}`}>
                  <span className="text-xs leading-none">
                    {col.secondaryLabel}
                  </span>
                  <br />
                  <span className="text-black">{col.primaryLabel}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => {
              console.log(row);
              return (
                <tr key={row.id}>
                  <td>
                    <div className="flex items-center justify-center w-12 shrink-0">
                      <input
                        type="checkbox"
                        name={`check-${row.id}`}
                        className="checkbox checkbox-sm rounded"
                      />
                    </div>
                  </td>
                  <td >
                    <span className="text-xs leading-none">{row.clientId}</span>
                    <br />
                    <span className="text-black">{row.clientName}</span>
                  </td>
                  <td>
                    <span className="text-xs leading-none">{row.custId}</span>
                    <br />
                    <span className="text-black">{row.custName}</span>
                  </td>
                  <td className="text-right">{row.mcn}</td>
                  <td  className="text-right">{row.invDate}</td>
                  <td  className="text-right">
                    <span className="text-xs leading-none">
                      {row.invNumber}
                    </span>
                    <br />
                    <span className="text-black">{row.invAmount}</span>
                  </td>
                  <td  className="text-right">{row.invDueDate}</td>
                  <td  className="text-right">{row.loadNumber}</td>
                  <td  className="text-right">{row.invDue}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex gap-2 text-nowrap items-center px-3">
          Showing
          <select name="pagesize" id="pagesize" className="select">
            <option selected value="10">
              10
            </option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          per Page
        </div>
        <div className="join my-4">
          <button className="join-item btn w-10">1</button>
          <button className="join-item btn w-10">2</button>
          <button className="join-item btn btn-active btn-primary w-10">
            3
          </button>

          <button className="join-item btn w-10">99</button>
          <button className="join-item btn w-10">100</button>
        </div>
      </div>
    </>
  );
}
