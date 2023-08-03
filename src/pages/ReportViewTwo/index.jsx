import React, { useContext } from "react";
import { Img, Input, Line, List, Text } from "components";
import AuthContext from "utils/Reducers/AuthReducer";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { newRequest } from "utils/newRequest";
import { Link } from "react-router-dom";
import Mapbox from "components/Mapbox/Mapbox";

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

  const getDateYear = () => {
    if (report?.data?.date) {
      const date = new Date(report.data.date);
      return date.getFullYear();
    }
    return null;
  };
  const lat =
    Array.isArray(report?.data?.location) &&
    typeof report?.data?.location[0]?.latitude === "number" &&
    !isNaN(report?.data?.location[0]?.latitude)
      ? report.data.location[0].latitude
      : 40.776676;

  const long =
    Array.isArray(report?.data?.location) &&
    typeof report?.data?.location[0]?.longitude === "number" &&
    !isNaN(report?.data?.location[0]?.longitude)
      ? report.data.location[0].longitude
      : -73.971321;

  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end mb-7 md:ml-[0] ml-[13px] md:mt-0 mt-[9px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mt-4 w-[96%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <Link to={`/reportview/${report?.data?.id}`} className="bg-blue-300 flex flex-col items-center justify-end p-2.5 rounded-[5px] w-[8%]">
                <Img
                  className="h-4 w-4"
                  src="/images/img_pajamasgoback.svg"
                  alt="pajamasgoback"
                />
              </Link>
              <List
                className="sm:flex-col flex-row gap-[5px] grid grid-cols-2 w-[16%]"
                orientation="horizontal"
              >
                <div className="border border-blue-300 border-solid flex flex-col items-center justify-start sm:ml-[0] p-1.5 rounded-[5px] w-full">
                  <Img
                    className="h-6 w-6"
                    src="/images/img_materialsymbolsbookmark.svg"
                    alt="materialsymbols"
                  />
                </div>
                <Link to={`/reportviewone/${report?.data?.id}`} className="bg-blue-300 flex flex-col items-center justify-start sm:ml-[0] p-1.5 rounded-[5px] w-full">
                  <Img
                    className="h-6 w-6"
                    src="/images/img_mdishare.svg"
                    alt="mdishare"
                  />
                </Link>
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
                  {report?.data?.description || "{ No Data }"} in {report?.data?.address || "{ No Data }"} of
                  {report?.data?.driverName || "{ No Data }"}
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
                      Report details
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
              <div className="w-full">
              <div className="report_details">
                <div className="item">
                  <span>Driver Name</span>
                  <p>{report?.data?.driverName || "{ No Data }"}</p>
                </div>
                <div className="item">
                  <span>Plate</span>
                  <p>{report?.data?.plate || "{ No Data }"}</p>
                </div>
                <div className="item">
                  <span>Brand</span>
                  <p>{report?.data?.brand || "{ No Data }"}</p>
                </div>
                <div className="item">
                  <span>Model</span>
                  <p>{report?.data?.model || "{ No Data }"}</p>
                </div>
                <div className="item">
                  <span>Year</span>
                  <p>{getDateYear || "{ No Data }"}</p>
                </div>
                <div className="item">
                  <span>VIN</span>
                  <p>{report?.data?.vin || "{ No Data }"}</p>
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
              src="/images/img_rectangle18_1.png"
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
          <Mapbox lat={lat} long={long} />
        </div>
      </div>
    </>
  );
};

export default ReportViewTwoPage;
