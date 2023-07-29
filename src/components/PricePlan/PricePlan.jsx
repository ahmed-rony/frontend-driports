import { Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import "./PricePlan.scss";
import { BiBadgeCheck } from "react-icons/bi";
import RegContext from "utils/Reducers/RegReducer";

const PricePlan = () => {
  const { state, dispatch } = useContext(RegContext);

  const handleSelect = (data) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: "pricePlan", value: data },
    });
  };
  return (
    <section className="price-plan">
      <div className="content">
        {pricePlan.map((i) => (
          <div
            key={i?.id}
            className={`item ${
              state?.pricePlan !== null && state?.pricePlan?.id === i?.id && "highlightbg"
            }`}
          >
            <h4>{i?.title}</h4>
            <div className="details">
              <div className={`permonth`}>
                <div>
                  <span>${i?.perMonth}</span>
                  <small>/mo</small>
                </div>
              </div>
              <h5>Package title</h5>
              <span>$ {i?.perDay} /day</span>
              <button className="brand-btn" onClick={() => handleSelect(i)}>
                Select
              </button>
            </div>
            <hr />
            <div className="feature">
              {i?.features?.map((f) => (
                <div className="list" key={f?.id}>
                  <div>
                    <BiBadgeCheck className="f-icon" />
                  </div>
                  <span>{f?.detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricePlan;

const pricePlan = [
  {
    id: 1,
    title: "Basic",
    subtitle: "Ideal solution for beginners",
    perMonth: 30,
    perDay: 1.3,
    features: [
      { detail: "Ipsum dolor sit." },
      { detail: "dolor sit amet." },
      { detail: "consectetur adipisicing elit." },
      { detail: "Sit amet elit." },
    ],
  },
  {
    id: 2,
    title: "Standard",
    subtitle: "Perfect package to be an Entrepreneur",
    perMonth: 50,
    perDay: 2.5,
    features: [
      { detail: "Loremamet con elit." },
      { detail: "tetur adipisicing elit." },
      { detail: "Luw amet consectet." },
      { detail: "Lorem iet consectetur adipisi" },
      { detail: "Lorem ipsumlit adipisicing." },
    ],
  },
  {
    id: 3,
    title: "Premium",
    subtitle: "Optimized for medium and large businesses",
    perMonth: 80,
    perDay: 4.6,
    features: [
      { detail: "Lorem ipsum don elit." },
      { detail: "Lorem ipsum doctetur adipisicing elit." },
      { detail: "ipsum dolor silit." },
      { detail: "Lorem ipsum dolopisicing." },
      { detail: "ipsum doloring elit." },
      { detail: "Luw amet consecteturt." },
    ],
  },
];
