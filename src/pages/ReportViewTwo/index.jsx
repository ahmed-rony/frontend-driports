import React, { useContext } from "react";
import { Img, Input, Line, List, Text } from "components";
import AuthContext from "utils/Reducers/AuthReducer";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { newRequest } from "utils/newRequest";
import { Link } from "react-router-dom";

const ReportViewTwoPage = () => {
  const { currentUser } = useContext(AuthContext);
  const token = currentUser ? currentUser?.data?.token : null;

  const reportId = useLocation().pathname.split("/")[2];

  const header = {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };

  const {
    isLoading: reportLoading,
    error: reportError,
    data: report,
  } = useQuery({
    queryKey: ["report"],
    queryFn: async () =>
      await newRequest
        .get(`/client/api/v1/reports/${reportId}`, header)
        .then((res) => {
          return res.data;
        }),
  });

  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-5 md:gap-5 items-start mx-auto w-full">
        
        <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end mb-7 md:ml-[0] ml-[13px] md:mt-0 mt-[9px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mt-4 w-[96%] md:w-full">
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
                  &#123;{report?.data?.description}&#125; in &#123;location&#125; of
                  &#123;{report?.data?.profileName}&#125;
                  <br />
                  Alta velocidad en el Ens. Ozama por {report?.data?.profileName}
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[17px] w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <div className="flex flex-row gap-[72px] items-start justify-start w-auto sm:w-full">
                <Link to={`/reportview/${report?.data?.id}`}>

                  <Text
                    className="text-gray-600_01 text-lg w-auto"
                    size="txtOutfitMedium18"
                    >
                    Media
                  </Text>
                    </Link>
                  <div className="flex flex-col">

                  <Text
                    className="text-blue-A200 text-lg w-auto"
                    size="txtOutfitSemiBold18"
                  >
                    Vehicle Details
                  </Text>
                  <Line className="bg-blue-A200 h-0.5 w-full" />
                  </div>
                  <Link to={`/reportviewone/${report?.data?.id}`}>

                  <Text
                    className="text-gray-600_01 text-lg w-auto"
                    size="txtOutfitMedium18"
                    >
                    Driver Details
                  </Text>
                    </Link>
                </div>
                <Line className="bg-black-900_19 h-px w-full" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[33px] mt-[19px] w-[89%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitBold20"
                    >
                      Driver Name
                    </Text>
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitRegular20"
                    >
                      {report?.data?.profileName}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[18px] w-[76%] md:w-full">
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitBold20"
                    >
                      Plate
                    </Text>
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitRegular20"
                    >
                      {report?.data?.plate}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[18px] w-[78%] md:w-full">
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitBold20"
                    >
                      Brand
                    </Text>
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitRegular20"
                    >
                      Daihatsu
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-5 w-[70%] md:w-full">
                    <Text
                      className="mb-0.5 text-gray-600_02 text-xl"
                      size="txtOutfitBold20"
                    >
                      Model
                    </Text>
                    <Text
                      className="mt-0.5 text-gray-600_02 text-xl"
                      size="txtOutfitRegular20"
                    >
                      Hijet
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-4 w-[71%] md:w-full">
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitBold20"
                    >
                      Year
                    </Text>
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitRegular20"
                    >
                      2002
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[17px] w-full">
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitBold20"
                    >
                      VIN
                    </Text>
                    <Text
                      className="text-gray-600_02 text-xl"
                      size="txtOutfitRegular20"
                    >
                      Awo1921lk12ma129301
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[258px] mt-[30px] text-gray-600_02 text-xl"
              size="txtOutfitBold20"
            >
              Image
            </Text>
            <Img
              className="h-[323px] sm:h-auto mt-3 object-cover rounded-[10px] w-full"
              src="images/img_rectangle18_1.png"
              alt="rectangleTwentyTwo"
            />
            <Input
              name="frameSeven"
              placeholder="StickerID : s9x1f"
              className="leading-[normal] md:text-[18.76px] p-0 placeholder:text-black-900 sm:px-5 sm:text-[16.76px] text-[20.76px] text-black-900 text-left w-full"
              wrapClassName="bg-gray-50 mt-[3px] pl-[29px] pr-[35px] py-[17px] rounded-[10px] w-full"
            ></Input>
          </div>
        </div>
        <div className="flex-1 h-[1024px] ml-3.5 md:ml-[0] md:px-5 relative w-full">
          <Img
            className="h-[1024px] m-auto object-cover w-full"
            src="images/img_rectangle16.png"
            alt="rectangleSixteen"
          />
          <div className="absolute bg-blue_gray-100_63 border border-black-900_19 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-44 md:px-10 sm:px-5 w-full">
            <Img
              className="h-[93px] mb-[207px] mt-[372px] w-[92px]"
              src="images/img_group39.svg"
              alt="groupThirtyNine"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportViewTwoPage;
