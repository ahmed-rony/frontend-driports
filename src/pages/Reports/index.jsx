import React, { useContext, useEffect, useState } from "react";
import { Button, Img, Input, Line, List, Text } from "components";
import "./Reports.scss";

import { CloseSVG } from "../../assets/images";
import AuthContext from "utils/Reducers/AuthReducer";
import { newRequest } from "utils/newRequest";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const ReportsPage = () => {
  const { currentUser } = useContext(AuthContext);
  const token = currentUser ? currentUser?.data?.token : null;
  const [reportsLoading, setReportsLoading] = useState(false);
  const [reportsError, setReportsError] = useState(null);
  const [reportsList, setReportsList] = useState(null);
  const [paging, setPaging] = useState(1);

  const header = {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };

  const props = {
    options: {
      page: paging,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setReportsLoading(true);
        const response = await newRequest.post(
          `/client/api/v1/reports/list`,
          props,
          header
        );
        const data = response.data;
        setReportsList(data);
        setReportsLoading(false);
      } catch (error) {
        setReportsError(error);
      }
    };

    fetchData();
  }, [paging]);

  // const {
  //   isLoading: reportsLoading,
  //   error: reportsError,
  //   data: reportsList,
  // } = useQuery({
  //   queryKey: ["reportsList"],
  //   queryFn: async () =>
  //     await newRequest
  //       .post(`/client/api/v1/reports/list`, {}, header)
  //       .then((res) => {
  //         return res.data;
  //       }),
  // });
  console.log(reportsList);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-outfit items-center justify-start mx-auto w-full report_page">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <div className="flex flex-1 flex-col gap-[21px] items-center justify-start md:px-5 w-full">
            <div className="bg-blue-200 flex flex-col gap-[19px] justify-end py-[23px] rounded-[10px] w-[95%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[21px] items-end justify-start ml-8 md:ml-[0] mr-[1059px] mt-0.5 w-[15%] md:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_mdifilereport_white_a700.svg"
                  alt="mdifilereport_One"
                />
                <Text
                  className="md:mt-0 mt-[5px] text-white-A700 text-xl"
                  size="txtOutfitSemiBold20"
                >
                  List of reports
                </Text>
              </div>
              <div className="reports">
                {reportsLoading
                  ? "Loading"
                  : reportsError
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
                        <Link to={`/reportview/${r?.id}`} className="repo_link">
                          <span>View Media</span>
                          <img
                            src="images/img_solareyebold.svg"
                            alt="solareyebold"
                          />
                        </Link>
                      </div>
                    ))}
              </div>
              <div className="pagination">
                <button
                  className="page-btn"
                  disabled={paging <= 1}
                  onClick={() => setPaging((prev) => prev - 1)}
                >
                  Previews
                </button>
                <span>{reportsList?.data?.paginator?.currentPage}</span>
                <button
                  className="page-btn"
                  disabled={!reportsList?.data?.paginator?.hasNextPage}
                  onClick={() => setPaging((prev) => prev + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsPage;
