import React from "react";

import { Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ConversationLeftsidebar = (props) => {
  const [searchonevalue, setSearchonevalue] = React.useState("");

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 h-14 md:h-auto items-center justify-start px-4 py-2 w-full">
          <Img className="h-10 w-10" src="images/img_menu.svg" alt="menu" />
          <Input
            name="search_One"
            placeholder="Search"
            value={searchonevalue}
            onChange={(e) => setSearchonevalue(e)}
            className="font-inter p-0 placeholder:text-blue_gray-500 sm:pr-5 text-base text-blue_gray-500 text-left w-full"
            wrapClassName="bg-gray-100_01 flex pl-4 pr-[35px] py-2 rounded-[20px] w-[84%]"
            prefix={
              <Img
                className="cursor-pointer h-6 mr-4 my-auto"
                src="images/img_search.svg"
                alt="search"
              />
            }
            suffix={
              <CloseSVG
                fillColor="#707991"
                className="cursor-pointer h-6 my-auto"
                onClick={() => setSearchonevalue("")}
                style={{
                  visibility:
                    searchonevalue?.length <= 0 ? "hidden" : "visible",
                }}
                height={24}
                width={24}
                viewBox="0 0 24 24"
              />
            }
          ></Input>
        </div>
        <div className="flex flex-col h-full items-start justify-start w-full">
          <List
            className="flex flex-col gap-px items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-row gap-4 h-[72px] md:h-auto items-center justify-start px-4 py-3 w-full">
              <div className="bg-indigo-200 h-12 rounded-[50%] w-12"></div>
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-start w-full">
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <Text
                      className="text-base text-gray-900_01 w-auto"
                      size="txtOutfitSemiBold16Gray90001"
                    >
                      {props?.anonymous}
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    {props?.time}
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    {props?.chatgramwebwas}
                  </Text>
                  <Text
                    className="bg-blue-A100 flex h-[18px] items-center justify-center rounded-[50%] text-center text-white-A700 text-xs w-[18px]"
                    size="txtInterRegular12WhiteA700"
                  >
                    {props?.newmessage}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-4 h-[72px] md:h-auto items-center justify-start px-4 py-3 w-full">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_avatar.png"
                alt="avatar"
              />
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="flex-1 text-base text-gray-900_01 w-auto"
                    size="txtOutfitSemiBold16Gray90001"
                  >
                    {props?.jessicadrew}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    {props?.time1}
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtOutfitRegular14Bluegray500"
                  >
                    {props?.okseeyoulater}
                  </Text>
                  <Text
                    className="bg-blue-A100 flex h-[18px] items-center justify-center rounded-[50%] text-center text-white-A700 text-xs w-[18px]"
                    size="txtInterRegular12WhiteA700"
                  >
                    {props?.newmessage1}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-100_01 flex flex-1 flex-row gap-4 h-[72px] md:h-auto items-center justify-start px-4 py-3 w-full">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_avatar_48x48.png"
                alt="avatar"
              />
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="flex-1 text-base text-gray-900_01 w-auto"
                    size="txtOutfitSemiBold16Gray90001"
                  >
                    {props?.davidmoore}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    {props?.time2}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtOutfitRegular14Bluegray500"
                  >
                    {props?.language}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-4 h-[72px] md:h-auto items-center justify-start px-4 py-3 w-full">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_avatar_1.png"
                alt="avatar"
              />
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="flex-1 text-base text-gray-900_01 w-auto"
                    size="txtOutfitSemiBold16Gray90001"
                  >
                    {props?.gregjames}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    {props?.time3}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtOutfitRegular14Bluegray500"
                  >
                    {props?.igotajobatspace}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-4 h-[72px] md:h-auto items-center justify-start px-4 py-3 w-full">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_avatar_2.png"
                alt="avatar"
              />
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="flex-1 text-base text-gray-900_01 w-auto"
                    size="txtOutfitSemiBold16Gray90001"
                  >
                    {props?.emilydorson}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    {props?.time4}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtOutfitRegular14Bluegray500"
                  >
                    {props?.tableforfour}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-4 h-[72px] md:h-auto items-center justify-start px-4 py-3 w-full">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_avatar_3.png"
                alt="avatar"
              />
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="flex-1 text-base text-gray-900_01 w-auto"
                    size="txtOutfitSemiBold16Gray90001"
                  >
                    {props?.language1}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    {props?.time5}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtOutfitRegular14Bluegray500"
                  >
                    {props?.languageOne}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-4 h-[72px] md:h-auto items-center justify-start px-4 py-3 w-full">
              <Text
                className="bg-green-300 flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 w-12"
                size="txtInterSemiBold16"
              >
                {props?.avatar}
              </Text>
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="flex-1 text-base text-gray-900_01 w-auto"
                    size="txtOutfitSemiBold16Gray90001"
                  >
                    {props?.announcements}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    {props?.time6}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtOutfitRegular14Bluegray500"
                  >
                    {props?.channelcreated}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-4 h-[72px] md:h-auto items-center justify-start px-4 py-3 w-full">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_avatar_4.png"
                alt="avatar"
              />
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="flex-1 text-base text-gray-900_01 w-auto"
                    size="txtOutfitSemiBold16Gray90001"
                  >
                    {props?.littlesister}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    {props?.wed}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtOutfitRegular14Bluegray500"
                  >
                    {props?.tellmomiwill}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-4 h-[72px] md:h-auto items-center justify-start px-4 py-3 w-full">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_avatar_7.png"
                alt="avatar"
              />
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="flex-1 text-base text-gray-900_01 w-auto"
                    size="txtOutfitSemiBold16Gray90001"
                  >
                    {props?.artclass2}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    {props?.tue2}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtOutfitRegular14Bluegray500"
                  >
                    {props?.editorial2}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-4 h-[72px] md:h-auto items-center justify-start px-4 py-3 w-full">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_avatar_7.png"
                alt="avatar"
              />
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="flex-1 text-base text-gray-900_01 w-auto"
                    size="txtOutfitSemiBold16Gray90001"
                  >
                    {props?.artclass2}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    {props?.tue2}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtOutfitRegular14Bluegray500"
                  >
                    {props?.editorial2}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-4 h-[72px] md:h-auto items-center justify-start px-4 py-3 w-full">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_avatar_7.png"
                alt="avatar"
              />
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="flex-1 text-base text-gray-900_01 w-auto"
                    size="txtOutfitSemiBold16Gray90001"
                  >
                    {props?.artclass2}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs w-auto"
                    size="txtInterRegular12"
                  >
                    {props?.tue2}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtOutfitRegular14Bluegray500"
                  >
                    {props?.editorial2}
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

ConversationLeftsidebar.defaultProps = {
  anonymous: "Anonymous",
  time: "19:48",
  chatgramwebwas: "Chatgram Web was updated.",
  newmessage: "1",
  jessicadrew: "Jessica Drew",
  time1: "18:30",
  okseeyoulater: "Ok, let’s do it later",
  newmessage1: "2",
  davidmoore: "David Moore",
  time2: "18:16",
  language: "You: I have to talk about a ",
  gregjames: "Greg James",
  time3: "18:02",
  igotajobatspace: "Let’s make a report of it",
  emilydorson: "Emily Dorson",
  time4: "17:42",
  tableforfour: "Okay, thanks",
  language1: " Maze",
  time5: "17:08",
  languageOne: " All done  ",
  avatar: "A",
  announcements: "Announcements",
  time6: "16:15",
  channelcreated: "Report created",
  littlesister: "Little Sister",
  wed: "Wed",
  tellmomiwill: "Indeed it will be a great thing",
  artclass: "Amilie",
  tue: "Tue",
  editorial: "Editorial",
  artclass1: "Amilie",
  tue1: "Tue",
  editorial1: "Editorial",
  artclass2: "Amilie",
  tue2: "Tue",
  editorial2: "Editorial",
};

export default ConversationLeftsidebar;
