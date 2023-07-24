import React from "react";

import { Img, Text } from "components";

const ConversationMessageyou = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue-A200 flex flex-col gap-1 items-end justify-center px-3 py-1 rounded-[12px] w-auto">
          <Text
            className="text-base text-white-A700 w-auto"
            size="txtOutfitRegular16WhiteA700"
          >
            {props?.senddetails}
          </Text>
          <div className="flex flex-row gap-1 items-center justify-start w-auto">
            <Text
              className="text-white-A700 text-xs w-auto"
              size="txtInterRegular12WhiteA700"
            >
              {props?.time}
            </Text>
            <Img
              className="h-3.5 w-3.5"
              src="images/img_checkmark_white_a700.svg"
              alt="checkmark_Two"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ConversationMessageyou.defaultProps = {
  senddetails: "Send details",
  time: "18:16",
};

export default ConversationMessageyou;
