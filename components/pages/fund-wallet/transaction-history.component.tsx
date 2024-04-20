import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import TransactionTable from "./transaction-table.component";
import { useGetWithdrawalHistoryQuery } from "@/services/wallet";

const TransactionHistory = () => {
  const { data, isLoading } = useGetWithdrawalHistoryQuery("");

  // State variables to manage selected month and year
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Define months and years data
  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
];

  const years = [
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" }
  ];

  return (
    <div className="w-full mt-16">
      <div className="w-full my-4">
        <p className="text-base font-bold text-left">Transaction History</p>
      </div>
      <div className="w-full flex items-center justify-start gap-3">
        {/* Month Select */}
        <Select
          value={selectedMonth}
          onValueChange={(e:any) => {
           setSelectedMonth(e)
          }}
        >
          <SelectTrigger className="w-[189px] outline-none border-none bg-light_grey rounded">
            <SelectValue  placeholder={selectedMonth ? `${months.filter((e)=>e.value ===selectedMonth )[1]}` : "Month"} />
          </SelectTrigger>
          <SelectContent className="bg-light_grey">
            <SelectGroup className="bg-light_grey">
              {months.map(month =>
                <SelectItem key={month.value} value={month.value}>
                  {month.label}
                </SelectItem>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Year Select */}
        <Select value={selectedYear}
              onValueChange={(e:any) => setSelectedYear(e.target.value)} >
          <SelectTrigger className="w-[189px] outline-none border-none bg-light_grey rounded">
            <SelectValue
              placeholder="Year"
              
            />
          </SelectTrigger>
          <SelectContent className="bg-light_grey">
            <SelectGroup className="bg-light_grey">
              {years.map(year =>
                <SelectItem key={year.value} value={year.value}>
                  {year.label}
                </SelectItem>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <TransactionTable />
    </div>
  );
};

export default TransactionHistory;
