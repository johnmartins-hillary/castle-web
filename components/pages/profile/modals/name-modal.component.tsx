// import { Button } from "@/components/ui/button";
"use client";
import Modal from "@/components/modal/modal.component";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Select from "react-select";
import {
  setNameHandler,
  setUserNameHandler
} from "@/redux/slices/user/user-profile.slice";
import { useGetCategoryListQuery } from "@/services/category";
import {
  useAddCategoryMutation,
  useUpdateUserProfileMutation
} from "@/services/user";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UsernameModal = ({ openModal, setOpenModal }: any) => {
  const dispatch = useDispatch();
  const name = useSelector(({ userprofile }: any) => userprofile.name);
  const profileState = useSelector(({ userprofile }: any) => userprofile);
  const username = useSelector(({ userprofile }: any) => userprofile.username);
  const [category, setCategory] = useState("");
  const { data: category_list_data }: any = useGetCategoryListQuery();
  const { toast } = useToast();
  const [category_list, setCategorylist] = useState<any>();
  const [
    updateUserProfile,
    { data, isLoading, isError, isSuccess, error }
  ]: any = useUpdateUserProfileMutation();
  const [
    addCategory,
    {
      isLoading: categoryLoading,
      isError: isCategoryError,
      isSuccess: isCategorySuccess,
      error: categoryError
    }
  ] = useAddCategoryMutation();
  const handleSubmit = () => {
    updateUserProfile(profileState);
    addCategory({ category: category });
  };

  useEffect(() => {
    if (isSuccess && isCategorySuccess) {
      toast({
        title: "Update Successful"
      });
      setOpenModal(false);
    } else if (isError && isCategoryError) {
      setOpenModal(false);
      toast({
        title: "Update Failed ",

        description: `${
          error?.data?.message ? error?.data?.message : "Something went wrong"
        }`
      });
    }
  }, [
    isSuccess,
    isError,
    error,
    isCategoryError,
    isCategorySuccess,
    categoryError,
    categoryLoading
  ]);

  useEffect(() => {
    const formattedCategries = category_list_data?.categories?.map(
      (category: any) => ({
        label: category.category_name,
        value: category.category_name?.toLowerCase()
      })
    );

    setCategorylist(formattedCategries);
  }, [category_list_data]);
  const disableBtn =
    name === "" && username === "" && category === "" ? true : false;

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      background: "#EFEFEF",
      border: "none",
      borderRadius: 21,
      width: 246,
      padding: 0
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none"
    })
  };

  return (
    <>
      <Modal
        onClose={() => {
          setOpenModal(isLoading);
        }}
        open={openModal}
      >
        <div className=" bg-white rounded-[24px] shadow-[#00000040] shadow-lg w-[375px] p-[23px] h-[531px] md:w-[655px]  lg:w-[758px] lg:h-[416px]  ">
          <div className="w-full mt-[38px] ">
            <p className="text-left text-[16px] font-bold">Name and Category</p>
          </div>
          <div className="  mt-[30px] lg:flex lg:items-center lg:justify-between">
            <div className="w-full  lg:w-[45%] ]">
              <Input
                value={name}
                onChange={(e) => {
                  dispatch(setNameHandler(e.target.value));
                }}
                className="w-[246px] bg-light_grey rounded-[21px] p-[12px] "
              />
              <Label className=" text-[14px] text-left font-light  top-[14px] relative left-[15px] ">
                Fullname
              </Label>
            </div>
            <div className="w-full lg:w-[45%] mt-[30px]">
              {/* <Input
                value={category}
                onChange={(e: any) => {
                  setCategory(e.target.value);
                }}
                className="w-[246px] bg-light_grey rounded-[21px] p-[12px] "
              /> */}
              <Select
                styles={customStyles}
                onChange={({ label, value }: any) => {
                  setCategory(value);
                }}
                options={category_list}
              />
              <Label className=" text-[14px] text-left font-light  top-[14px] relative left-[15px] ">
                Category
              </Label>
            </div>
          </div>
          <div className=" w-full lg:flex lg:items-center lg:justify-between lg:mt-[25px]">
            <div className="w-full mt-[30px]">
              <Input
                value={username}
                onChange={(e) => {
                  dispatch(setUserNameHandler(e.target.value));
                }}
                className="w-[246px] bg-light_grey rounded-[21px] p-[12px] "
              />
              <Label className=" text-[14px] text-left font-light  top-[14px] relative left-[15px] ">
                Username
              </Label>
            </div>

            <div className="w-full flex items-center justify-end mt-[50px] lg:mt-[0px] lg:justify-start ">
              <button
                disabled={isLoading || categoryLoading || disableBtn}
                onClick={handleSubmit}
                className="w-[135px] bg-black rounded-[22px] py-[13px] text-center text-white text-[17px] "
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UsernameModal;
