import React, { useContext } from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";
import AuthContext from "utils/Reducers/AuthReducer";
import { useQuery } from "react-query";
import { newRequest } from "utils/newRequest";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
import Mapbox from "components/Mapbox/Mapbox";

const DahboardPage = () => {
  const { currentUser } = useContext(AuthContext);
  const token = currentUser ? currentUser?.data?.token : null;

  const header = {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
  const where = {
    where: {
      isActive: true,
    },
  };
  // ===================  counts  ======================
  const {
    isLoading: reportLoading,
    error: reportError,
    data: reportCount,
  } = useQuery({
    queryKey: ["reportCount"],
    queryFn: async () =>
      await newRequest
        .post(`/client/api/v1/reports/count`, where, header)
        .then((res) => {
          return res.data;
        }),
  });

  const {
    isLoading: driverLoading,
    error: driverError,
    data: driverCount,
  } = useQuery({
    queryKey: ["reportCount"],
    queryFn: async () =>
      await newRequest
        .post(`/client/api/v1/drivers/count`, where, header)
        .then((res) => {
          return res.data;
        }),
  });

  const {
    isLoading: vehiclesLoading,
    error: vehiclesError,
    data: vehiclesCount,
  } = useQuery({
    queryKey: ["vehiclesCount"],
    queryFn: async () =>
      await newRequest
        .post(`/client/api/v1/vehicles/count`, where, header)
        .then((res) => {
          return res.data;
        }),
  });

  // ===================  infos  ======================
  const {
    isLoading: reportsListLoading,
    error: reportsListError,
    data: reportsList,
  } = useQuery({
    queryKey: ["reportsList"],
    queryFn: async () =>
      await newRequest
        .post(`/client/api/v1/reports/list`, {}, header)
        .then((res) => {
          return res.data;
        }),
  });
  // ===================  vehicles  ======================
  const {
    isLoading: vehiclesListLoading,
    error: vehiclesListError,
    data: vehiclesList,
  } = useQuery({
    queryKey: ["vehiclesList"],
    queryFn: async () =>
      await newRequest
        .post(`/client/api/v1/vehicles/list`, {}, header)
        .then((res) => {
          return res.data;
        }),
  });
  // ===================  drivers  ======================
  const {
    isLoading: driversListLoading,
    error: driversListError,
    data: driversList,
  } = useQuery({
    queryKey: ["driversList"],
    queryFn: async () =>
      await newRequest
        .post(`/client/api/v1/drivers/list`, {}, header)
        .then((res) => {
          return res.data;
        }),
  });

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-outfit items-center justify-start mx-auto w-full dashboard">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex flex-1 flex-col gap-[21px] items-center justify-start md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-[95%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[54%] md:w-full">
                <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-[98%] md:w-full">
                  <div className="counts">
                    <span>{reportCount?.data?.count ?? 0}</span>
                    <p>Total Number of Reports</p>
                  </div>
                  <div className="counts">
                    <span>{driverCount?.data?.count ?? 0}</span>
                    <p>Total Number of Drivers</p>
                  </div>
                  <div className="counts">
                    <span>{vehiclesCount?.data?.count ?? 0}</span>
                    <p>Total Number of Vehicles</p>
                  </div>
                </div>
                <div className="bg-blue-200 flex flex-col gap-[19px] justify-end mt-[21px] py-[13px] rounded-[10px] w-full">
                  <div className="info_header">
                    <Img
                      className="h-8 w-8"
                      src="images/img_mdifilereport_white_a700.svg"
                      alt="mdifilereport_One"
                    />
                    <h2>Recent reports</h2>
                  </div>
                  <div className="reports">
                    {reportsListLoading
                      ? "Loading"
                      : reportsListError
                      ? "Something went wrong"
                      : reportsList?.data?.data?.map((r, i) => (
                          <div
                            key={r?.id}
                            className={`${
                              i % 2 === 0
                                ? "bg-blue-300 report_item"
                                : "report_item"
                            }`}
                          >
                            <div className="repo_title">
                              <span>
                                {`${(i + 1).toString().padStart(2, "0")}`}
                              </span>
                              <p>{r?.description}</p>
                            </div>
                            <Link
                              to={`/reportview/${r?.id}`}
                              className="repo_link"
                            >
                              <span>View Media</span>
                              <img
                                src="images/img_solareyebold.svg"
                                alt="solareyebold"
                              />
                            </Link>
                          </div>
                        ))}
                  </div>
                </div>

                <div className="vehicles md:h-[636px] sm:h-[895px] mt-[11px] relative w-full">
                  <div className="absolute bg-white-A700 border border-black-900_19 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] rounded-[10px] w-full">
                    <div className="flex flex-col gap-[35px] items-start justify-start mt-[13px] w-[98%] md:w-full">
                      <div className="info_header vehicle_header">
                        <Img
                          className="h-8 w-8"
                          src="images/img_fluentvehiclecar16filled_blue_a200_01.svg"
                          alt="fluentvehicleca_One"
                        />
                        <h2>Most reported vehicles</h2>
                      </div>
                      <List
                        className="sm:flex-col vehicle_list flex-row gap-[7px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                        orientation="horizontal"
                      >
                        {vehiclesListLoading
                          ? "Loading"
                          : vehiclesListError
                          ? "Something went wrong"
                          : vehiclesList?.data?.data?.map((v) => (
                              <div
                                key={v?.id}
                                className="bg-gray-50 flex flex-1 flex-col gap-[9px] items-start justify-center p-[9px] rounded-[10px] w-full"
                              >
                                <Img
                                  className="h-[169px] md:h-auto object-cover rounded-[10px] w-full"
                                  src="images/img_rectangle18.png"
                                  alt="rectangleEighteen"
                                />
                                <div className="flex flex-col gap-1.5 items-start justify-start mb-[11px]">
                                  <Text
                                    className="text-base text-black-900"
                                    size="txtOutfitRegular16Black900"
                                  >
                                    {v?.brand}
                                  </Text>
                                  <Text
                                    className="text-blue-A200 text-sm"
                                    size="txtOutfitRegular14BlueA200"
                                  >
                                    View Reports
                                  </Text>
                                </div>
                              </div>
                            ))}
                      </List>
                    </div>
                  </div>
                  <Line className="absolute bg-black-900_19 h-px inset-x-[0] mx-auto top-[21%] w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-[11px] items-center justify-start w-[45%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-end rounded-[10px] w-full">
                    <div className="flex flex-col items-center justify-start mb-[9px] mt-[18px] w-full">
                      <div className="flex flex-row items-end justify-between w-[92%] md:w-full">
                        <div className="flex flex-row gap-[11px] items-center justify-start">
                          <Button className="bg-white-A700 flex h-[42px] items-center justify-center p-[5px] w-[42px]">
                            <Img src="images/img_cut.svg" alt="cut" />
                          </Button>
                          <Text
                            className="text-gray-900 text-xl"
                            size="txtOutfitSemiBold20Gray900"
                          >
                            Most reported drivers
                          </Text>
                        </div>
                        <Img
                          className="h-7 mb-[5px] mt-[9px] w-2"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                      <Line className="bg-black-900_19 h-px mt-[11px] w-full" />
                      <div className="drivers md:h-[304px] sm:h-[829px] mt-[21px] relative w-[96%] sm:w-full">
                        <div className="absolute h-[270px] md:h-[283px] sm:h-[808px] inset-[0] justify-center m-auto w-[98%] sm:w-full">
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="sm:gap-5 driver_list gap-[47px] grid sm:grid-cols-1 grid-cols-3 justify-center min-h-[auto] w-full">
                                {driversListLoading
                                  ? "Loading"
                                  : driversListError
                                  ? "Something went wrong"
                                  : driversList?.data?.data?.map((d) => (
                                      <div key={d?.id} className="driver_user">
                                        <Img
                                          className="h-[52px] md:h-auto mt-2 rounded-[50%] w-[52px]"
                                          src="images/img_ellipse5.png"
                                          alt="ellipseFive"
                                        />
                                        <div className="driver_info">
                                          <div className="flex flex-col items-center justify-start ml-1 md:ml-[0]">
                                            <Text
                                              className="text-[9px] text-black-900"
                                              size="txtOutfitSemiBold9"
                                            >
                                              {d?.name}
                                            </Text>
                                            <Text
                                              className="text-[7.88px] text-black-900"
                                              size="txtOutfitRegular788Black900"
                                            >
                                              License: {d?.licenseNumber}
                                            </Text>
                                          </div>
                                          <div className=" risk">
                                            <Text
                                              className=" text-[7.88px] text-red-A700"
                                              size="txtOutfitRegular788"
                                            >
                                              Risk : {d?.riskMatrix}
                                            </Text>
                                            <Text
                                              className=" text-[7.88px] text-black-900"
                                              size="txtOutfitRegular788Black900"
                                            >
                                              Times reported : 56
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard_map">
                  <Mapbox lat={48.858093} long={2.294694} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DahboardPage;
