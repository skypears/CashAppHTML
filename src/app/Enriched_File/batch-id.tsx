import { ArrowBigLeft, ChevronDown, FileInput, FileText, FunnelX, Mail, RotateCw, Send, History } from "lucide-react"
import { HeaderBar } from "../components/webapp"
import Template from "../user-template"
import { Link, useNavigate } from "react-router"
import { JSX } from "react";
import { Undo } from "@/imports/icons";

function BatchID() {
    const navigate = useNavigate();
    return  <Template>
      <HeaderBar>
        <button className="btn mr-2" onClick={() => navigate(-1)}>
          <ArrowBigLeft />
        </button>
        <FileText className="w-6 h-6 mr-2" />
        <h2 className="text-xl font-semibold">Batch ID #140568</h2>
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
}

export default BatchID

function DataTable() {
    const columns = [
    {
      key: "accountId",
      label: "Account ID",
      align: "text-right",
    },
    {
      key: "transactionCode",
      label: "Transaction Code",
      align: "text-right",
    },
        {
      key: "transactionType",
      label: "Transaction Type",
      align: "text-left",
    },
        {
      key: "amount",
      label: "Amount",
      align: "text-right",
    },
        {
      key: "accountOrRef",
      label: "Account or Reference",
      align: "text-left",
    },
        {
      key: "checkOrRef",
      label: "Check or Reference",
      align: "text-left",
    },
        {
      key: "description",
      label: "Description",
      align: "text-left",
    },
        {
      key: "currency",
      label: "Currency",
      align: "text-center",
    },
        {
      key: "direction",
      label: "Direction",
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
    accountId: string;
    transactionCode: string;
    transactionType: string;
    amount: string | JSX.Element;
    accountOrRef: string;
    checkOrRef: string;
    description: string;
    currency: string;
    direction: string | JSX.Element;
}
const tableData: EmailRow[] = [
//   30236004
// 475
// Check Paid
// 2171.28
// 8282069678
// 40676
//  Check No: 000000040676
// USD
    // Debit
    {
        id: "1",
        accountId: "30236004",
        transactionCode: "475",
        transactionType: "Check Paid",
        amount: <Link to="/payment-id" className="link link-info">2171.28</Link>,
        accountOrRef: "8282069678",
        checkOrRef: "40676",
        description: "Check No: 000000040676",
        currency: "USD",
        // direction: <span className="text-red-500">Debit</span> // if debit then red , if credit then green
        direction: <span className="text-error">Debit</span>
    },
    
// 30236004
// 475
// Check Paid
// 42171.28
// 8282069677
// 40677
//  Check No: 000000040676
// USD
    // Credit
    {
        id: "2",
        accountId: "30236004",
        transactionCode: "475",
        transactionType: "Check Paid",
        amount: <Link to="/payment-id" className="link link-info">42171.28</Link>,
        accountOrRef: "8282069677",
        checkOrRef: "40677",
        description: "Check No: 000000040677",
        currency: "USD",
        direction: <span className="text-success">Credit</span>
    },
// 30236004
// 142
// Check Paid
// 2352.28
// 8282069676
// 40678
//  Check No: 000000040676
// USD
    // Debit
    {
        id: "3",
        accountId: "30236004",
        transactionCode: "142",
        transactionType: "Check Paid",
        amount: <Link to="/payment-id" className="link link-info">2352.28</Link>,
        accountOrRef: "8282069676",
        checkOrRef: "40678",
        description: "Check No: 000000040678",
        currency: "USD",
        direction: <span className="text-error">Debit</span>
    },
// 30236004
// 142
// ACH Credit Received
// 2978.28
// 8282069675
// 40679
//  Check No: 000000040676
// USD
    // Credit
    {
        id: "4",
        accountId: "30236004",
        transactionCode: "142",
        transactionType: "ACH Credit Received",
        amount: <Link to="/payment-id" className="link link-info">2978.28</Link>,
        accountOrRef: "8282069675",
        checkOrRef: "40679",
        description: "Check No: 000000040679",
        currency: "USD",
        direction: <span className="text-success">Credit</span>
    },
// 30236004
// 142
// ACH Credit Received
// 2432.28
// 8282069674
// 40671
//  Check No: 000000040676
// USD
    // Debit
    {
        id: "5",
        accountId: "30236004",
        transactionCode: "142",
        transactionType: "ACH Credit Received",
        amount: <Link to="/payment-id" className="link link-info">2432.28</Link>,
        accountOrRef: "8282069674",
        checkOrRef: "40671",
        description: "Check No: 000000040671",
        currency: "USD",
        direction: <span className="text-error">Debit</span>
    },
// 30236004
// 184
// Draft Deposit
// 2171.28
// 8282069673
// 40632
//  Check No: 000000040676
// USD
    // Credit
    {
        id: "6",
        accountId: "30236004",
        transactionCode: "184",
        transactionType: "Draft Deposit",
        amount: <Link to="/payment-id" className="link link-info">2171.28</Link>,
        accountOrRef: "8282069673",
        checkOrRef: "40632",
        description: "Check No: 000000040632",
        currency: "USD",
        direction: <span className="text-success">Credit</span>
    },
// 30236004
// 184
// Outgoing Money Transfer
// 2171.28
// 8282069672
// 40622
//  Check No: 000000040676
// USD
    // Debit
    {
        id: "7",
        accountId: "30236004",
        transactionCode: "184",
        transactionType: "Outgoing Money Transfer",
        amount: <Link to="/payment-id" className="link link-info">2171.28</Link>,
        accountOrRef: "8282069672",
        checkOrRef: "40622",
        description: "Check No: 000000040622",
        currency: "USD",
        direction: <span className="text-error">Debit</span>
    }
];