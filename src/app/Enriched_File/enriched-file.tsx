import {
  ArrowBigLeft,
  ChevronDown,
  FileInput,
  FileText,
  FunnelX,
  Mail,
  Send,
  History,
  RotateCw,
} from "lucide-react";
import { HeaderBar } from "../components/webapp";
import Template from "../user-template";
import { Link, useNavigate } from "react-router";
import { Undo } from "@/imports/icons";
import { JSX } from "react";

function EnrichedFile() {
  const navigate = useNavigate();
  return (
    <Template>
      <HeaderBar>
        <button className="btn mr-2" onClick={() => navigate(-1)}>
          <ArrowBigLeft />
        </button>
        <FileText className="w-6 h-6 mr-2" />
        <h2 className="text-xl font-semibold">Enriched File</h2>
        <div className="ml-auto flex items-center gap-2">
          <select defaultValue="Pick a color" className="select border w-60">
            <option selected disabled={true}>
              Select Filter to Search
            </option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
          <button className="btn">
            <FunnelX />
          </button>
        </div>
      </HeaderBar>
      <div className="content">
        <div className="m-2 rounded">
          <DataTable />
        </div>
      </div>
    </Template>
  );
}

export default EnrichedFile;

function DataTable() {
  const columns = [
    {
      key: "batchId",
      label: "Batch ID",
      align: "text-right",
    },
    {
      key: "bankName",
      label: "Bank Name",
      align: "text-left",
    },
    {
      key: "outputFileName",
      label: "Output File Name",
      align: "text-left",
    },
    {
      key: "outputFile",
      label: "Output File",
      align: "text-left",
    },
    {
      key: "createUser",
      label: "Create User",
      align: "text-left",
    },
    {
      key: "outputTransmissionStatus",
      label: "Output Transmission Status",
      align: "text-center",
    },
  ];
  return (
    <div className="p-3 bg-white rounded-md">
      <div className="bg-light  mb-4">
        <div className="flex gap-2 mb-2">
          <button className="btn">
            <Undo size={24} />
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
          <button className="btn">
            <Mail size={16} />
          </button>
          <button className="btn">Add Notes</button>
          <button className="btn">
            <Send size={16} />
          </button>
          <button className="btn">
            <History size={16} /> View History
          </button>
          <button className="btn">
            <RotateCw size={16} />
          </button>

          <div className="ml-auto text-right">{/* content here */}</div>
        </div>
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
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
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
                  {columns.map((col) => (
                    <td key={col.key} className={` ${col.align}`}>
                      {row[col.key as keyof typeof row]}
                    </td>
                  ))}
                </tr>
              ))}
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
      </div>
    </div>
  );
}

interface EmailRow {
  id: string;
  batchId: JSX.Element | string;
  bankName: string;
  outputFileName: string;
  outputFile: JSX.Element | string;
  createUser: string;
  outputTransmissionStatus: string;
}
const tableData: EmailRow[] = [
  {
    id: "1",
    batchId: (
      <Link to="/batch-id" className="link link-info">
        140568
      </Link>
    ),
    bankName: "BOA",
    outputFileName: "HRCCAAOutputFileforBOA",
    outputFile: (
      <Link to="#" className="link link-hover link-info" download>
        Download
      </Link>
    ),
    createUser: "System",
    outputTransmissionStatus: "Completed",
  },
  {
    id: "2",
    batchId: (
      <Link to="/batch-id" className="link link-info">
        140569
      </Link>
    ),
    bankName: "JPM",
    outputFileName: "HRCCAAOutputfileforJPMC",
    outputFile: (
      <Link to="#" className="link link-hover link-info" download>
        Download
      </Link>
    ),
    createUser: "System",
    outputTransmissionStatus: "Completed",
  },
  {
    id: "3",
    batchId: (
      <Link to="/batch-id" className="link link-info">
        140570
      </Link>
    ),
    bankName: "SPM",
    outputFileName: "HRCCAAOutputfileforSPM",
    outputFile: (
      <Link to="#" className="link link-hover link-info" download>
        Download
      </Link>
    ),
    createUser: "System",
    outputTransmissionStatus: "Completed",
  },
  {
    id: "4",
    batchId: (
      <Link to="/batch-id" className="link link-info">
        140571
      </Link>
    ),
    bankName: "JPM",
    outputFileName: "HRCCAAOutputFileforBOA2",
    outputFile: (
      <Link to="#" className="link link-hover link-info" download>
        Download
      </Link>
    ),
    createUser: "System",
    outputTransmissionStatus: "Completed",
  },
  {
    id: "5",
    batchId: (
      <Link to="/batch-id" className="link link-info">
        140572
      </Link>
    ),
    bankName: "BOA",
    outputFileName: "------",
    outputFile: (
      <Link to="#" className="link link-hover link-info" download>
        Download
      </Link>
    ),
    createUser: "System",
    outputTransmissionStatus: "Completed",
  },
  {
    id: "6",
    batchId: (
      <Link to="/batch-id" className="link link-info">
        140573
      </Link>
    ),
    bankName: "JPM",
    outputFileName: "HRCCAAOutputFileforBOA3",
    outputFile: (
      <Link to="#" className="link link-hover link-info" download>
        Download
      </Link>
    ),
    createUser: "System",
    outputTransmissionStatus: "Completed",
  },
  {
    id: "7",
    batchId: (
      <Link to="/batch-id" className="link link-info">
        140574
      </Link>
    ),
    bankName: "BOA",
    outputFileName: "-----",
    outputFile: (
      <Link to="#" className="link link-hover link-info" download>
        Download
      </Link>
    ),
    createUser: "System",
    outputTransmissionStatus: "Completed",
  },
];
