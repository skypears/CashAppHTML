

import {
  ChevronDown,

  SquarePen,
  Mail,
} from "lucide-react";
import { HeaderBar } from "@/app/components/webapp";
import Template from "../user-template";
import { Download, Redo, Save, Undo } from "@/imports/icons";
import { Link } from "react-router";
import { JSX } from "react/jsx-runtime";
interface EmailRow {
  id: string;
  emailIdentifier: string;
  subject: JSX.Element;
  attachment: string;
  remittance: string;
  amount: string;
  exceptionDetails: string;
  receivedDate: string;
  updateDate: string;
}
const tableData: EmailRow[] = [
  {
    id: "1",
    emailIdentifier: "1967124",
    subject: <Link to="/mail-details" className="link link-info">Load# 4623tyb</Link>,
    attachment: "A2ATCH1.pdf",
    remittance: "R1-1",
    amount: "6467.00",
    exceptionDetails: "----------",
    receivedDate: "2018-09-08 12:00:00",
    updateDate: "2018-09-08 12:00:00",
  },
  {
    id: "2",
    emailIdentifier: "1967123",
    subject: <Link to="/mail-details" className="link link-info">Load# 3r2fseg</Link>,
    attachment: "A1ATCH2pdf",
    remittance: "R1-1",
    amount: "46535.00",
    exceptionDetails: "----------",
    receivedDate: "2018-09-08 12:00:00",
    updateDate: "2018-09-08 12:00:00",
  },
  {
    id: "3",
    emailIdentifier: "1967122",
    subject: <Link to="/mail-details" className="link link-info">Load# vfdgvbdfb</Link>,
    attachment: "A4ATCH3.pdf",
    remittance: "R1-1",
    amount: "47436.00",
    exceptionDetails: "PRLF",
    receivedDate: "2018-09-08 12:00:00",
    updateDate: "2018-09-08 12:00:00",
  },
  {
    id: "4",
    emailIdentifier: "1967121",
    subject: <Link to="/mail-details" className="link link-info">Load# 24235235</Link>,
    attachment: "A2ATCH1.pdf",
    remittance: "R1-1",
    amount: "35216.00",
    exceptionDetails: "----------",
    receivedDate: "2018-09-08 12:00:00",
    updateDate: "2018-09-08 12:00:00",
  },
  {
    id: "5",
    emailIdentifier: "1967120",
    subject: <Link to="/mail-details" className="link link-info">Load# 45865856</Link>,
    attachment: "A2ATCH1.pdf",
    remittance: "R1-1",
    amount: "36485.00",
    exceptionDetails: "AMF-L-R",
    receivedDate: "2018-09-08 12:00:00",
    updateDate: "2018-09-08 12:00:00",
  },
  {
    id: "6",
    emailIdentifier: "1967119",
    subject: <Link to="/mail-details" className="link link-info">Load# 54366</Link>,
    attachment: "A2ATCH1.pdf",
    remittance: "R1-1",
    amount: "3636.00",
    exceptionDetails: "AMF-G-TAMF-FG",
    receivedDate: "2018-09-08 12:00:00",
    updateDate: "2018-09-08 12:00:00",
  },
  {
    id: "7",
    emailIdentifier: "1967118",
    subject: <Link to="/mail-details" className="link link-info">Load# 34376743</Link>,
    attachment: "A2ATCH1.pdf",
    remittance: "R1-1",
    amount: "3246.00",
    exceptionDetails: "----------",
    receivedDate: "2018-09-08 12:00:00",
    updateDate: "2018-09-08 12:00:00",
  },
];
function ToolBar() {
  return (
    <div className="toolbar h-16 bg-white border-b border-[#d4d4d4] flex items-center px-5 gap-2 z-20">
      <div className="flex items-center gap-2">
        <button className="btn">
         <Undo/>
        </button>

        <button className="btn">
         <Save/>
        </button>
        <button className="btn">
          <Redo/>
        </button>
      </div>
      <div className="join join-vertical lg:join-horizontal">
        <button className="btn join-item text-base">
          <Download />
          Download IDO
        </button>
        <div className="join-item ">
          <button
            className="btn px-2 rounded-s-none"
            popoverTarget="download-ido"
            style={{ anchorName: "--downloadIDO" } /* as React.CSSProperties */}
          >
            <ChevronDown />
          </button>

          <ul
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="download-ido"
            style={
              { positionAnchor: "--downloadIDO" } /* as React.CSSProperties */
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
      <div className="join join-vertical lg:join-horizontal">
        <button className="btn join-item text-base">
          <SquarePen size={16} />
          Set Status
        </button>
        <div className="join-item ">
          <button
            className="btn px-2 rounded-s-none"
            popoverTarget="set-status"
            style={{ anchorName: "--status" } /* as React.CSSProperties */}
          >
            <ChevronDown />
          </button>

          <ul
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="set-status"
            style={
              { positionAnchor: "--status" } /* as React.CSSProperties */
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
  );
}
function DataTable() {
 
  const columns = [
    {
      key: "emailIdentifier",
      label: "Email Identifier",
      width: "w-[132px]",
      align: "text-left",
    },
    {
      key: "subject",
      label: "Subject",
      width: "w-[168px]",
      align: "text-left",
      bold: true,
    },
    {
      key: "attachment",
      label: "Attachments",
      width: "w-[156px]",
      align: "text-left",
      link: true,
    },
    {
      key: "remittance",
      label: "Remittance",
      width: "w-[101px]",
      align: "text-left",
      underline: true,
    },
    {
      key: "amount",
      label: "Remittance Amount",
      width: "w-[168px]",
      align: "text-right",
    },
    {
      key: "exceptionDetails",
      label: "Exception Details",
      width: "w-[158px]",
      align: "text-left",
    },
    {
      key: "receivedDate",
      label: "Received Date",
      width: "w-[172px]",
      align: "text-right",
    },
    {
      key: "updateDate",
      label: "Update Date",
      width: "w-[175px]",
      align: "text-right",
    },
  ];
  return (
    <div className="p-3 bg-white rounded-md" >
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-lg">
      <table className="table ">
        <thead>
          <tr>
            <th className="w-4">
              <div className="flex items-center justify-center w-12 shrink-0">
             <input type="checkbox" name="allselect"  className="checkbox checkbox-sm rounded" />
            </div>
            </th>
            {columns.map((col) => (
              <th key={col.key} className={`${col.width} ${col.align}`}>
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
              <input type="checkbox" name={`check-${row.id}`}  className="checkbox checkbox-sm rounded" />
            </div>
              </td>
              {columns.map((col) => (
                <td key={col.key} className={`${col.width} ${col.align}`}>
                  {row[col.key as keyof typeof row]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
   </div>
    </div>
  
  );
}
export default function Inbox() {
  return (
    <Template>
      <HeaderBar>
        <Mail className="w-8 h-8 text-black mr-3" />
        <h2 className="text-xl font-semibold">Remittances / Email Inbox</h2>
        <div className="ml-auto flex items-center gap-2">
          <select defaultValue="Pick a color" className="select border w-60">
            <option selected disabled={true}>Select Filter to Search</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
         
          <div className="join join-vertical lg:join-horizontal">
        <button className="btn join-item text-base">
        
          Advanced Search
        </button>
        <div className="join-item ">
          <button
            className="btn px-2 rounded-s-none"
            popoverTarget="adv-search"
            style={{ anchorName: "--advSearch" } /* as React.CSSProperties */}
          >
            <ChevronDown />
          </button>

          <ul
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="adv-search"
            style={
              { positionAnchor: "--advSearch" } /* as React.CSSProperties */
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
      </HeaderBar>
      <div className="content">
        <ToolBar />
      <div className="m-2 rounded">
        <DataTable />
      </div>
      </div>
      
    </Template>
  );
}
