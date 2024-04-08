"use client";

import { usersData } from "./user-data";
import UserCard from "./usercard.component";
import { useEffect, useState } from "react";
const Offline = () => {
  const [users, setUsers] = useState([
    {
      firstName:"John",
      lastName:"Doe",
      id:1
    },
    {
      firstName:"Wally",
      lastName:"West",
      id:2
    },
    {
      firstName:"Barry",
      lastName:"Allen",
      id:3
    },
    {
      firstName:"John",
      lastName:"Snow",
      id:4
    },
    {
      firstName:"Eobard",
      lastName:"Thawn",
      id:5
    },
    {
      firstName:"Vandal",
      lastName:"Savage",
      id:6
    },
  ]);
  // const getData = async () => {
  //   await fetch("https://dummyjson.com/users")
  //     .then(res => res.json())
  //     .then(json => setUsers(json?.users));
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="w-full  md:max-lg:w-3/5 lg:w-1/2">
      <div className="w-full flex items-center  justify-start gap-3">
        <p className="font-bold text-sm">Offline</p>
      </div>

      <div className="w-full mt-5">
            {usersData?.slice(3,6)?.map(({id,firstName,lastName})=>(
                  <UserCard offline={true} key={id} name={`${firstName} ${lastName}`} />
            ))}
      </div>
    </div>
  );
};

export default Offline;
