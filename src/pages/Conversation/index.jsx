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

  const [groupthreevalue, setGroupthreevalue] = React.useState("");
  const [searchonevalue, setSearchonevalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-outfit items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
          
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
