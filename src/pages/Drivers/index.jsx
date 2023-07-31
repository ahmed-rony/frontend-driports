/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Button, Img, Line, List, Text } from "components";
import AuthContext from "utils/Reducers/AuthReducer";
import { newRequest } from "utils/newRequest";
import { useMutation, useQuery, useQueryClient } from "react-query";
import DriverContext from "utils/Reducers/DriverReducer";
import "./Drivers.scss";

const DriversPage = () => {
  const { currentUser } = useContext(AuthContext);
  const token = currentUser ? currentUser?.data?.token : null;
  const { state, dispatch } = useContext(DriverContext);
  const [err, setErr] = useState(null)

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const header = {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };

  const props = {
    query: {},
    options: {
      select: ["field 1", "field 2"],
      collation: "",
      sort: "",
      populate: "",
      projection: "",
      lean: false,
      leanWithId: true,
      offset: 0,
      page: 1,
      limit: 10,
      pagination: true,
      useEstimatedCount: false,
      useCustomCountFn: false,
      forceCountFn: false,
      read: {},
      options: {},
    },
    isCountOnly: false,
  };

  const {
    isLoading: driversLoading,
    error: driversError,
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
  console.log(driversList)

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (driver) => {
      return newRequest.post(`/client/api/v1/drivers/create`, driver, header);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["driversList"]);
    },
  });

  const handleSubmit = async (e) => {
    try {
      if(state.name && state.licenseNumber && state.driverId){
        await mutation.mutateAsync(state);
        
      }else{
        setErr("Fields are empty")
        e.preventDefault();
      }
    } catch (error) {
      e.preventDefault();
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-outfit items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between w-[97%] md:w-full">
              <div className="flex flex-col gap-[11px] items-start justify-start w-[62%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[66%] md:w-full">
                  <Button className="bg-blue-A200 cursor-pointer font-semibold leading-[normal] min-w-[135px] py-2 rounded-[5px] text-base text-center text-white-A700">
                    Best Drivers
                  </Button>
                  <Button className="border border-black-900_33 border-solid cursor-pointer leading-[normal] min-w-[179px] ml-1 sm:ml-[0] py-2 rounded-[5px] text-base text-center text-gray-900_ce">
                    Dangerous Drivers
                  </Button>
                  <Button className="border border-black-900_33 border-solid cursor-pointer leading-[normal] min-w-[199px] ml-1 sm:ml-[0] py-2 rounded-[5px] text-base text-center text-gray-900_ce">
                    Driver more reported
                  </Button>
                </div>
                <Text
                  className="text-base text-gray-900"
                  size="txtOutfitRegular16Gray900"
                >
                  {driversList?.data?.paginator?.itemCount} Results found
                </Text>
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {driversLoading
                    ? "Loading"
                    : driversError
                    ? "Something weent wrong"
                    : driversList?.data?.data.map((driver) => (
                        <div
                          key={driver?.id}
                          className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-full"
                        >
                          <div className="flex flex-col gap-[7px] items-center justify-start my-[15px] w-full">
                            <Img
                              className="h-[94px] md:h-auto rounded-[50%] w-[94px]"
                              src="images/img_ellipse5_94x94.png"
                              alt="ellipseFive"
                            />
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-base text-black-900"
                                size="txtOutfitSemiBold16Black900"
                              >
                                {driver?.name}
                              </Text>
                              <Text
                                className="mt-0.5 text-black-900 text-sm"
                                size="txtOutfitRegular14Black900"
                              >
                                License: {driver?.licenseNumber}
                              </Text>
                            </div>
                            <Line className="bg-black-900_19 h-px w-full" />
                            <Text
                              className="text-blue-A200 text-sm"
                              size="txtOutfitRegular14BlueA200"
                            >
                              Risk : {driver?.riskMatrix}
                            </Text>
                          </div>
                        </div>
                      ))}
                </div>
              </div>
              <div className="flex flex-col gap-[11px] items-center justify-start md:mt-0 mt-[5px] w-[37%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[140px] items-center justify-start p-4 w-full"
                  style={{ backgroundImage: "url('images/img_group108.svg')" }}
                >
                  <div className="drivers_header">
                    <Img
                      className="h-[107px]"
                      src="images/img_healthiconstru.svg"
                      alt="healthiconstru"
                    />
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOutfitSemiBold16WhiteA700"
                      >
                        Total Drivers
                      </Text>
                      <Text
                        className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700"
                        size="txtOutfitSemiBold42"
                      >
                        {driversList?.data?.paginator?.itemCount}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start pr-2 py-2 rounded-[10px] w-full">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-start mb-[26px] mt-3 w-full"
                  >
                    <Text
                      className="md:ml-[0] ml-[190px] text-gray-900 text-lg"
                      size="txtOutfitSemiBold18Gray900"
                    >
                      Add Driver
                    </Text>
                    <Line className="bg-black-900_19 h-px mr-[15px] mt-[18px] w-[97%]" />
                    <div className="flex flex-col items-center justify-start ml-5 md:ml-[0] mt-[35px] w-[93%] md:w-full">
                      <div className="flex flex-col gap-[11px] justify-start w-full">
                        <input
                          name="name"
                          placeholder="Name"
                          className="leading-[normal] p-0 placeholder:text-blue_gray-900_7f sm:pr-5 text-base text-blue_gray-900_7f text-left w-full"
                          wrapClassName="border-b border-black-900_19 mt-[26px] pb-3 pl-5 pr-[35px] w-full"
                          style={{ padding: "10px 0" }}
                          onChange={handleChange}
                        />
                        <Line className="bg-black-900_19 h-px w-full" />
                      </div>
                      <input
                        name="licenseNumber"
                        placeholder="License Number"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-900_7f sm:pr-5 text-base text-blue_gray-900_7f text-left w-full"
                        wrapClassName="border-b border-black-900_19 mt-[26px] pb-3 pl-5 pr-[35px] w-full"
                        style={{ padding: "10px 0" }}
                        onChange={handleChange}
                      />
                      <Line className="bg-black-900_19 h-px w-full" />
                      <input
                        name="driverId"
                        placeholder="Driver ID"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-900_7f sm:pr-5 text-base text-blue_gray-900_7f text-left w-full"
                        wrapClassName="border-b border-black-900_19 mt-[26px] pb-3 pl-5 pr-[35px] w-full"
                        style={{ padding: "10px 0" }}
                        onChange={handleChange}
                      />
                      <Line className="bg-black-900_19 h-px w-full" />
                      <div className="font-montserrat h-[52px] md:h-[58px] mt-[15px] relative w-full">
                        <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-end justify-end mx-auto p-[19px] rounded-[15px] shadow-bs top-[0] w-full">
                          <Img
                            className="h-[5px]"
                            src="images/img_chevron.svg"
                            alt="chevron"
                          />
                        </div>
                        <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[4%] pb-[23px] sm:pr-5 pr-[23px]">
                          <Text
                            className="text-[13px] text-gray-700"
                            size="txtMontserratRegular13"
                          >
                            Select Vehicle
                          </Text>
                        </div>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[34px] grid sm:grid-cols-1 grid-cols-3 justify-center md:ml-[0] ml-[13px] mt-8 w-[98%]"
                      orientation="horizontal"
                    >
                      <div className="border border-black-900_19 border-dashed flex flex-col items-center justify-start p-[39px] sm:px-5 rounded-[10px] w-full">
                        <Img
                          className="h-6 mb-0.5 w-6"
                          src="images/img_icbaselinephoto.svg"
                          alt="icbaselinephoto"
                        />
                      </div>
                      <div className="border border-black-900_19 border-dashed flex flex-col items-center justify-start p-10 sm:px-5 rounded-[10px] w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icbaselinephoto.svg"
                          alt="icbaselinephoto"
                        />
                      </div>
                      <div className="border border-black-900_19 border-dashed flex flex-col items-center justify-start p-10 sm:px-5 rounded-[10px] w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icbaselinephoto.svg"
                          alt="icbaselinephoto"
                        />
                      </div>
                    </List>
                    <div className="bg-blue_gray-100 cursor-pointer leading-[normal] min-w-[98px] md:ml-[0] ml-[31px] mr-[339px] mt-[17px] py-[7px] rounded-[15px] text-center text-gray-500 text-xs">
                      Add Image
                    </div>
                    <button
                      type="submit"
                      className="bg-gradient sub-btn"
                    >
                      Add Vehicle
                    </button>
                    {err && <small className="err">{err}</small>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriversPage;
