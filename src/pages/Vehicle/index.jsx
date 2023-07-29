/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";
import AuthContext from "utils/Reducers/AuthReducer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { newRequest } from "utils/newRequest";
import VehicleContext from "utils/Reducers/VehicleReducer";

const VehiclePage = () => {
  const { currentUser } = useContext(AuthContext);
  const token = currentUser ? currentUser?.data?.token : null;
  const { state, dispatch } = useContext(VehicleContext);

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
    isLoading: vehiclesLoading,
    error: vehiclesError,
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

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (vehicle) => {
      return newRequest.post(`/client/api/v1/vehicles/create`, vehicle, header);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["vehiclesList"]);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(state);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-outfit items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex flex-1 flex-col gap-[19px] items-center justify-start md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-3.5 justify-start w-[97%] md:w-full">
              <div
                style={{ marginTop: "10px" }}
                className="flex flex-col items-center justify-start w-[63%] md:w-full"
              >
                <div className="gap-3.5 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {vehiclesLoading
                    ? "Loading"
                    : vehiclesError
                    ? "Something weent wrong"
                    : vehiclesList?.data?.data.map((vehicle) => (
                        <div
                          key={vehicle?.id}
                          className="bg-white-A700 flex flex-1 flex-col gap-[15px] items-start justify-start p-2.5 rounded-[10px] w-full"
                        >
                          <Img
                            className="h-[203px] md:h-auto md:ml-[0] ml-[3px] object-cover rounded-[10px] w-[98%] sm:w-full"
                            src="images/img_rectangle18_169x188.png"
                            alt="rectangleEighteen"
                          />
                          <div className="flex flex-col gap-1.5 items-start justify-start mb-2.5 md:ml-[0] ml-[3px]">
                            <Text
                              className="text-base text-black-900"
                              size="txtOutfitSemiBold16Black900"
                            >
                              {vehicle?.brand}
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
                </div>
              </div>

              <div
                style={{ marginTop: "20px" }}
                className="flex flex-col gap-[11px] items-center justify-start w-[37%] md:w-full"
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[140px] items-center justify-start p-3 w-full"
                  style={{ backgroundImage: "url('images/img_group108.svg')" }}
                >
                  <div className="flex flex-row gap-[23px] items-center justify-center w-[53%] md:w-full">
                    <Img
                      className="h-[115px] w-[115px]"
                      src="images/img_fluentvehiclecar16filled_white_a700.svg"
                      alt="fluentvehicleca_One"
                    />
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <Text
                        className="text-base text-white-A700"
                        size="txtOutfitSemiBold16WhiteA700"
                      >
                        Total Vehicles
                      </Text>
                      <Text
                        className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700"
                        size="txtOutfitSemiBold42"
                      >
                        {vehiclesList?.data?.paginator?.itemCount ?? 0}
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
                      Add Vehicle
                    </Text>
                    <Line className="bg-black-900_19 h-px mr-[15px] mt-[18px] w-[97%]" />
                    <div className="flex flex-col items-center justify-start ml-5 md:ml-[0] mt-[34px] w-[93%] md:w-full">
                      <div className="flex flex-col gap-[11px] justify-start w-full">
                        <input
                          name="vin"
                          onChange={handleChange}
                          placeholder="VIN"
                          className="leading-[normal] p-0 placeholder:text-blue_gray-900_7f sm:pr-5 text-base text-blue_gray-900_7f text-left w-full"
                          wrapClassName="border-b border-black-900_19 mt-[26px] pb-3 pl-5 pr-[35px] w-full"
                        />
                        <Line className="bg-black-900_19 h-px w-full" />
                      </div>
                      <input
                        name="brand"
                        placeholder="Brand"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-900_7f sm:pr-5 text-base text-blue_gray-900_7f text-left w-full"
                        wrapClassName="border-b border-black-900_19 mt-[26px] pb-3 pl-5 pr-[35px] w-full"
                        style={{ padding: "10px 0" }}
                        onChange={handleChange}
                      />
                      <Line className="bg-black-900_19 h-px w-full" />
                      <input
                        name="model"
                        placeholder="Model"
                        style={{ padding: "10px 0" }}
                        className="leading-[normal] p-0 placeholder:text-blue_gray-900_7f sm:pr-5 text-base text-blue_gray-900_7f text-left w-full"
                        wrapClassName="border-b border-black-900_19 mt-[26px] pb-[13px] pl-5 pr-[35px] w-full"
                        onChange={handleChange}
                      />
                      <Line className="bg-black-900_19 h-px w-full" />
                      <input
                        name="color"
                        placeholder="Color"
                        style={{ padding: "10px 0" }}
                        className="leading-[normal] p-0 placeholder:text-blue_gray-900_7f sm:pr-5 text-base text-blue_gray-900_7f text-left w-full"
                        wrapClassName="border-b border-black-900_19 mt-[26px] pb-[13px] pl-5 pr-[35px] w-full"
                        onChange={handleChange}
                      />
                      <Line className="bg-black-900_19 h-px w-full" />
                      <input
                        name="plate"
                        placeholder="Plate"
                        style={{ padding: "10px 0" }}
                        className="leading-[normal] p-0 placeholder:text-blue_gray-900_7f sm:pr-5 text-base text-blue_gray-900_7f text-left w-full"
                        wrapClassName="border-b border-black-900_19 mt-[26px] pb-[13px] pl-5 pr-[35px] w-full"
                        onChange={handleChange}
                      />
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
                            Select Driver
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
                    <Button className="bg-blue_gray-100 cursor-pointer leading-[normal] min-w-[98px] md:ml-[0] ml-[31px] mr-[339px] mt-[17px] py-[7px] rounded-[15px] text-center text-gray-500 text-xs">
                      Add Image
                    </Button>
                    <button
                      type="submit"
                      className="bg-gradient  cursor-pointer leading-[normal] min-w-[134px] md:ml-[0] ml-[171px] mt-[9px] py-3.5 rounded-[10px] text-center text-lg text-white-A700"
                    >
                      Add Vehicle
                    </button>
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

export default VehiclePage;
