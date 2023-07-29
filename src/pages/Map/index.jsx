import React from "react";

import { Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const MapPage = () => {

  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-5 md:gap-5 items-start mx-auto w-full">
        
        <div className="flex-1 h-[1024px] md:px-5 relative w-full">
          <Img
            className="h-[1024px] m-auto object-cover w-full"
            src="images/img_rectangle16_1024x1341.png"
            alt="rectangleSixteen"
          />
          <div className="absolute flex flex-col gap-[51px] justify-start right-[4%] top-[4%] w-[86%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[420px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-blue-A200 flex flex-1 flex-col items-start justify-start p-[19px] rounded-[10px] w-full">
                  <Text
                    className="leading-[150.00%] mt-3 text-gray-50_02 text-xl w-[99%] sm:w-full"
                    size="txtOutfitSemiBold20Gray5002"
                  >
                    Violencia en Piantini por Joan Quezada
                  </Text>
                  <Text
                    className="mt-1.5 text-gray-300 text-sm"
                    size="txtOutfitRegular14Gray300"
                  >
                    12.05.2023
                  </Text>
                  <Text
                    className="mt-[27px] text-base text-white-A700"
                    size="txtOutfitRegular16WhiteA700"
                  >
                    View Repor
                  </Text>
                </div>
                <div className="bg-blue-A200 flex flex-1 flex-col items-start justify-start p-[19px] rounded-[10px] w-full">
                  <Text
                    className="leading-[150.00%] mt-3 text-gray-50_02 text-xl w-[99%] sm:w-full"
                    size="txtOutfitSemiBold20Gray5002"
                  >
                    Rebase imprudente en Naco por Joan Perez
                  </Text>
                  <Text
                    className="mt-1.5 text-gray-300 text-sm"
                    size="txtOutfitRegular14Gray300"
                  >
                    12.05.2023
                  </Text>
                  <Text
                    className="mt-[27px] text-base text-white-A700"
                    size="txtOutfitRegular16WhiteA700"
                  >
                    View Report
                  </Text>
                </div>
                <div className="bg-blue-A200 flex flex-1 flex-col items-start justify-end p-[19px] rounded-[10px] w-full">
                  <Text
                    className="leading-[150.00%] mt-3 text-gray-50_02 text-xl w-[99%] sm:w-full"
                    size="txtOutfitSemiBold20Gray5002"
                  >
                    Alta velocidad en Ens. Ozama por Cristian Bake
                  </Text>
                  <Text
                    className="mt-1.5 text-gray-300 text-sm"
                    size="txtOutfitRegular14Gray300"
                  >
                    12.05.2023
                  </Text>
                  <Text
                    className="mt-[27px] text-base text-white-A700"
                    size="txtOutfitRegular16WhiteA700"
                  >
                    View Report
                  </Text>
                </div>
                <div className="bg-blue-A200 flex flex-1 flex-col items-start justify-start p-[19px] rounded-[10px] w-full">
                  <Text
                    className="leading-[150.00%] mt-3 text-gray-50_02 text-xl w-[99%] sm:w-full"
                    size="txtOutfitSemiBold20Gray5002"
                  >
                    Conduccion temeraria en Romana por Juan Olivo
                  </Text>
                  <Text
                    className="mt-1.5 text-gray-300 text-sm"
                    size="txtOutfitRegular14Gray300"
                  >
                    12.05.2023
                  </Text>
                  <Text
                    className="mt-[27px] text-base text-white-A700"
                    size="txtOutfitRegular16WhiteA700"
                  >
                    View Report
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapPage;
