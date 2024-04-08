import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { RiArrowDropDownLine } from "react-icons/ri";

const invoices = [
  {
    amount: "$250.00",
    date: "2024-03-01",
    transaction: "Deposit",
    status: "Paid"
  },
  {
    amount: "$150.00",
    date: "2024-03-05",
    transaction: "Consulting",
    status: "Pending"
  },
  {
    amount: "$350.00",
    date: "2024-03-10",
    transaction: "Withdrawal",
    status: "Unpaid"
  },
  {
    amount: "$450.00",
    date: "2024-03-15",
    transaction: "Consulting",
    status: "Paid"
  },
  {
    amount: "$550.00",
    date: "2024-03-20",
    transaction: "Deposit",
    status: "Paid"
  },
  {
    amount: "$200.00",
    date: "2024-03-25",
    transaction: "Withdrawal",
    status: "Pending"
  },
  {
    amount: "$300.00",
    date: "2024-03-30",
    transaction: "Consulting",
    status: "Unpaid"
  }
];

const TransactionTable = () => {
  return (
    <div className="w-full mt-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-black font-normal" >Amount</TableHead>
            <TableHead className="text-black font-normal" >Date</TableHead>
            <TableHead className="text-black font-normal" >Transaction</TableHead>
            <TableHead className="text-black font-normal" >Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(invoice =>
            <TableRow key={invoice.transaction}>
              <TableCell >
                {invoice.amount}
              </TableCell>
              <TableCell>
                {invoice.date}
              </TableCell>
              <TableCell>
                {invoice.transaction}
              </TableCell>
              <TableCell>
                {invoice.status}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="w-full mt-14 flex justify-center items-center gap-2">
        <p className=" text-sm font-normal">See all</p>
        <RiArrowDropDownLine size={18} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default TransactionTable;
