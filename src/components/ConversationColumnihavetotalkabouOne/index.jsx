import React from "react";

import { Img, Text } from "components";

const ConversationColumnihavetotalkabouOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col gap-1 items-end justify-center px-3 py-1 rounded-[12px] w-auto">
          <Text
            className="text-base text-gray-900_01 w-auto"
            size="txtOutfitRegular16Gray90001"
          >
            {props?.messagetext}
          </Text>
          <div className="flex flex-row gap-1 items-center justify-start w-auto">
            <Text
              className="text-gray-900_01 text-xs w-auto"
              size="txtInterRegular12Gray90001"
            >
              {props?.timetext}
            </Text>
            <Img
              className="h-3.5 w-3.5"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ConversationColumnihavetotalkabouOne.defaultProps = {
  messagetext: "I have to talk about a report that happened near my area",
  timetext: "18:12",
};

export default ConversationColumnihavetotalkabouOne;
