import React, { useContext, useEffect, useState } from "react";
import "./PaymentGateway.scss";
import StripeCheckout from "react-stripe-checkout";
import { newRequest } from "utils/newRequest";
import RegContext from "utils/Reducers/RegReducer";

const KEY =
  "pk_test_51NYqpXJbuQvwhEJr8iYMNFzmOWAPr3EAqW22wC234qMHqE2E4ABeBgaZZxk0uZDGvyQwn5w0FolhVHsnzT1AO4SE00H2IiOmJz";

const PaymentGateway = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const [err, setErr] = useState("");

  const onToken = (token) => {
    setStripeToken(token);
  };
  const { state, dispatch } = useContext(RegContext);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(`/client/api/v1/payment`, {
          tokenId: stripeToken?.id,
          amount: state?.pricePlan?.perMonth * 100,
        });
        await dispatch({
          type: "CHANGE_INPUT",
          payload: {
            name: "transactionId",
            value: res.data?.balance_transaction,
          },
        });
        if (res.data?.paid) {
          await newRequest.post(`/client/auth/register`, state);
          window.location.href = "/success";
        }
      } catch (error) {
        setErr(error?.response?.data?.message);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div className="paymentGateway">
      <h1>Payment Gateway</h1>
      <StripeCheckout
        name="Driports"
        image="/images/img_folder.svg"
        description={`You have chosen the ${state?.pricePlan?.title} Plan`}
        amount={state?.pricePlan?.perMonth * 100}
        token={onToken}
        stripeKey={KEY}
      >
        <button disabled={state?.username === ''} className="payment-btn">Pay Now</button>
      </StripeCheckout>
      {err !== "" && <small style={{ color: "red" }}>{err}</small>}
    </div>
  );
};

export default PaymentGateway;
