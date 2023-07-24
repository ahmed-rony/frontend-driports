import React from "react";

const sizeClasses = {
  txtOutfitSemiBold9: "font-outfit font-semibold",
  txtOutfitSemiBold16BlueA200: "font-outfit font-semibold",
  txtNunitoBlack2989: "font-black font-nunito",
  txtOutfitMedium18: "font-medium font-outfit",
  txtOutfitSemiBold20Gray5002: "font-outfit font-semibold",
  txtInterRegular12WhiteA700: "font-inter font-normal",
  txtOutfitRegular20: "font-normal font-outfit",
  txtOutfitRegular16Black900: "font-normal font-outfit",
  txtOutfitSemiBold18Gray60003: "font-outfit font-semibold",
  txtOutfitSemiBold28: "font-outfit font-semibold",
  txtOutfitRegular16Bluegray9007f: "font-normal font-outfit",
  txtOutfitRegular14RedA700: "font-normal font-outfit",
  txtMontserratRegular13: "font-montserrat font-normal",
  txtOutfitRegular788Black900: "font-normal font-outfit",
  txtOutfitSemiBold20Gray900: "font-outfit font-semibold",
  txtOutfitSemiBold18Gray900: "font-outfit font-semibold",
  txtOutfitSemiBold20: "font-outfit font-semibold",
  txtOutfitMedium18Gray60003: "font-medium font-outfit",
  txtOutfitSemiBold42: "font-outfit font-semibold",
  txtOutfitSemiBold22: "font-outfit font-semibold",
  txtOutfitSemiBold16WhiteA700: "font-outfit font-semibold",
  txtOutfitRegular14: "font-normal font-outfit",
  txtOutfitRegular16: "font-normal font-outfit",
  txtOutfitRegular16Gray900: "font-normal font-outfit",
  txtOutfitRegular12: "font-normal font-outfit",
  txtOutfitRegular16Gray90001: "font-normal font-outfit",
  txtInterRegular12Gray90001: "font-inter font-normal",
  txtOutfitRegular30: "font-normal font-outfit",
  txtOutfitRegular14RedA70001: "font-normal font-outfit",
  txtOutfitRegular16WhiteA700: "font-normal font-outfit",
  txtOutfitMedium18BlueA200: "font-medium font-outfit",
  txtOutfitRegular14Gray300: "font-normal font-outfit",
  txtInterSemiBold16: "font-inter font-semibold",
  txtOutfitSemiBold16Black900: "font-outfit font-semibold",
  txtOutfitRegular14BlueA200: "font-normal font-outfit",
  txtOutfitSemiBold14: "font-outfit font-semibold",
  txtOutfitSemiBold16: "font-outfit font-semibold",
  txtOutfitRegular788: "font-normal font-outfit",
  txtOutfitSemiBold18: "font-outfit font-semibold",
  txtOutfitBold20: "font-bold font-outfit",
  txtInterRegular12: "font-inter font-normal",
  txtOutfitRegular14Bluegray500: "font-normal font-outfit",
  txtOutfitRegular14Black900: "font-normal font-outfit",
  txtInterRegular14: "font-inter font-normal",
  txtOutfitRegular18: "font-normal font-outfit",
  txtOutfitSemiBold16Gray90001: "font-outfit font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
