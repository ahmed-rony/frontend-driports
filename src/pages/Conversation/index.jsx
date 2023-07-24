import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";
import ConversationColumnihavetotalkabouOne from "components/ConversationColumnihavetotalkabouOne";
import ConversationLeftsidebar from "components/ConversationLeftsidebar";
import ConversationMessageyou from "components/ConversationMessageyou";
import ConversationMessageyou2 from "components/ConversationMessageyou2";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const ConversationPage = () => {
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
          className="h-[42px] w-[42px]"
          src="images/img_healthiconstruckdriver_blue_100_01.svg"
          alt="healthiconstruc"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-8 w-8"
          src="images/img_fluentvehiclecar16filled_blue_100_01.svg"
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
          className="h-8 text-blue-100_01 w-8"
          src="images/img_typcnmessages_blue_a200.svg"
          alt="typcnmessages"
        />
      ),
    },
  ];
  const [groupthreevalue, setGroupthreevalue] = React.useState("");
  const [searchonevalue, setSearchonevalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-outfit items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[99px] bg-blue-50 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
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
            <div className="flex flex-col font-inter items-center justify-start w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row gap-9 items-center justify-between w-full">
                <ConversationLeftsidebar className="bg-white-A700 border-gray-300_01 border-r border-solid flex flex-col gap-2 h-[923px] md:h-auto items-start justify-start w-[364px]" />
                <div className="flex md:flex-1 flex-col font-outfit md:gap-10 gap-[120px] justify-start w-[70%] md:w-full">
                  <div className="flex flex-row gap-[19px] items-center justify-start ml-3 md:ml-[0] w-[31%] md:w-full">
                    <Img
                      className="h-20 md:h-auto rounded-[50%] w-20"
                      src="images/img_avatar_80x80.png"
                      alt="avatar"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[64%]">
                      <div className="flex flex-col font-outfit items-center justify-start w-[97px]">
                        <Text
                          className="text-base text-gray-900_01 w-auto"
                          size="txtOutfitSemiBold16Gray90001"
                        >
                          David Moore
                        </Text>
                      </div>
                      <Button className="bg-indigo-500_99 cursor-pointer font-inter min-w-[173px] py-1.5 rounded-[12px] text-center text-white-A700 text-xs">
                        Generated from wahtsapp
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 h-[664px] md:h-auto items-center justify-end max-w-[905px] py-6 w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                      <Text
                        className="bg-indigo-500_99 justify-center pt-[5px] px-3 rounded-[12px] text-base text-white-A700 w-auto"
                        size="txtOutfitRegular16WhiteA700"
                      >
                        Generated from wahtsapp
                      </Text>
                    </div>
                    <ConversationColumnihavetotalkabouOne className="flex flex-col items-center justify-start w-full" />
                    <ConversationMessageyou2 className="flex flex-col items-center justify-end w-full" />
                    <ConversationMessageyou className="flex flex-col items-center justify-end w-full" />
                    <Input
                      name="inputbar"
                      placeholder="Message"
                      className="md:h-auto p-0 placeholder:text-blue_gray-500 sm:h-auto text-base text-blue_gray-500 text-left w-full"
                      wrapClassName="bg-white-A700 flex px-4 py-[15px] rounded-[10px] w-full"
                      prefix={
                        <Img
                          className="mt-auto mb-px h-6 mr-4"
                          src="images/img_emoji_icon.svg"
                          alt="Emoji Icon"
                        />
                      }
                      suffix={
                        <Img
                          className="mt-auto mb-px h-6 ml-[35px]"
                          src="images/img_send_icon.svg"
                          alt="Send Icon"
                        />
                      }
                    ></Input>
                    <Text
                      className="text-blue-A200 text-xs"
                      size="txtOutfitRegular12"
                    >
                      Generate Report
                    </Text>
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

export default ConversationPage;
