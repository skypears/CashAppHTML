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
import { HeaderBar } from "../components/webapp";
import Template from "../user-template";
import { Redo, Save, Undo } from "@/imports/icons";
import { useNavigate } from "react-router";
interface EmailRow {
  id: string;
  referenceField: string;
  discountAmount: string;
  paymentAmount: string;
  totalAmount: string;
  reasonCode: string;
}
const tableData: EmailRow[] = [
  {
    id: "1",
    referenceField: "PO1967124",
    discountAmount: "0.00",
    paymentAmount: "6979.88",
    totalAmount: "6979.88",
    reasonCode: "----------",
  },

  {
    id: "2",
    referenceField: "PO1967123",
    discountAmount: "0.00",
    paymentAmount: "9797.09",
    totalAmount: "9797.09",
    reasonCode: "----------",
  },

  {
    id: "3",
    referenceField: "PO1967122",
    discountAmount: "0.00",
    paymentAmount: "34254.00",
    totalAmount: "34254.00",
    reasonCode: "----------",
  },

  {
    id: "4",
    referenceField: "PO1967121",
    discountAmount: "0.00",
    paymentAmount: "979790.00",
    totalAmount: "979790.00",
    reasonCode: "----------",
  },

  {
    id: "5",
    referenceField: "PO1967120",
    discountAmount: "0.00",
    paymentAmount: "1234.00",
    totalAmount: "1234.00",
    reasonCode: "----------",
  },

  {
    id: "6",
    referenceField: "PO1967119",
    discountAmount: "0.00",
    paymentAmount: "97970.00",
    totalAmount: "97970.00",
    reasonCode: "----------",
  },

  {
    id: "7",
    referenceField: "PO1967118",
    discountAmount: "0.00",
    paymentAmount: "3950.00",
    totalAmount: "3950.00",
    reasonCode: "----------",
  },
];
function ToolBar() {
  return (
    <div className="toolbar h-16 bg-white flex items-center px-5 gap-2 z-20 m-2 rounded-md">
      <div className="flex w-full gap-6">
        <div className="flex flex-1 justify-between">
          <div className="font-medium">Remittance Number:</div>
          <div className="text-gray-400">5979780</div>
        </div>
        <div className="flex flex-1 justify-between">
          <div className="font-medium">Remittance Amount:</div>
          <div className="text-gray-400">22345.98</div>
        </div>
        <div className="flex flex-1 justify-between">
          <div className="font-medium">Customer Number:</div>
          <div className="text-gray-400">869698696786</div>
        </div>
      </div>
    </div>
  );
}
function DataTable() {
  const columns = [
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
              <div className="ml-auto text-right">
                <div>
                  <span className="text-sky-500">Remittance Amount: </span>
                  22345.92 |
                  <span className="text-sky-500 ml-1">Net Amount: </span>{" "}
                  22345.92{" "}
                </div>
                <div className="font-semibold">Difference: 0.00(0.00%)</div>
              </div>
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
function MailDetails() {
  const navigate = useNavigate();
  return (
    <Template>
      <HeaderBar>
        <button className="btn mr-2" onClick={() => navigate(-1)}>
          <ArrowBigLeft />
        </button>
        <FileText className="w-6 h-6 mr-2" />
        <h2 className="text-xl font-semibold">Details</h2>
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

export default MailDetails;
