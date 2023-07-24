import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Img } from "components";

const Sidebar1 = (props) => {
  const sideBarMenu = [
    {
      label: (
        <Img
          className="h-8 text-blue-A200 w-8"
          src="images/img_materialsymbolsdashboard_blue_100_01.svg"
          alt="materialsymbols"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-8 w-8"
          src="images/img_mdifilereport_blue_a200.svg"
          alt="mdifilereport"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-[42px] w-[42px]"
          src="images/img_healthiconstruckdriver.svg"
          alt="healthiconstruc"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-8 w-8"
          src="images/img_fluentvehiclecar16filled.svg"
          alt="fluentvehicleca"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-[26px]"
          src="images/img_location.svg"
          alt="location"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-8 w-8"
          src="images/img_typcnmessages.svg"
          alt="typcnmessages"
        />
      ),
    },
  ];

  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-[50px] mt-[21px] mx-auto w-[50px]"
          src="images/img_folder.svg"
          alt="folder"
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              paddingLeft: "34px",
              flexDirection: "column",
              [`&:hover, &.ps-active`]: { color: "#bbd1f3" },
            },
          }}
          className="flex flex-col items-center justify-start mb-[37px] mt-[157px] md:pr-10 sm:pr-5 pr-[57px] w-[43%]"
        >
          <div className="flex flex-col gap-[37px] items-center justify-start w-full">
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
          <div className="flex flex-col items-center justify-start mt-[290px] w-full">
            <MenuItem>
              <div className="flex items-end justify-start sm:pl-5">
                <Img
                  className="h-[82px]"
                  src="images/img_info.svg"
                  alt="info"
                />
              </div>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
