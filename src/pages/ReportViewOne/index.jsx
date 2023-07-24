import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import "react-circular-progressbar/dist/styles.css";

const ReportViewOnePage = () => {
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
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[99px] bg-blue-50 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start mb-7 md:ml-[0] ml-[13px] md:mt-0 mt-[9px] p-3.5 md:px-5 w-full">
          <div className="flex flex-col items-center justify-start my-1 w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <div className="bg-blue-300 flex flex-col items-center justify-end p-2.5 rounded-[5px] w-[8%]">
                <Img
                  className="h-4 w-4"
                  src="images/img_pajamasgoback.svg"
                  alt="pajamasgoback"
                />
              </div>
              <List
                className="sm:flex-col flex-row gap-[5px] grid grid-cols-2 w-[16%]"
                orientation="horizontal"
              >
                <div className="border border-blue-300 border-solid flex flex-col items-center justify-start sm:ml-[0] p-1.5 rounded-[5px] w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_materialsymbolsbookmark.svg"
                    alt="materialsymbols"
                  />
                </div>
                <div className="bg-blue-300 flex flex-col items-center justify-start sm:ml-[0] p-1.5 rounded-[5px] w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_mdishare.svg"
                    alt="mdishare"
                  />
                </div>
              </List>
            </div>
            <div className="h-[119px] mt-[18px] relative w-[84%] sm:w-full">
              <Text
                className="mb-[-0.01px] text-base text-blue-A200 z-[1]"
                size="txtOutfitSemiBold16BlueA200"
              >
                Report on
              </Text>
              <Text
                className="leading-[150.00%] mt-auto mx-auto text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
                size="txtOutfitSemiBold22"
              >
                <>
                  &#123;reportType&#125; in &#123;location&#125; of
                  &#123;driver&#125;
                  <br />
                  Alta velocidad en el Ens. Ozama por Cristian Bake
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[17px] w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <div className="flex flex-row gap-[72px] items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-600_03 text-lg w-auto"
                    size="txtOutfitMedium18Gray60003"
                  >
                    Media
                  </Text>
                  <Text
                    className="text-gray-600_03 text-lg w-auto"
                    size="txtOutfitSemiBold18Gray60003"
                  >
                    Vehicle Details
                  </Text>
                  <Text
                    className="text-blue-A200 text-lg w-auto"
                    size="txtOutfitMedium18BlueA200"
                  >
                    Driver Details
                  </Text>
                </div>
                <Line className="bg-blue-A200 h-0.5 w-[27%]" />
                <Line className="bg-black-900_19 h-px w-full" />
              </div>
            </div>
            <div className="h-[253px] md:h-[268px] sm:h-[417px] mt-[21px] relative w-[84%] sm:w-full">
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-[89%] md:w-full">
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitBold20"
                    >
                      Name
                    </Text>
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitRegular20"
                    >
                      Cristian Bake
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[18px] w-[88%] md:w-full">
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitBold20"
                    >
                      License number
                    </Text>
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitRegular20"
                    >
                      0019203992
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[19px] w-full">
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitBold20"
                    >
                      License expiration
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[143px] text-gray-600_02 text-xl"
                      size="txtOutfitRegular20"
                    >
                      7/19/2023
                    </Text>
                    <Text
                      className="ml-2.5 sm:ml-[0] sm:mt-0 mt-[5px] text-red-A700_01 text-sm"
                      size="txtOutfitRegular14RedA70001"
                    >
                      Expire soon
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-[19px] w-[70%] md:w-full">
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitBold20"
                    >
                      Number of reports
                    </Text>
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitRegular20"
                    >
                      24
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-[66px] items-center justify-start mt-[19px] w-[91%] md:w-full">
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitBold20"
                    >
                      Most reported imprudence
                    </Text>
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitRegular20"
                    >
                      High speeding
                    </Text>
                  </div>
                  <Text
                    className="mt-3.5 text-gray-600_02 text-xl"
                    size="txtOutfitBold20"
                  >
                    QR Sticker
                  </Text>
                </div>
              </div>
              <Button className="absolute bg-gradient  bottom-[0] cursor-pointer h-[29px] leading-[normal] py-2 right-[6%] rounded text-[8.82px] text-center text-white-A700 w-36">
                Request a new QR Sticker
              </Button>
            </div>
            <Text
              className="mt-[31px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtOutfitRegular30"
            >
              Risk Score
            </Text>
            <div className="flex flex-col font-nunito h-[135px] items-center justify-start mt-[26px] w-[135px]">
              <div className="h-[135px] relative w-[135px]">
                <div className="!w-[135px] border-solid h-[135px] m-auto overflow-visible">
                  <CircularProgressbar
                    className="!w-[135px] border-solid h-[135px] m-auto overflow-visible"
                    value={40}
                    strokeWidth={1}
                    styles={{
                      trail: { strokeWidth: 1, stroke: "" },
                      path: {
                        strokeLinecap: "square",
                        height: "100%",
                        transformOrigin: "center",
                        transform: "rotate(0deg)",
                      },
                    }}
                  ></CircularProgressbar>
                </div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto sm:text-[25.89px] md:text-[27.89px] text-[29.89px] text-light_green-A700_01 w-max"
                  size="txtNunitoBlack2989"
                >
                  42.6%
                </Text>
              </div>
            </div>
            <Text
              className="mt-[23px] text-blue_gray-900 text-center text-lg w-[93%] sm:w-full"
              size="txtOutfitRegular18"
            >
              Aca va un resumen comportamiento generada por IA. Quis ut
              elementum tortor vitae in. Sed ut nibh id integer turpis. Mus
              viverra dolor pulvinar rhoncus imperdiet quam amet nibh. Cursus
              sed nunc turpis posuere proin integer rat at iaculis bibendum
              nulla sit et. Et tellus vel lacus feugiat at consectetur
              ullamcorper.
            </Text>
            <Button className="bg-gradient  cursor-pointer leading-[normal] min-w-[253px] mt-4 py-3.5 rounded-[10px] text-center text-lg text-white-A700">
              See reports with this driver
            </Button>
          </div>
        </div>
        <div className="flex-1 h-[1024px] ml-3.5 md:ml-[0] md:px-5 relative w-full">
          <Img
            className="h-[1024px] m-auto object-cover w-full"
            src="images/img_rectangle16.png"
            alt="rectangleSixteen"
          />
          <div className="absolute bg-blue_gray-100_63 border border-black-900_19 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-[214px] md:px-10 sm:px-5 w-full">
            <Img
              className="h-24 mb-[182px] mt-[318px]"
              src="images/img_group39.svg"
              alt="groupThirtyNine"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportViewOnePage;
