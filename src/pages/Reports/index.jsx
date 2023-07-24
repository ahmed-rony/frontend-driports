import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const ReportsPage = () => {
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
  const [groupthreevalue, setGroupthreevalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-outfit items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[99px] bg-blue-50 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col gap-[21px] items-center justify-start md:px-5 w-full">
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
            <div className="bg-blue-200 flex flex-col gap-[19px] justify-end py-[23px] rounded-[10px] w-[95%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[21px] items-end justify-start ml-8 md:ml-[0] mr-[1059px] mt-0.5 w-[15%] md:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_mdifilereport_white_a700.svg"
                  alt="mdifilereport_One"
                />
                <Text
                  className="md:mt-0 mt-[5px] text-white-A700 text-xl"
                  size="txtOutfitSemiBold20"
                >
                  List of reports
                </Text>
              </div>
              <List
                className="flex flex-col gap-1 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-blue-300 flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                    <Button className="bg-white-A700 cursor-pointer font-semibold h-[30px] leading-[normal] md:mt-0 my-3 py-1.5 rounded-[3px] text-blue-A200 text-center text-sm w-[29px]">
                      01
                    </Button>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-white-A700"
                      size="txtOutfitSemiBold16WhiteA700"
                    >
                      Alta velocidad en el Ens. Ozama por Cristian Bake
                    </Text>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[623px] w-[15%] md:w-full">
                      <div className="flex flex-row gap-[18px] items-center justify-start">
                        <Line className="bg-blue-A100 h-[54px] w-px" />
                        <Text
                          className="text-base text-white-A700"
                          size="txtOutfitSemiBold16WhiteA700"
                        >
                          View Media
                        </Text>
                      </div>
                      <Line className="bg-blue-A100 h-[54px] w-px" />
                      <Img
                        className="h-6 w-6"
                        src="images/img_solareyebold.svg"
                        alt="solareyebold"
                      />
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-white-A700_59 w-[54%]" />
                <div className="flex md:flex-1 flex-col items-center justify-start w-[95%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Button className="bg-white-A700 cursor-pointer font-semibold h-[30px] leading-[normal] md:mt-0 my-3 py-1.5 rounded-[3px] text-blue-A200 text-center text-sm w-[29px]">
                      02
                    </Button>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-white-A700"
                      size="txtOutfitSemiBold16WhiteA700"
                    >
                      Conduccion temeraria en Romana por Juan Olivo
                    </Text>
                    <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[629px] w-[15%] md:w-full">
                      <div className="flex flex-row gap-[18px] items-center justify-start">
                        <Line className="bg-blue-A100 h-[54px] w-px" />
                        <Text
                          className="text-base text-white-A700"
                          size="txtOutfitSemiBold16WhiteA700"
                        >
                          View Media
                        </Text>
                      </div>
                      <Line className="bg-blue-A100 h-[54px] w-px" />
                      <Img
                        className="h-6 w-6"
                        src="images/img_solareyebold.svg"
                        alt="solareyebold"
                      />
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-white-A700_59 w-[54%]" />
                <div className="bg-blue-300 flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                    <Button className="bg-white-A700 cursor-pointer font-semibold h-[30px] leading-[normal] md:mt-0 my-3 py-1.5 rounded-[3px] text-blue-A200 text-center text-sm w-[29px]">
                      03
                    </Button>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-white-A700"
                      size="txtOutfitSemiBold16WhiteA700"
                    >
                      Violencia en Piantini por Joan Quezada
                    </Text>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[699px] w-[15%] md:w-full">
                      <div className="flex flex-row gap-[18px] items-center justify-start">
                        <Line className="bg-blue-A100 h-[54px] w-px" />
                        <Text
                          className="text-base text-white-A700"
                          size="txtOutfitSemiBold16WhiteA700"
                        >
                          View Media
                        </Text>
                      </div>
                      <Line className="bg-blue-A100 h-[54px] w-px" />
                      <Img
                        className="h-6 w-6"
                        src="images/img_solareyebold.svg"
                        alt="solareyebold"
                      />
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-white-A700_59 w-[54%]" />
                <div className="flex md:flex-1 flex-col items-center justify-start w-[95%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="bg-white-A700 h-[30px] justify-center md:mt-0 my-3 p-[5px] rounded-[3px] text-blue-A200 text-sm w-[29px]"
                      size="txtOutfitSemiBold14"
                    >
                      04
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-white-A700"
                      size="txtOutfitSemiBold16WhiteA700"
                    >
                      Rebase imprudente en Naco por Joan Perez
                    </Text>
                    <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[669px] w-[15%] md:w-full">
                      <div className="flex flex-row gap-[18px] items-center justify-start">
                        <Line className="bg-blue-A100 h-[54px] w-px" />
                        <Text
                          className="text-base text-white-A700"
                          size="txtOutfitSemiBold16WhiteA700"
                        >
                          View Media
                        </Text>
                      </div>
                      <Line className="bg-blue-A100 h-[54px] w-px" />
                      <Img
                        className="h-6 w-6"
                        src="images/img_solareyebold.svg"
                        alt="solareyebold"
                      />
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-white-A700_59 w-[54%]" />
                <div className="bg-blue-300 flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                    <Button className="bg-white-A700 cursor-pointer font-semibold h-[30px] leading-[normal] md:mt-0 my-3 py-1.5 rounded-[3px] text-blue-A200 text-center text-sm w-[29px]">
                      05
                    </Button>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-white-A700"
                      size="txtOutfitSemiBold16WhiteA700"
                    >
                      Agresion verbal en Ens. Ozama por Emily Dorson
                    </Text>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[630px] w-[15%] md:w-full">
                      <div className="flex flex-row gap-[18px] items-center justify-start">
                        <Line className="bg-blue-A100 h-[54px] w-px" />
                        <Text
                          className="text-base text-white-A700"
                          size="txtOutfitSemiBold16WhiteA700"
                        >
                          View Media
                        </Text>
                      </div>
                      <Line className="bg-blue-A100 h-[54px] w-px" />
                      <Img
                        className="h-6 w-6"
                        src="images/img_solareyebold.svg"
                        alt="solareyebold"
                      />
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-white-A700_59 w-[54%]" />
                <div className="flex md:flex-1 flex-col items-center justify-start w-[95%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="bg-white-A700 h-[30px] justify-center md:mt-0 my-3 p-[5px] rounded-[3px] text-blue-A200 text-sm w-[29px]"
                      size="txtOutfitSemiBold14"
                    >
                      06
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-white-A700"
                      size="txtOutfitSemiBold16WhiteA700"
                    >
                      Violencia en Piantini por Joan Quezada
                    </Text>
                    <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[699px] w-[15%] md:w-full">
                      <div className="flex flex-row gap-[18px] items-center justify-start">
                        <Line className="bg-blue-A100 h-[54px] w-px" />
                        <Text
                          className="text-base text-white-A700"
                          size="txtOutfitSemiBold16WhiteA700"
                        >
                          View Media
                        </Text>
                      </div>
                      <Line className="bg-blue-A100 h-[54px] w-px" />
                      <Img
                        className="h-6 w-6"
                        src="images/img_solareyebold.svg"
                        alt="solareyebold"
                      />
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-white-A700_59 w-[54%]" />
                <div className="bg-blue-300 flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                    <Button className="bg-white-A700 cursor-pointer font-semibold h-[30px] leading-[normal] md:mt-0 my-3 py-1.5 rounded-[3px] text-blue-A200 text-center text-sm w-[29px]">
                      07
                    </Button>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-white-A700"
                      size="txtOutfitSemiBold16WhiteA700"
                    >
                      Conduccion temeraria en Romana por Juan Olivo
                    </Text>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[629px] w-[15%] md:w-full">
                      <div className="flex flex-row gap-[18px] items-center justify-start">
                        <Line className="bg-blue-A100 h-[54px] w-px" />
                        <Text
                          className="text-base text-white-A700"
                          size="txtOutfitSemiBold16WhiteA700"
                        >
                          View Media
                        </Text>
                      </div>
                      <Line className="bg-blue-A100 h-[54px] w-px" />
                      <Img
                        className="h-6 w-6"
                        src="images/img_solareyebold.svg"
                        alt="solareyebold"
                      />
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-white-A700_59 w-[54%]" />
                <div className="flex md:flex-1 flex-col items-center justify-start w-[95%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="bg-white-A700 h-[30px] justify-center md:mt-0 my-3 p-[5px] rounded-[3px] text-blue-A200 text-sm w-[29px]"
                      size="txtOutfitSemiBold14"
                    >
                      08
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-white-A700"
                      size="txtOutfitSemiBold16WhiteA700"
                    >
                      Alta velocidad en el Ens. Ozama por Cristian Bake
                    </Text>
                    <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[623px] w-[15%] md:w-full">
                      <div className="flex flex-row gap-[18px] items-center justify-start">
                        <Line className="bg-blue-A100 h-[54px] w-px" />
                        <Text
                          className="text-base text-white-A700"
                          size="txtOutfitSemiBold16WhiteA700"
                        >
                          View Media
                        </Text>
                      </div>
                      <Line className="bg-blue-A100 h-[54px] w-px" />
                      <Img
                        className="h-6 w-6"
                        src="images/img_solareyebold.svg"
                        alt="solareyebold"
                      />
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-white-A700_59 w-[54%]" />
                <div className="bg-blue-300 flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                    <Text
                      className="bg-white-A700 h-[30px] justify-center md:mt-0 my-3 p-[5px] rounded-[3px] text-blue-A200 text-sm w-[29px]"
                      size="txtOutfitSemiBold14"
                    >
                      09
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-white-A700"
                      size="txtOutfitSemiBold16WhiteA700"
                    >
                      Violencia en Piantini por Pedro Alcantara
                    </Text>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[685px] w-[15%] md:w-full">
                      <div className="flex flex-row gap-[18px] items-center justify-start">
                        <Line className="bg-blue-A100 h-[54px] w-px" />
                        <Text
                          className="text-base text-white-A700"
                          size="txtOutfitSemiBold16WhiteA700"
                        >
                          View Media
                        </Text>
                      </div>
                      <Line className="bg-blue-A100 h-[54px] w-px" />
                      <Img
                        className="h-6 w-6"
                        src="images/img_solareyebold.svg"
                        alt="solareyebold"
                      />
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-white-A700_59 w-[54%]" />
                <div className="flex md:flex-1 flex-col items-center justify-start w-[95%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Button className="bg-white-A700 cursor-pointer font-semibold h-[30px] leading-[normal] md:mt-0 my-3 py-1.5 rounded-[3px] text-blue-A200 text-center text-sm w-[29px]">
                      10
                    </Button>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-white-A700"
                      size="txtOutfitSemiBold16WhiteA700"
                    >
                      Violencia en Piantini por Joan Quezada
                    </Text>
                    <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[699px] w-[15%] md:w-full">
                      <div className="flex flex-row gap-[18px] items-center justify-start">
                        <Line className="bg-blue-A100 h-[54px] w-px" />
                        <Text
                          className="text-base text-white-A700"
                          size="txtOutfitSemiBold16WhiteA700"
                        >
                          View Media
                        </Text>
                      </div>
                      <Line className="bg-blue-A100 h-[54px] w-px" />
                      <Img
                        className="h-6 w-6"
                        src="images/img_solareyebold.svg"
                        alt="solareyebold"
                      />
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-white-A700_59 w-[54%]" />
                <div className="bg-blue-300 flex flex-1 flex-col items-center justify-end p-[7px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                    <Button className="bg-white-A700 cursor-pointer font-semibold h-[30px] leading-[normal] md:mt-0 my-3 py-1.5 rounded-[3px] text-blue-A200 text-center text-sm w-[29px]">
                      11
                    </Button>
                    <Text
                      className="md:ml-[0] ml-[19px] text-base text-white-A700"
                      size="txtOutfitSemiBold16WhiteA700"
                    >
                      Conduccion temeraria en Romana por Juan Olivo
                    </Text>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[629px] w-[15%] md:w-full">
                      <div className="flex flex-row gap-[18px] items-center justify-start">
                        <Line className="bg-blue-A100 h-[54px] w-px" />
                        <Text
                          className="text-base text-white-A700"
                          size="txtOutfitSemiBold16WhiteA700"
                        >
                          View Media
                        </Text>
                      </div>
                      <Line className="bg-blue-A100 h-[54px] w-px" />
                      <Img
                        className="h-6 w-6"
                        src="images/img_solareyebold.svg"
                        alt="solareyebold"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsPage;
