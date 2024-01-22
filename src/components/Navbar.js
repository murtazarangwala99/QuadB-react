import React from "react";

const Navbar = () => {
  return (
    <div className="mx-10 my-4 flex justify-between px-4 border-2 rounded-md">
      <div>
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQHKVMFH-niXIg/company-logo_200_200/0/1637757773341?e=2147483647&v=beta&t=vntN1K4lDPVnScvv95bDBlo0MlqO_jOGRQ0NzqEa5kc"
          alt="company-logo"
          className="w-[100px]"
        />
      </div>
      <div className="font-extrabold text-center text-xl my-8">
        <p>QuadB Technologies</p>
      </div>
    </div>
  );
};

export default Navbar;
