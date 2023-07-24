import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DahboardPage = () => {
  const sideBarMenu = [
    {
      label: (
        <Img
          className="h-8 text-blue-100 w-8"
          src="images/img_materialsymbolsdashboard.svg"
          alt="materialsymbols"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-8 w-8"
          src="images/img_mdifilereport.svg"
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
  const [groupthreevalue, setGroupthreevalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-outfit items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[99px] bg-blue-50 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
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
                  [`&:hover, &.ps-active`]: { color: "#428eff" },
                },
              }}
              className="flex flex-col items-center justify-start mb-[187px] mt-[157px] md:pr-10 sm:pr-5 pr-[57px] w-[43%]"
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
          <div className="flex flex-1 flex-col gap-[21px] items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 border-b border-black-900_19 border-solid flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                  <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-between mb-1 w-[15%] md:w-full">
                    <Img
                      className="h-[53px] md:h-auto rounded-[50%] w-[53px]"
                      src="images/img_ellipse1.png"
                      alt="ellipseOne"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-gray-900"
                        size="txtOutfitSemiBold16"
                      >
                        Patrick Davidson
                      </Text>
                      <Text
                        className="mt-0.5 text-gray-600 text-sm"
                        size="txtOutfitRegular14"
                      >
                        User ID: 200114
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row gap-4 items-center justify-between md:ml-[0] ml-[312px] w-[61%] md:w-full">
                    <Input
                      name="groupThree"
                      placeholder="Search anything here"
                      value={groupthreevalue}
                      onChange={(e) => setGroupthreevalue(e)}
                      className="leading-[normal] p-0 placeholder:text-blue_gray-900_a5 sm:px-5 text-blue_gray-900_a5 text-left text-xs w-full"
                      wrapClassName="bg-gray-50 flex px-6 py-[18px] rounded-[10px] md:w-full"
                      suffix={
                        groupthreevalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer h-5 ml-[35px] my-auto"
                            onClick={() => setGroupthreevalue("")}
                            fillColor="#333333a5"
                            height={20}
                            width={20}
                            viewBox="0 0 20 20"
                          />
                        ) : (
                          <Img
                            className="cursor-pointer h-5 ml-[35px] my-auto"
                            src="images/img_search_blue_gray_900.svg"
                            alt="search"
                          />
                        )
                      }
                    ></Input>
                    <div className="bg-blue-300 flex flex-col items-center justify-start p-4 rounded-[10px]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_solarbellbold.svg"
                        alt="solarbellbold"
                      />
                    </div>
                  </div>
                </header>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-[95%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[54%] md:w-full">
                <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-[98%] md:w-full">
                  <div className="bg-blue-A200 flex flex-col items-center justify-end p-[18px] rounded-[10px] w-[33%] md:w-full">
                    <div className="flex flex-col items-start justify-start mb-[11px] mt-4">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtOutfitSemiBold28"
                      >
                        12,080
                      </Text>
                      <Text
                        className="mt-1 text-base text-gray-100"
                        size="txtOutfitRegular16"
                      >
                        Total Number of Reports{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="bg-indigo-500 flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-[10px] w-[33%] md:w-full">
                    <div className="flex flex-col items-start justify-start my-2.5">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtOutfitSemiBold28"
                      >
                        850
                      </Text>
                      <Text
                        className="mt-1 text-base text-gray-100"
                        size="txtOutfitRegular16"
                      >
                        Total Number of Drivers
                      </Text>
                    </div>
                  </div>
                  <div className="bg-indigo-400 flex flex-col items-center justify-start p-[17px] rounded-[10px] w-[33%] md:w-full">
                    <div className="flex flex-col items-start justify-start my-[15px]">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtOutfitSemiBold28"
                      >
                        1080
                      </Text>
                      <Text
                        className="mt-1 text-base text-gray-100"
                        size="txtOutfitRegular16"
                      >
                        Total Number of Vehicles
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-200 flex flex-col gap-[19px] justify-end mt-[21px] py-[13px] rounded-[10px] w-full">
                  <div className="flex md:flex-col flex-row gap-[21px] items-end justify-start ml-8 md:ml-[0] mr-[466px] mt-[11px] w-[28%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_mdifilereport_white_a700.svg"
                      alt="mdifilereport_One"
                    />
                    <Text
                      className="md:mt-0 mt-[5px] text-white-A700 text-xl"
                      size="txtOutfitSemiBold20"
                    >
                      Recent reports
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <List
                      className="flex flex-col gap-1 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="bg-blue-300 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-[7px] w-full">
                        <Button className="bg-white-A700 cursor-pointer font-semibold h-[30px] leading-[normal] md:ml-[0] ml-[29px] md:mt-0 my-3 py-1.5 rounded-[3px] text-blue-A200 text-center text-sm w-[29px]">
                          01
                        </Button>
                        <Text
                          className="md:ml-[0] ml-[19px] text-base text-white-A700"
                          size="txtOutfitSemiBold16WhiteA700"
                        >
                          Violencia en Piantini por Joan Quezada
                        </Text>
                        <div className="flex md:flex-1 flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[104px] w-[16%] md:w-full">
                          <Line className="bg-blue-A100 h-[54px] w-px" />
                          <Text
                            className="text-base text-white-A700"
                            size="txtOutfitSemiBold16WhiteA700"
                          >
                            View Media
                          </Text>
                        </div>
                        <Line className="bg-blue-A100 h-[54px] md:h-px md:ml-[0] ml-[22px] md:w-full w-px" />
                        <Img
                          className="h-6 ml-5 md:ml-[0] w-6"
                          src="images/img_solareyebold.svg"
                          alt="solareyebold"
                        />
                      </div>
                      <Line className="self-center h-px bg-white-A700_59 w-full" />
                      <div className="flex md:flex-1 flex-col items-center justify-start ml-[37px] mr-[41px] my-0 w-[89%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Button className="bg-white-A700 cursor-pointer font-semibold h-[30px] leading-[normal] md:mt-0 my-3 py-1.5 rounded-[3px] text-blue-A200 text-center text-sm w-[29px]">
                            02
                          </Button>
                          <Text
                            className="sm:flex-1 leading-[150.00%] md:ml-[0] ml-[19px] text-base text-white-A700 w-[49%] sm:w-full"
                            size="txtOutfitSemiBold16WhiteA700"
                          >
                            Alta velocidad en el Ens. Ozama por Cristian Bake
                          </Text>
                          <div className="flex md:flex-1 flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[90px] w-[18%] md:w-full">
                            <Line className="bg-blue-A100 h-[54px] w-px" />
                            <Text
                              className="text-base text-white-A700"
                              size="txtOutfitSemiBold16WhiteA700"
                            >
                              View Media
                            </Text>
                          </div>
                          <Line className="bg-blue-A100 h-[54px] md:h-px md:ml-[0] ml-[22px] md:w-full w-px" />
                          <Img
                            className="h-6 ml-5 md:ml-[0] md:mt-0 mt-[15px] w-6"
                            src="images/img_solareyebold.svg"
                            alt="solareyebold"
                          />
                        </div>
                      </div>
                      <Line className="self-center h-px bg-white-A700_59 w-full" />
                      <div className="bg-blue-300 flex flex-1 flex-col items-center justify-end my-0 p-[7px] w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[91%] md:w-full">
                          <Button className="bg-white-A700 cursor-pointer font-semibold h-[30px] leading-[normal] md:mt-0 my-3 py-1.5 rounded-[3px] text-blue-A200 text-center text-sm w-[29px]">
                            03
                          </Button>
                          <Text
                            className="leading-[150.00%] md:ml-[0] ml-[19px] text-base text-white-A700 w-[49%] sm:w-full"
                            size="txtOutfitSemiBold16WhiteA700"
                          >
                            Conduccion temeraria en Romana por Juan Olivo
                          </Text>
                          <div className="flex flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[90px] w-[18%] md:w-full">
                            <Line className="bg-blue-A100 h-[54px] w-px" />
                            <Text
                              className="text-base text-white-A700"
                              size="txtOutfitSemiBold16WhiteA700"
                            >
                              View Media
                            </Text>
                          </div>
                          <Line className="bg-blue-A100 h-[54px] md:h-px md:ml-[0] ml-[22px] md:w-full w-px" />
                          <Img
                            className="h-6 ml-5 md:ml-[0] md:mt-0 mt-[15px] w-6"
                            src="images/img_solareyebold.svg"
                            alt="solareyebold"
                          />
                        </div>
                      </div>
                      <Line className="self-center h-px bg-white-A700_59 w-full" />
                      <div className="flex md:flex-1 flex-col items-center justify-start ml-[37px] mr-[41px] my-0 w-[89%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Text
                            className="bg-white-A700 h-[30px] justify-center md:mt-0 my-3 p-[5px] rounded-[3px] text-blue-A200 text-sm w-[29px]"
                            size="txtOutfitSemiBold14"
                          >
                            04
                          </Text>
                          <Text
                            className="sm:flex-1 leading-[150.00%] md:ml-[0] ml-[19px] text-base text-white-A700 w-[49%] sm:w-full"
                            size="txtOutfitSemiBold16WhiteA700"
                          >
                            Report name will be displayed here in order to its
                            details
                          </Text>
                          <div className="flex md:flex-1 flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[90px] w-[18%] md:w-full">
                            <Line className="bg-blue-A100 h-[54px] w-px" />
                            <Text
                              className="text-base text-white-A700"
                              size="txtOutfitSemiBold16WhiteA700"
                            >
                              View Media
                            </Text>
                          </div>
                          <Line className="bg-blue-A100 h-[54px] md:h-px md:ml-[0] ml-[22px] md:w-full w-px" />
                          <Img
                            className="h-6 ml-5 md:ml-[0] md:mt-0 mt-[15px] w-6"
                            src="images/img_solareyebold.svg"
                            alt="solareyebold"
                          />
                        </div>
                      </div>
                      <Line className="self-center h-px bg-white-A700_59 w-full" />
                      <div className="bg-blue-300 flex flex-1 flex-col items-center justify-end my-0 p-[7px] w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[91%] md:w-full">
                          <Button className="bg-white-A700 cursor-pointer font-semibold h-[30px] leading-[normal] md:mt-0 my-3 py-1.5 rounded-[3px] text-blue-A200 text-center text-sm w-[29px]">
                            05
                          </Button>
                          <Text
                            className="leading-[150.00%] md:ml-[0] ml-[19px] text-base text-white-A700 w-[49%] sm:w-full"
                            size="txtOutfitSemiBold16WhiteA700"
                          >
                            Agresion verbal en Ens. Ozama por Emily Dorson
                          </Text>
                          <div className="flex flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[90px] w-[18%] md:w-full">
                            <Line className="bg-blue-A100 h-[54px] w-px" />
                            <Text
                              className="text-base text-white-A700"
                              size="txtOutfitSemiBold16WhiteA700"
                            >
                              View Media
                            </Text>
                          </div>
                          <Line className="bg-blue-A100 h-[54px] md:h-px md:ml-[0] ml-[22px] md:w-full w-px" />
                          <Img
                            className="h-6 ml-5 md:ml-[0] md:mt-0 mt-[15px] w-6"
                            src="images/img_solareyebold.svg"
                            alt="solareyebold"
                          />
                        </div>
                      </div>
                      <Line className="self-center h-px bg-white-A700_59 w-full" />
                      <div className="flex md:flex-1 flex-col items-center justify-start ml-[37px] mr-[41px] my-0 w-[89%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Text
                            className="bg-white-A700 h-[30px] justify-center md:mt-0 my-3 p-[5px] rounded-[3px] text-blue-A200 text-sm w-[29px]"
                            size="txtOutfitSemiBold14"
                          >
                            06
                          </Text>
                          <Text
                            className="sm:flex-1 leading-[150.00%] md:ml-[0] ml-[19px] text-base text-white-A700 w-[49%] sm:w-full"
                            size="txtOutfitSemiBold16WhiteA700"
                          >
                            Rebase imprudente en Naco por Joan Perez
                          </Text>
                          <div className="flex md:flex-1 flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[90px] w-[18%] md:w-full">
                            <Line className="bg-blue-A100 h-[54px] w-px" />
                            <Text
                              className="text-base text-white-A700"
                              size="txtOutfitSemiBold16WhiteA700"
                            >
                              View Media
                            </Text>
                          </div>
                          <Line className="bg-blue-A100 h-[54px] md:h-px md:ml-[0] ml-[22px] md:w-full w-px" />
                          <Img
                            className="h-6 ml-5 md:ml-[0] md:mt-0 mt-[15px] w-6"
                            src="images/img_solareyebold.svg"
                            alt="solareyebold"
                          />
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="h-[369px] md:h-[636px] sm:h-[895px] mt-[11px] relative w-full">
                  <div className="absolute bg-white-A700 border border-black-900_19 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] rounded-[10px] w-full">
                    <div className="flex flex-col gap-[35px] items-start justify-start mt-[13px] w-[98%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-[41%] md:w-full">
                        <div className="flex flex-row gap-[19px] items-start justify-start w-full">
                          <Img
                            className="h-8 w-8"
                            src="images/img_fluentvehiclecar16filled_blue_a200_01.svg"
                            alt="fluentvehicleca_One"
                          />
                          <Text
                            className="mt-1 text-gray-900 text-xl"
                            size="txtOutfitSemiBold20Gray900"
                          >
                            Most reported vehicles
                          </Text>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[7px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-gray-50 flex flex-1 flex-col gap-[9px] items-start justify-center p-[9px] rounded-[10px] w-full">
                          <Img
                            className="h-[169px] md:h-auto object-cover rounded-[10px] w-full"
                            src="images/img_rectangle18.png"
                            alt="rectangleEighteen"
                          />
                          <div className="flex flex-col gap-1.5 items-start justify-start mb-[11px]">
                            <Text
                              className="text-base text-black-900"
                              size="txtOutfitRegular16Black900"
                            >
                              Ford Assesin 101+
                            </Text>
                            <Text
                              className="text-blue-A200 text-sm"
                              size="txtOutfitRegular14BlueA200"
                            >
                              View Reports
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-50 flex flex-1 flex-col gap-[11px] items-start justify-start p-[9px] rounded-[10px] w-full">
                          <Img
                            className="h-[169px] md:h-auto object-cover rounded-[10px] w-full"
                            src="images/img_rectangle18_169x188.png"
                            alt="rectangleEighteen"
                          />
                          <div className="flex flex-col items-start justify-start mb-[11px]">
                            <Text
                              className="text-base text-black-900"
                              size="txtOutfitRegular16Black900"
                            >
                              Bugati Curra{" "}
                            </Text>
                            <Text
                              className="mt-1 text-blue-A200 text-sm"
                              size="txtOutfitRegular14BlueA200"
                            >
                              View Reports
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-50 flex flex-1 flex-col gap-[9px] items-start justify-center p-[9px] rounded-[10px] w-full">
                          <Img
                            className="h-[169px] md:h-auto object-cover rounded-[10px] w-full"
                            src="images/img_rectangle18_1.png"
                            alt="rectangleEighteen"
                          />
                          <div className="flex flex-col gap-1.5 items-start justify-start mb-[11px]">
                            <Text
                              className="text-base text-black-900"
                              size="txtOutfitRegular16Black900"
                            >
                              Ferrari I01
                            </Text>
                            <Text
                              className="text-blue-A200 text-sm"
                              size="txtOutfitRegular14BlueA200"
                            >
                              View Reports
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <Line className="absolute bg-black-900_19 h-px inset-x-[0] mx-auto top-[21%] w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-[11px] items-center justify-start w-[45%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-end rounded-[10px] w-full">
                    <div className="flex flex-col items-center justify-start mb-[9px] mt-[18px] w-full">
                      <div className="flex flex-row items-end justify-between w-[92%] md:w-full">
                        <div className="flex flex-row gap-[11px] items-center justify-start">
                          <Button className="bg-white-A700 flex h-[42px] items-center justify-center p-[5px] w-[42px]">
                            <Img src="images/img_cut.svg" alt="cut" />
                          </Button>
                          <Text
                            className="text-gray-900 text-xl"
                            size="txtOutfitSemiBold20Gray900"
                          >
                            Most reported drivers
                          </Text>
                        </div>
                        <Img
                          className="h-7 mb-[5px] mt-[9px] w-2"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                      <Line className="bg-black-900_19 h-px mt-[11px] w-full" />
                      <div className="h-[270px] md:h-[304px] sm:h-[829px] mt-[21px] relative w-[96%] sm:w-full">
                        <div className="absolute h-[270px] md:h-[283px] sm:h-[808px] inset-[0] justify-center m-auto w-[98%] sm:w-full">
                          <Text
                            className="ml-auto mr-[59px] mt-[105px] text-[7.88px] text-red-A700"
                            size="txtOutfitRegular788"
                          >
                            Risk : 98
                          </Text>
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="sm:gap-5 gap-[47px] grid sm:grid-cols-1 grid-cols-3 justify-center min-h-[auto] w-full">
                                <div className="bg-white-A700 flex flex-1 flex-col gap-[5px] items-center justify-end p-[5px] rounded-[5px] w-full">
                                  <Img
                                    className="h-[52px] md:h-auto mt-2 rounded-[50%] w-[52px]"
                                    src="images/img_ellipse5.png"
                                    alt="ellipseFive"
                                  />
                                  <div className="flex flex-col gap-[11px] items-start justify-start w-[54%] md:w-full">
                                    <div className="flex flex-col items-center justify-start ml-1 md:ml-[0]">
                                      <Text
                                        className="text-[9px] text-black-900"
                                        size="txtOutfitSemiBold9"
                                      >
                                        Drake Samzie
                                      </Text>
                                      <Text
                                        className="text-[7.88px] text-black-900"
                                        size="txtOutfitRegular788Black900"
                                      >
                                        License: 505X889B
                                      </Text>
                                    </div>
                                    <div className="h-[18px] relative w-[95%]">
                                      <Text
                                        className="mb-[-1.38px] ml-auto mr-[17px] text-[7.88px] text-red-A700 z-[1]"
                                        size="txtOutfitRegular788"
                                      >
                                        Risk : 98
                                      </Text>
                                      <Text
                                        className="mt-auto mx-auto text-[7.88px] text-black-900"
                                        size="txtOutfitRegular788Black900"
                                      >
                                        Times reported : 56
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white-A700 flex flex-1 flex-col gap-[5px] items-center justify-end p-[5px] rounded-[5px] w-full">
                                  <Img
                                    className="h-[52px] md:h-auto mt-2 rounded-[50%] w-[52px]"
                                    src="images/img_ellipse5.png"
                                    alt="ellipseSeven"
                                  />
                                  <div className="flex flex-col gap-[11px] items-start justify-start w-[54%] md:w-full">
                                    <div className="flex flex-col items-center justify-start ml-1 md:ml-[0]">
                                      <Text
                                        className="text-[9px] text-black-900"
                                        size="txtOutfitSemiBold9"
                                      >
                                        Drake Samzie
                                      </Text>
                                      <Text
                                        className="text-[7.88px] text-black-900"
                                        size="txtOutfitRegular788Black900"
                                      >
                                        License: 505X889B
                                      </Text>
                                    </div>
                                    <div className="h-[18px] relative w-[95%]">
                                      <Text
                                        className="mb-[-1.38px] ml-auto mr-4 text-[7.88px] text-red-A700 z-[1]"
                                        size="txtOutfitRegular788"
                                      >
                                        Risk : 98
                                      </Text>
                                      <Text
                                        className="mt-auto mx-auto text-[7.88px] text-black-900"
                                        size="txtOutfitRegular788Black900"
                                      >
                                        Times reported : 76
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white-A700 flex flex-1 flex-col gap-[5px] items-center justify-end p-[5px] rounded-[5px] w-full">
                                  <Img
                                    className="h-[52px] md:h-auto mt-2 rounded-[50%] w-[52px]"
                                    src="images/img_ellipse5.png"
                                    alt="ellipseNine"
                                  />
                                  <div className="flex flex-col gap-[19px] items-start justify-start w-[54%] md:w-full">
                                    <div className="flex flex-col items-center justify-start ml-1 md:ml-[0]">
                                      <Text
                                        className="text-[9px] text-black-900"
                                        size="txtOutfitSemiBold9"
                                      >
                                        Drake Samzie
                                      </Text>
                                      <Text
                                        className="text-[7.88px] text-black-900"
                                        size="txtOutfitRegular788Black900"
                                      >
                                        License: 505X889B
                                      </Text>
                                    </div>
                                    <Text
                                      className="text-[7.88px] text-black-900"
                                      size="txtOutfitRegular788Black900"
                                    >
                                      Times reported : 56
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-white-A700 flex flex-1 flex-col gap-[5px] items-center justify-end p-[5px] rounded-[5px] w-full">
                                  <Img
                                    className="h-[52px] md:h-auto mt-2 rounded-[50%] w-[52px]"
                                    src="images/img_ellipse5.png"
                                    alt="ellipseSix"
                                  />
                                  <div className="flex flex-col gap-[11px] items-start justify-start w-[54%] md:w-full">
                                    <div className="flex flex-col items-center justify-start ml-1 md:ml-[0]">
                                      <Text
                                        className="text-[9px] text-black-900"
                                        size="txtOutfitSemiBold9"
                                      >
                                        Drake Samzie
                                      </Text>
                                      <Text
                                        className="text-[7.88px] text-black-900"
                                        size="txtOutfitRegular788Black900"
                                      >
                                        License: 505X889B
                                      </Text>
                                    </div>
                                    <div className="h-[18px] relative w-[95%]">
                                      <Text
                                        className="mb-[-1.38px] ml-auto mr-[17px] text-[7.88px] text-red-A700 z-[1]"
                                        size="txtOutfitRegular788"
                                      >
                                        Risk : 98
                                      </Text>
                                      <Text
                                        className="mt-auto mx-auto text-[7.88px] text-black-900"
                                        size="txtOutfitRegular788Black900"
                                      >
                                        Times reported : 56
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white-A700 flex flex-1 flex-col gap-[5px] items-center justify-end p-[5px] rounded-[5px] w-full">
                                  <Img
                                    className="h-[52px] md:h-auto mt-2 rounded-[50%] w-[52px]"
                                    src="images/img_ellipse5.png"
                                    alt="ellipseEight"
                                  />
                                  <div className="flex flex-col gap-[11px] items-start justify-start w-[54%] md:w-full">
                                    <div className="flex flex-col items-center justify-start ml-1 md:ml-[0]">
                                      <Text
                                        className="text-[9px] text-black-900"
                                        size="txtOutfitSemiBold9"
                                      >
                                        Drake Samzie
                                      </Text>
                                      <Text
                                        className="text-[7.88px] text-black-900"
                                        size="txtOutfitRegular788Black900"
                                      >
                                        License: 505X889B
                                      </Text>
                                    </div>
                                    <div className="h-[18px] relative w-[95%]">
                                      <Text
                                        className="mb-[-1.38px] ml-auto mr-[17px] text-[7.88px] text-red-A700 z-[1]"
                                        size="txtOutfitRegular788"
                                      >
                                        Risk : 98
                                      </Text>
                                      <Text
                                        className="mt-auto mx-auto text-[7.88px] text-black-900"
                                        size="txtOutfitRegular788Black900"
                                      >
                                        Times reported : 56
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white-A700 flex flex-1 flex-col gap-[5px] items-center justify-end p-[5px] rounded-[5px] w-full">
                                  <Img
                                    className="h-[52px] md:h-auto mt-2 rounded-[50%] w-[52px]"
                                    src="images/img_ellipse5.png"
                                    alt="ellipseTen"
                                  />
                                  <div className="flex flex-col gap-[11px] items-start justify-start w-[54%] md:w-full">
                                    <div className="flex flex-col items-center justify-start ml-1 md:ml-[0]">
                                      <Text
                                        className="text-[9px] text-black-900"
                                        size="txtOutfitSemiBold9"
                                      >
                                        Drake Samzie
                                      </Text>
                                      <Text
                                        className="text-[7.88px] text-black-900"
                                        size="txtOutfitRegular788Black900"
                                      >
                                        License: 505X889B
                                      </Text>
                                    </div>
                                    <div className="h-[18px] relative w-[95%]">
                                      <Text
                                        className="mb-[-1.38px] ml-auto mr-[17px] text-[7.88px] text-red-A700 z-[1]"
                                        size="txtOutfitRegular788"
                                      >
                                        Risk : 98
                                      </Text>
                                      <Text
                                        className="mt-auto mx-auto text-[7.88px] text-black-900"
                                        size="txtOutfitRegular788Black900"
                                      >
                                        Times reported : 56
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="absolute bg-black-900_19 h-px left-[0] top-1/4 w-[22%]" />
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[637px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_rectangle11.png"
                  alt="rectangleEleven"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DahboardPage;
