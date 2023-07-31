import React, { useContext } from "react";

import { Img, Line, List, Text } from "components";
import AuthContext from "utils/Reducers/AuthReducer";
import { useQuery } from "react-query";
import { newRequest } from "utils/newRequest";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ReportViewPage = () => {
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
        <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start mb-7 md:ml-[0] ml-[13px] md:mt-0 mt-[9px] p-[13px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mb-3.5 mt-[5px] w-full">
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
                  &#123;{report?.data?.description}&#125; in &#123;location&#125;
                  of &#123;{report?.data?.profileName}&#125;
                  <br />
                  Alta velocidad en el Ens. Ozama por {report?.data?.profileName}
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[17px] w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[72px] items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col">
                    <Text
                      className="text-blue-A200 text-lg w-auto"
                      size="txtOutfitMedium18BlueA200"
                    >
                      Report details
                    </Text>
                    <Line className="bg-blue-A200 h-0.5 w-full" />
                  </div>
                  <Link to={`/reportviewtwo/${report?.data?.id}`}>
                    <Text
                      className="text-gray-600_03 text-lg w-auto"
                      size="txtOutfitSemiBold18Gray60003"
                    >
                      Vehicle Details
                    </Text>
                  </Link>
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
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[41px] mt-[18px] w-[86%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
                  <Text
                    className="text-gray-600_02 text-xl"
                    size="txtOutfitBold20"
                  >
                    Reporter name
                  </Text>
                  <Text
                    className="text-gray-600_02 text-xl"
                    size="txtOutfitRegular20"
                  >
                    Jhon Wayne
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[18px] w-[83%] md:w-full">
                  <Text
                    className="text-gray-600_02 text-xl"
                    size="txtOutfitBold20"
                  >
                    Imprudence reported
                  </Text>
                  <Text
                    className="text-gray-600_02 text-xl"
                    size="txtOutfitRegular20"
                  >
                    High speed
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-4 w-full">
                  <Text
                    className="text-gray-600_02 text-xl"
                    size="txtOutfitBold20"
                  >
                    Location
                  </Text>
                  <Text
                    className="text-gray-600_02 text-xl"
                    size="txtOutfitRegular20"
                  >
                    {report?.data?.location}
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-5 w-[87%] md:w-full">
                  <Text
                    className="text-gray-600_02 text-xl"
                    size="txtOutfitBold20"
                  >
                    Driver name
                  </Text>
                  <Text
                    className="text-gray-600_02 text-xl"
                    size="txtOutfitRegular20"
                  >
                    {report?.data?.profileName}
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-[19px] w-[81%] md:w-full">
                  <Text
                    className="text-gray-600_02 text-xl"
                    size="txtOutfitBold20"
                  >
                    Vehicle plate
                  </Text>
                  <Text
                    className="text-gray-600_02 text-xl"
                    size="txtOutfitRegular20"
                  >
                    {report?.data?.plate}
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[166px] mt-[15px] text-gray-600_02 text-xl"
              size="txtOutfitBold20"
            >
              Reporter additional details
            </Text>
            <Text
              className="md:ml-[0] ml-[7px] mt-3 text-gray-600_02 text-xl w-[98%] sm:w-full"
              size="txtOutfitRegular20"
            >
              Lorem ipsum dolor sit amet consectetur. Volutpat platea sagittis
              semper elit fermentum et at amet. Semper id ullamcorper commodo
              nec. Varius nisi lectus egestas nunc enim massa risus egestas.
              Magnis in lobortis interdum ac ullamcorper nisi convallis diam
              ullamcorper. Nunc amet habitant sed tempor phasellus a faucibus
              elit.
            </Text>
            <Text
              className="md:ml-[0] ml-[246px] mt-[9px] text-gray-600_02 text-xl"
              size="txtOutfitRegular20"
            >
              Evidence:
            </Text>
            <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between mt-3 w-full">
              <Img
                className="h-[222px] md:h-auto object-cover rounded-[10px]"
                src="images/img_rectangle22.png"
                alt="rectangleTwentyTwo"
              />
              <Img
                className="h-[222px] md:h-auto object-cover rounded-[10px]"
                src="images/img_rectangle23.png"
                alt="rectangleTwentyThree"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 h-[1024px] ml-3.5 md:ml-[0] md:px-5 relative w-full">
          <Img
            className="h-[1024px] m-auto object-cover w-full"
            src="images/img_rectangle16.png"
            alt="rectangleSixteen"
          />
          <div className="absolute bg-blue_gray-100_63 border border-black-900_19 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-[212px] md:px-10 sm:px-5 w-full">
            <Img
              className="h-[104px] mb-[182px] mt-[314px]"
              src="images/img_group39.svg"
              alt="groupThirtyNine"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportViewPage;
