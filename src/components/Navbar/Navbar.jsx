import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { Img, Input, Text } from "components";
import AuthContext from "utils/Reducers/AuthReducer";
import { CloseSVG } from "assets//images";

const Navbar = () => {
  const [groupthreevalue, setGroupthreevalue] = useState("");
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="bg-white-A700 border-b border-black-900_19 border-solid flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
      <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
        <header className="header">
          <div className="user_info">
            <Img
              className="h-[53px] md:h-auto rounded-[50%] w-[53px]"
              src="/images/img_ellipse1.png"
              alt="ellipseOne"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-base text-gray-900"
                size="txtOutfitSemiBold16"
              >
                {currentUser?.data?.username}
              </Text>
              <Text
                className="mt-0.5 text-gray-600 text-sm"
                size="txtOutfitRegular14"
              >
                User ID: {currentUser?.data?.id}
              </Text>
            </div>
          </div>
          <div className="searching">
            <Input
              name="groupThree"
              placeholder="Search anything here"
              value={groupthreevalue}
              onChange={(e) => setGroupthreevalue(e)}
              className="leading-[normal] p-0 placeholder:text-blue_gray-900_a5 sm:px-5 search_inp text-blue_gray-900_a5 text-left text-xs w-full"
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
                    src="/images/img_search_blue_gray_900.svg"
                    alt="search"
                  />
                )
              }
            ></Input>
            <div className="bg-blue-300 flex flex-col items-center justify-start p-4 rounded-[10px]">
              <Img
                className="h-6 w-6"
                src="/images/img_solarbellbold.svg"
                alt="solarbellbold"
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
