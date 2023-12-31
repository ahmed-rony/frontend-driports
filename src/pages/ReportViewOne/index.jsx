import React, { useContext } from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Button, Img, Line, List, Text } from "components";

import "react-circular-progressbar/dist/styles.css";
import AuthContext from "utils/Reducers/AuthReducer";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { newRequest } from "utils/newRequest";
import { Link } from "react-router-dom";
import Mapbox from "components/Mapbox/Mapbox";

const ReportViewOnePage = () => {
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
        <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start mb-7 md:ml-[0] ml-[13px] md:mt-0 mt-[9px] p-3.5 md:px-5 w-full">
          <div className="flex flex-col items-center justify-start my-1 w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <Link to={`/reportviewtwo/${report?.data?.id}`} className="bg-blue-300 flex flex-col items-center justify-end p-2.5 rounded-[5px] w-[8%]">
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
                <div className="bg-blue-300 flex flex-col items-center justify-start sm:ml-[0] p-1.5 rounded-[5px] w-full">
                  <Img
                    className="h-6 w-6"
                    src="/images/img_mdishare.svg"
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
                  {report?.data?.reportType || "{ No Data }"} in {report?.data?.address || "{ No Data }"} of
                  {report?.data?.driverName || "{ No Data }"}
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[17px] w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <div className="flex flex-row gap-[72px] items-start justify-start w-auto sm:w-full">
                  <Link to={`/reportview/${report?.data?.id}`}>
                    <Text
                      className="text-gray-600_03 text-lg w-auto"
                      size="txtOutfitMedium18Gray60003"
                    >
                      Report details
                    </Text>
                  </Link>
                  <Link to={`/reportviewtwo/${report?.data?.id}`}>
                    <Text
                      className="text-gray-600_03 text-lg w-auto"
                      size="txtOutfitSemiBold18Gray60003"
                    >
                      Vehicle Details
                    </Text>
                  </Link>
                  <div className="flex flex-col">
                    <Text
                      className="text-blue-A200 text-lg w-auto"
                      size="txtOutfitMedium18BlueA200"
                    >
                      Driver Details
                    </Text>
                    <Line className="bg-blue-A200 h-0.5 w-full" />
                  </div>
                </div>
                <Line className="bg-black-900_19 h-px w-full" />
              </div>
            </div>
            <div className="h-[253px] md:h-[268px] sm:h-[417px] mt-[21px] relative w-[84%] sm:w-full">
              <div className="h-max inset-[0]  m-auto w-full">
              <div className="report_details">
                <div className="item">
                  <span>Name</span>
                  <p>{report?.data?.driverName || "{ No Data }"}</p>
                </div>
                <div className="item">
                  <span>License number</span>
                  <p>{report?.data?.licenseNumber || "{ No Data }"}</p>
                </div>
                <div className="item">
                  <span>License expiration</span>
                  <p>{report?.data?.licenseExp || "{ No Data }"}</p>
                </div>
                <div className="item">
                  <span>Number of reports</span>
                  <p>{report?.data?.count || "{ No Data }"}</p>
                </div>
                <div className="item">
                  <span>Most reported imprudence</span>
                  <p>{report?.data?.mostReport || "{ No Data }"}</p>
                </div>
              </div>
                <div className="flex flex-col items-start justify-start w-full">
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
                    value={report?.data?.riskMatrix}
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
                  {report?.data?.riskMatrix}%
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
        <Mapbox lat={lat} long={long} />
        </div>
      </div>
    </>
  );
};

export default ReportViewOnePage;
