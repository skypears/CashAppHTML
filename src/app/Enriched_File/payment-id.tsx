import { StickyNoteIcon } from "lucide-react";
import { HeaderBar } from "../components/webapp";
import Template from "../user-template";
import { Link, useNavigate } from "react-router";
import { Redo, Save, Undo } from "@/imports/icons";
import {
  ArrowBigLeft,
  ArrowRightLeft,
  ChevronDown,
  FileInput,
  FileText,
  Funnel,
  ListChecks,
  MinusCircle,
  PlusCircle,
} from "lucide-react";
function PaymentID() {
  const navigate = useNavigate();
  return (
    <Template>
      <HeaderBar>
        <button className="btn mr-2" onClick={() => navigate(-1)}>
          <ArrowBigLeft />
        </button>
        <FileText className="w-6 h-6 mr-2" />
        <h2 className="text-xl font-semibold">Payment-1509663</h2>
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

export default PaymentID;
interface EmailRow {
  id: string;
  invoiceNumber: string;
  referenceField: string;
  discountAmount: string;
  paymentAmount: string;
  totalAmount: string;
  reasonCode: string;
}
const tableData: EmailRow[] = [
  {
    id: "1",
    invoiceNumber: "INV-12345",
    referenceField: "PO1967124",
    discountAmount: "0.00",
    paymentAmount: "6979.88",
    totalAmount: "6979.88",
    reasonCode: "----------",
  },

  {
    id: "2",
    invoiceNumber: "INV-12346",
    referenceField: "PO1967123",
    discountAmount: "0.00",
    paymentAmount: "9797.09",
    totalAmount: "9797.09",
    reasonCode: "----------",
  },

  {
    id: "3",
    invoiceNumber: "INV-12347",
    referenceField: "PO1967122",
    discountAmount: "0.00",
    paymentAmount: "34254.00",
    totalAmount: "34254.00",
    reasonCode: "----------",
  },

  {
    id: "4",
    invoiceNumber: "INV-12348",
    referenceField: "PO1967121",
    discountAmount: "0.00",
    paymentAmount: "979790.00",
    totalAmount: "979790.00",
    reasonCode: "----------",
  },

  {
    id: "5",
    invoiceNumber: "INV-12349",
    referenceField: "PO1967120",
    discountAmount: "0.00",
    paymentAmount: "1234.00",
    totalAmount: "1234.00",
    reasonCode: "----------",
  },

  {
    id: "6",
    invoiceNumber: "INV-123410",
    referenceField: "PO1967119",
    discountAmount: "0.00",
    paymentAmount: "97970.00",
    totalAmount: "97970.00",
    reasonCode: "----------",
  },

  {
    id: "7",
    invoiceNumber: "INV-123411",
    referenceField: "PO1967118",
    discountAmount: "0.00",
    paymentAmount: "3950.00",
    totalAmount: "3950.00",
    reasonCode: "----------",
  },
];
function ToolBar() {
  return (
    <div className="toolbar bg-white  px-5 m-2 rounded-md py-3">
      <div className="grid grid-cols-3 gap-6">
        <div className="col">
          <div className="flex justify-between">
            <div className="font-medium">Payment No.</div>
            <div className="text-gray-400">5979780</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Payment Header ID:</div>
            <div className="text-gray-400">779768686</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Payment Amount</div>
            <div className="text-gray-400">15625.04</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Payment Date:</div>
            <div className="text-gray-400">2024-02-12</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Payment Name</div>
            <div className="text-gray-400">Grocery Dist</div>
          </div>
        </div>
        <div className="col">
          <div className="flex justify-between">
            <div className="font-medium">Customer Name</div>
            <div className="text-gray-400">Safeway</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Customer Number</div>
            <div className="text-gray-400">31531229</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Customer Identification Criteria</div>
            <div className="text-gray-400">Invoice</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Exception Status</div>
            <div className="text-gray-400">Success</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Placeholder XML</div>
            <div className="text-gray-400">-------------</div>
          </div>
        </div>
        <div className="col">
          <div className="flex justify-between">
            <div className="font-medium">Remittance Source</div>
            <div className="text-gray-400">EDI</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Original Payment FIle</div>
            <div className="text-gray-400">
              <Link to={"#"} download className="link link-info">
                Download
              </Link>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Linked Remittance File</div>
            <div className="text-gray-400">
              {" "}
              <Link to={"#"} download className="link link-info">
                Download
              </Link>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Notes</div>
            <div className="text-gray-400">
              <StickyNoteIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataTable() {
  const columns = [
    {
      key: "invoiceNumber",
      label: "Invoice Number",
      align: "text-left",
    },
    {
      key: "referenceField",
      label: "Reference Field",
      align: "text-left",
    },
    {
      key: "discountAmount",
      label: "Discount Amount",
      align: "text-right",
    },
    {
      key: "paymentAmount",
      label: "Payment Amount",
      align: "text-right",
    },
    {
      key: "totalAmount",
      label: "Total Amount",
      align: "text-right",
    },
    {
      key: "reasonCode",
      label: "Reason Code",
      align: "text-left",
    },
  ];
  return (
    <div className="p-3 bg-white rounded-md">
      <div className="bg-light  mb-4">
        <div className="tabs tabs-box rounded-lg">
          <input
            type="radio"
            name="tab_ctx"
            className="tab rounded-full px-4 checked:font-semibold"
            aria-label="Received Data"
            defaultChecked
            checked
          />
          <div className="tab-content bg-white p-3">
            <div className="flex gap-2 mb-2">
              <button className="btn">
                <PlusCircle size={16} />
              </button>
              <button className="btn">
                <MinusCircle size={16} />
              </button>
              <button className="btn">
                <ListChecks size={16} />
              </button>
              <button className="btn">
                <ArrowRightLeft size={16} />
              </button>
              <div className="join">
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
          <input
            type="radio"
            name="tab_ctx"
            className="tab rounded-full px-4 checked:font-semibold"
            aria-label="Transformed Data"
          />

          <div className="tab-content bg-white p-3">Tab content 2</div>
        </div>
      </div>
    </div>
  );
}
