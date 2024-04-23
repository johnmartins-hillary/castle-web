"use router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getBanksRequest } from "@/services/withdrawal/get-banks";
import Image from "next/image";
import Select from "react-select";
import { useEffect, useMemo, useState } from "react";
import { useWithdrawMutation } from "@/services/withdrawal";
import { useToast } from "@/components/ui/use-toast";
const WithdrawalForm = ({ callBackFunction, setOpenModal }: any) => {
  const [banks, setBanks] = useState([]);
  const [acct, setAcct] = useState("");
  const [amount, setAmount] = useState("");
  const [bankName, setBankName] = useState("");
  const [acctName, setAcctName] = useState("");
  const [withdraw, { isLoading, isError, isSuccess, error, data }]: any =
    useWithdrawMutation();
  const { toast } = useToast();

  const getBanksRequestHandler = useMemo(
    () => async () => {
      const bank = await getBanksRequest();
      const formatedData = bank?.map((item: any) => ({
        label: item.name,
        value: item.name.toLowerCase()
      }));
      setBanks(formatedData);
    },
    []
  );

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      background: "#EFEFEF",
      width: "100%",
      border: "none",
      borderRadius: "calc(0.5rem - 2px)",
      padding: 8
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none"
    })
  };

  useEffect(() => {
    if (isSuccess) {
      if(data?.message !== "Insufficient Balance"){
      callBackFunction(true);
        
      }
      setOpenModal(false);
      toast({
        title: `${data?.message}`
      });
    } else if (isError) {
      setOpenModal(false);
      toast({
        title: "Oops",
        description: `${
          error?.data?.message ? error?.data?.message : "Something went wrong"
        }`
      });
    }
  }, [isError, isError, isSuccess, error, isLoading]);

  const handleSubmit = () => {
    withdraw({
      account_number: acct,
      amount: amount,
      bank: bankName,
      account_name: acctName
    });
  };
  useEffect(() => {
    getBanksRequestHandler();
  }, []);
  useEffect(()=>{
    return()=>{
      setAcct("")
      setAcctName("")
      setAmount("")
      setBankName("")
    }
  },[])
  const disableBtn =  acct !== "" && acctName !=="" && amount !=="" &&  bankName !=="" ?  false :  true

  return (
    <>
      <form className="w-full ">
        <div className="w-full flex items-start justify-start gap-3 mb-[40px] ">
          <Button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="bg-primary_color w-[242px] md:w-[334px] rounded-xl py-6 text-sm text-white flex justify-start gap-5 items-center"
          >
            <Image
              src={"/images/import-icon.png"}
              width={33}
              height={33}
              alt="upload"
            />{" "}
            Withdrawals
          </Button>
        </div>
        <div className="w-full flex items-center justify-start gap-3">
          <div className="w-[45%]">
            <div className="w-full mb-5">
              <label
                className="font-normal text-sm text-left relative left-3"
                htmlFor="amount"
              >
                Amount
              </label>
            </div>

            <div className="w-full">
              <Input
                required
                type="number"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                id="amount"
                className="w-full bg-light_grey rounded-md text-black py-6  outline-none "
              />
            </div>
          </div>

          <div className="w-[45%]">
            <div className="w-full mb-5">
              <label
                className="font-normal text-sm text-left relative left-3"
                htmlFor="account-number"
              >
                Account Number
              </label>
            </div>

            <div className="w-full">
              <Input
                required
                type="number"
                value={acct}
                onChange={(e) => {
                  setAcct(e.target.value);
                }}
                id="account-number"
                className="w-full bg-light_grey rounded-md text-black py-6  outline-none "
              />
            </div>
          </div>
        </div>

        <div className="w-full flex  items-stretch justify-start gap-3 mt-8">
          <div className="w-[45%]">
            <div className="w-full mb-5">
              <label
                className="font-normal text-sm text-left relative left-3"
                htmlFor="account-name"
              >
                Account Name
              </label>
            </div>

            <div className="w-full">
              <Input
                required
                type="text"
                value={acctName}
                onChange={(e) => {
                  setAcctName(e.target.value);
                }}
                id="account-name"
                className="w-full bg-light_grey rounded-md text-black py-6  outline-none "
              />
            </div>
          </div>

          <div className=" w-[45%] max-w-sm grid items-center gap-1.5">
            <label
              htmlFor="year"
              className="font-normal mb-1 text-sm text-left "
            >
              Bank
            </label>
            <Select
              required
              placeholder={""}
              styles={customStyles}
              onChange={({ label, value }: any) => {
                setBankName(value);
              }}
              options={banks}
            />
          </div>
        </div>

        <div className=" w-full mt-16  ">
          <Button
          disabled={disableBtn}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="bg-primary_color rounded-[10px] py-6 text-white w-[268px] "
          >
            {isLoading ? "loading..." : " Withdraw"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default WithdrawalForm;
