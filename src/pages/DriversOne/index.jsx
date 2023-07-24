import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const DriversOnePage = () => {
  const sideBarMenu = [
    {
      label: (
        <Img
          className="h-8 w-8"
          src="images/img_materialsymbolsdashboard_blue_100_01.svg"
          alt="materialsymbols"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-8 w-8"
          src="images/img_mdifilereport_blue_100_01.svg"
          alt="mdifilereport"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-[42px] text-blue-100_01 w-[42px]"
          src="images/img_healthiconstruckdriver_blue_a200.svg"
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
      <div className="bg-gray-50 flex flex-col font-outfit items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[99px] bg-blue-50 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
            <div className="bg-white-A700 border-b border-black-900_19 border-solid flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-between w-[15%] md:w-full">
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
                  <div className="flex md:flex-1 md:flex-col flex-row gap-4 items-center justify-between w-[61%] md:w-full">
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
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between w-[97%] md:w-full">
              <div className="flex flex-col gap-[11px] items-start justify-start w-[62%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[66%] md:w-full">
                  <Button className="bg-blue-A200 cursor-pointer font-semibold leading-[normal] min-w-[135px] py-2 rounded-[5px] text-base text-center text-white-A700">
                    Best Drivers
                  </Button>
                  <Button className="border border-black-900_33 border-solid cursor-pointer leading-[normal] min-w-[179px] ml-1 sm:ml-[0] py-2 rounded-[5px] text-base text-center text-gray-900_ce">
                    Dangerous Drivers
                  </Button>
                  <Button className="border border-black-900_33 border-solid cursor-pointer leading-[normal] min-w-[199px] ml-1 sm:ml-[0] py-2 rounded-[5px] text-base text-center text-gray-900_ce">
                    Driver more reported
                  </Button>
                </div>
                <Text
                  className="text-base text-gray-900"
                  size="txtOutfitRegular16Gray900"
                >
                  60Results found
                </Text>
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start my-[15px] w-full">
                      <Img
                        className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse5_94x94.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtOutfitSemiBold16Black900"
                        >
                          Drake Samzie
                        </Text>
                        <Text
                          className="mt-0.5 text-black-900 text-sm"
                          size="txtOutfitRegular14Black900"
                        >
                          License: 505X889B
                        </Text>
                      </div>
                      <Line className="bg-black-900_19 h-px w-full" />
                      <Text
                        className="text-blue-A200 text-sm"
                        size="txtOutfitRegular14BlueA200"
                      >
                        Risk : 65
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start my-[15px] w-full">
                      <Img
                        className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse5_1.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtOutfitSemiBold16Black900"
                        >
                          Drake Samzie
                        </Text>
                        <Text
                          className="mt-0.5 text-black-900 text-sm"
                          size="txtOutfitRegular14Black900"
                        >
                          License: 505X889B
                        </Text>
                      </div>
                      <Line className="bg-black-900_19 h-px w-full" />
                      <Text
                        className="text-red-A700 text-sm"
                        size="txtOutfitRegular14RedA700"
                      >
                        Risk : 96
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start my-[15px] w-full">
                      <Img
                        className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse5_2.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtOutfitSemiBold16Black900"
                        >
                          Drake Samzie
                        </Text>
                        <Text
                          className="mt-0.5 text-black-900 text-sm"
                          size="txtOutfitRegular14Black900"
                        >
                          License: 505X889B
                        </Text>
                      </div>
                      <Line className="bg-black-900_19 h-px w-full" />
                      <Text
                        className="text-red-A700 text-sm"
                        size="txtOutfitRegular14RedA700"
                      >
                        Risk : 98
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start my-[15px] w-full">
                      <Img
                        className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse5_3.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtOutfitSemiBold16Black900"
                        >
                          Drake Samzie
                        </Text>
                        <Text
                          className="mt-0.5 text-black-900 text-sm"
                          size="txtOutfitRegular14Black900"
                        >
                          License: 505X889B
                        </Text>
                      </div>
                      <Line className="bg-black-900_19 h-px w-full" />
                      <Text
                        className="text-blue-A200 text-sm"
                        size="txtOutfitRegular14BlueA200"
                      >
                        Risk : 40
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start my-[15px] w-full">
                      <Img
                        className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse5_4.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtOutfitSemiBold16Black900"
                        >
                          Drake Samzie
                        </Text>
                        <Text
                          className="mt-0.5 text-black-900 text-sm"
                          size="txtOutfitRegular14Black900"
                        >
                          License: 505X889B
                        </Text>
                      </div>
                      <Line className="bg-black-900_19 h-px w-full" />
                      <Text
                        className="text-blue-A200 text-sm"
                        size="txtOutfitRegular14BlueA200"
                      >
                        Risk : 42
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start my-[15px] w-full">
                      <Img
                        className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse5_5.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtOutfitSemiBold16Black900"
                        >
                          Drake Samzie
                        </Text>
                        <Text
                          className="mt-0.5 text-black-900 text-sm"
                          size="txtOutfitRegular14Black900"
                        >
                          License: 505X889B
                        </Text>
                      </div>
                      <Line className="bg-black-900_19 h-px w-full" />
                      <Text
                        className="text-red-A700 text-sm"
                        size="txtOutfitRegular14RedA700"
                      >
                        Risk : 92
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start my-[15px] w-full">
                      <Img
                        className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse5_6.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtOutfitSemiBold16Black900"
                        >
                          Drake Samzie
                        </Text>
                        <Text
                          className="mt-0.5 text-black-900 text-sm"
                          size="txtOutfitRegular14Black900"
                        >
                          License: 505X889B
                        </Text>
                      </div>
                      <Line className="bg-black-900_19 h-px w-full" />
                      <Text
                        className="text-red-A700 text-sm"
                        size="txtOutfitRegular14RedA700"
                      >
                        Risk : 96
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start my-[15px] w-full">
                      <Img
                        className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse5_7.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtOutfitSemiBold16Black900"
                        >
                          Drake Samzie
                        </Text>
                        <Text
                          className="mt-0.5 text-black-900 text-sm"
                          size="txtOutfitRegular14Black900"
                        >
                          License: 505X889B
                        </Text>
                      </div>
                      <Line className="bg-black-900_19 h-px w-full" />
                      <Text
                        className="text-red-A700 text-sm"
                        size="txtOutfitRegular14RedA700"
                      >
                        Risk : 99
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start my-[15px] w-full">
                      <Img
                        className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse5_8.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtOutfitSemiBold16Black900"
                        >
                          Drake Samzie
                        </Text>
                        <Text
                          className="mt-0.5 text-black-900 text-sm"
                          size="txtOutfitRegular14Black900"
                        >
                          License: 505X889B
                        </Text>
                      </div>
                      <Line className="bg-black-900_19 h-px w-full" />
                      <Text
                        className="text-blue-A200 text-sm"
                        size="txtOutfitRegular14BlueA200"
                      >
                        Risk : 15
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-2 items-center justify-start my-[15px] w-full">
                      <Img
                        className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse5_9.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtOutfitSemiBold16Black900"
                        >
                          Drake Samzie
                        </Text>
                        <Text
                          className="mt-[3px] text-black-900 text-sm"
                          size="txtOutfitRegular14Black900"
                        >
                          Driver ID : 505889B
                        </Text>
                      </div>
                      <Line className="bg-black-900_19 h-px w-full" />
                      <Text
                        className="text-blue-A200 text-sm"
                        size="txtOutfitRegular14BlueA200"
                      >
                        Make Conversation
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-2 items-center justify-start my-[15px] w-full">
                      <Img
                        className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse5_10.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtOutfitSemiBold16Black900"
                        >
                          Drake Samzie
                        </Text>
                        <Text
                          className="mt-[3px] text-black-900 text-sm"
                          size="txtOutfitRegular14Black900"
                        >
                          Driver ID : 505889B
                        </Text>
                      </div>
                      <Line className="bg-black-900_19 h-px w-full" />
                      <Text
                        className="text-blue-A200 text-sm"
                        size="txtOutfitRegular14BlueA200"
                      >
                        Make Conversation
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-2 items-center justify-start my-[15px] w-full">
                      <Img
                        className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                        src="images/img_ellipse5_11.png"
                        alt="ellipseFive"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtOutfitSemiBold16Black900"
                        >
                          Drake Samzie
                        </Text>
                        <Text
                          className="mt-[3px] text-black-900 text-sm"
                          size="txtOutfitRegular14Black900"
                        >
                          Driver ID : 505889B
                        </Text>
                      </div>
                      <Line className="bg-black-900_19 h-px w-full" />
                      <Text
                        className="text-blue-A200 text-sm"
                        size="txtOutfitRegular14BlueA200"
                      >
                        Make Conversation
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[11px] items-center justify-start md:mt-0 mt-[5px] w-[37%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[140px] items-center justify-start p-4 w-full"
                  style={{ backgroundImage: "url('images/img_group108.svg')" }}
                >
                  <div className="flex flex-row gap-[21px] items-center justify-center w-[51%] md:w-full">
                    <Img
                      className="h-[107px]"
                      src="images/img_healthiconstru.svg"
                      alt="healthiconstru"
                    />
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOutfitSemiBold16WhiteA700"
                      >
                        Total Drivers
                      </Text>
                      <Text
                        className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700"
                        size="txtOutfitSemiBold42"
                      >
                        996
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start pr-2 py-2 rounded-[10px] w-full">
                  <div className="flex flex-col justify-start mb-[26px] mt-3 w-full">
                    <Text
                      className="md:ml-[0] ml-[190px] text-gray-900 text-lg"
                      size="txtOutfitSemiBold18Gray900"
                    >
                      Add Driver
                    </Text>
                    <Line className="bg-black-900_19 h-px mr-[15px] mt-[18px] w-[97%]" />
                    <div className="flex flex-col items-center justify-start ml-5 md:ml-[0] mt-[35px] w-[93%] md:w-full">
                      <div className="flex flex-col gap-[11px] justify-start w-full">
                        <Text
                          className="ml-5 md:ml-[0] text-base text-blue_gray-900_7f"
                          size="txtOutfitRegular16Bluegray9007f"
                        >
                          Name
                        </Text>
                        <Line className="bg-black-900_19 h-px w-full" />
                      </div>
                      <Input
                        name="group103"
                        placeholder="Last Name"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-900_7f sm:pr-5 text-base text-blue_gray-900_7f text-left w-full"
                        wrapClassName="border-b border-black-900_19 mt-[26px] pb-[11px] pl-5 pr-[35px] w-full"
                        type="text"
                      ></Input>
                      <Input
                        name="group104"
                        placeholder="License Number"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-900_7f sm:pr-5 text-base text-blue_gray-900_7f text-left w-full"
                        wrapClassName="border-b border-black-900_19 mt-[26px] pb-[13px] pl-5 pr-[35px] w-full"
                        type="number"
                      ></Input>
                      <Input
                        name="group100"
                        placeholder="Expiration date"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-900_7f sm:pr-5 text-base text-blue_gray-900_7f text-left w-full"
                        wrapClassName="border-b border-black-900_19 mt-[27px] pb-3 pl-5 pr-[35px] w-full"
                      ></Input>
                      <Input
                        name="group101"
                        placeholder="Birth date"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-900_7f sm:pr-5 text-base text-blue_gray-900_7f text-left w-full"
                        wrapClassName="border-b border-black-900_19 mt-[26px] pb-[13px] pl-5 pr-[35px] w-full"
                      ></Input>
                      <div className="font-montserrat h-[52px] md:h-[58px] mt-[15px] relative w-full">
                        <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-end justify-end mx-auto p-[19px] rounded-[15px] shadow-bs top-[0] w-full">
                          <Img
                            className="h-[5px]"
                            src="images/img_chevron.svg"
                            alt="chevron"
                          />
                        </div>
                        <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[4%] pb-[23px] sm:pr-5 pr-[23px]">
                          <Text
                            className="text-[13px] text-gray-700"
                            size="txtMontserratRegular13"
                          >
                            Select Vehicle
                          </Text>
                        </div>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[34px] grid sm:grid-cols-1 grid-cols-3 justify-center md:ml-[0] ml-[13px] mt-8 w-[98%]"
                      orientation="horizontal"
                    >
                      <div className="border border-black-900_19 border-dashed flex flex-col items-center justify-start p-[39px] sm:px-5 rounded-[10px] w-full">
                        <Img
                          className="h-6 mb-0.5 w-6"
                          src="images/img_icbaselinephoto.svg"
                          alt="icbaselinephoto"
                        />
                      </div>
                      <div className="border border-black-900_19 border-dashed flex flex-col items-center justify-start p-10 sm:px-5 rounded-[10px] w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icbaselinephoto.svg"
                          alt="icbaselinephoto"
                        />
                      </div>
                      <div className="border border-black-900_19 border-dashed flex flex-col items-center justify-start p-10 sm:px-5 rounded-[10px] w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icbaselinephoto.svg"
                          alt="icbaselinephoto"
                        />
                      </div>
                    </List>
                    <Button className="bg-blue_gray-100 cursor-pointer leading-[normal] min-w-[98px] md:ml-[0] ml-[31px] mr-[339px] mt-[17px] py-[7px] rounded-[15px] text-center text-gray-500 text-xs">
                      Add Image
                    </Button>
                    <Button className="bg-gradient  cursor-pointer leading-[normal] min-w-[134px] md:ml-[0] ml-[171px] mt-[9px] py-3.5 rounded-[10px] text-center text-lg text-white-A700">
                      Add Vehicle
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriversOnePage;
