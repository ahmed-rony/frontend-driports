import React, { useContext } from "react";
import "./TableForm.scss";
import { useNavigate } from "react-router-dom";
import RegContext from "utils/Reducers/RegReducer";

const TableForm = () => {
  const { state, dispatch } = useContext(RegContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <div className="new_account">
      <div className="container">
        <div className="account">
          <div className="left">
            <div className="item">
              <label htmlFor="">Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="e.g Samantha Moon"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">Username</label>
              <input
                name="username"
                type="text"
                placeholder="e.g samantha01"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">Email</label>
              <input
                name="email"
                type="text"
                placeholder="e.g example@gmail.com"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">Password</label>
              <input
                name="password"
                type="text"
                placeholder="make it strong"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="right">
            <div className="item">
              <label htmlFor="">Role</label>
              <select name="role" id="category" onChange={handleChange}>
                <option value="role1">Role 1</option>
                <option value="role2">Role 2</option>
                <option value="role3">Role 3</option>
              </select>
            </div>
            {/* <div className="item">
              <label htmlFor="">Company ID</label>
              <input
                name="companyId"
                type="text"
                placeholder="e.g cb7542c5784b"
                onChange={handleChange}
              />
            </div> */}
            <div className="item">
              <label htmlFor="">Mobile Number</label>
              <input
                name="mobileNo"
                type="text"
                placeholder="e.g +123456789"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableForm;
