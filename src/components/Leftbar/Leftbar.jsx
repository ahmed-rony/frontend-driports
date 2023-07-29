import React, { useContext, useState } from "react";
import "./Leftbar.scss";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import { Img } from "components";
import AuthContext from "utils/Reducers/AuthReducer";
import { newRequest } from "utils/newRequest";

const Leftbar = () => {
  const [selected, setSelected] = useState(false);
  const { currentUser, dispatch } = useContext(AuthContext);
  const token = currentUser ? currentUser?.data?.token : null;

  const navigate = useNavigate();
  const header = {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };

  const handleLogout = async () => {
    try {
      await newRequest.post("/client/auth/logout", {}, header);
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const Item = ({ title, icon, selected, setSelected }) => {
    return (
      <MenuItem
        active={selected === title}
        className="item"
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <span>{title}</span>
      </MenuItem>
    );
  };

  return (
    <Sidebar className="sidebar">
      <Menu className="menu">
        {/* LOGO */}
        <MenuItem className="header">
          <Img src="images/img_folder.svg" alt="materialsymbols" />
        </MenuItem>

        <div className="navigation">
          <Link to="/">
            <Item
              icon={
                <Img
                  className="text-blue-A200"
                  src="images/icons/dashboard.png"
                  alt="materialsymbols"
                />
              }
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </Link>
          <Link to="/reports">
            <Item
              icon={
                <Img
                  className="text-blue-A200"
                  src="images/icons/report.png"
                  alt="materialsymbols"
                />
              }
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </Link>
          <Link to="/drivers">
            <Item
              icon={
                <Img
                  className="text-blue-A200"
                  src="images/icons/driver.png"
                  alt="materialsymbols"
                />
              }
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </Link>
          <Link to="/vehicle">
            <Item
              icon={
                <Img
                  className="text-blue-A200"
                  src="images/icons/vehicle.png"
                  alt="materialsymbols"
                />
              }
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </Link>
          <Link to="/map">
            <Item
              icon={
                <Img
                  className="text-blue-A200 "
                  src="images/icons/location.png"
                  alt="materialsymbols"
                />
              }
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </Link>
          <Link to="/conversation">
            <Item
              icon={
                <Img
                  className="text-blue-A200"
                  src="images/icons/chat.png"
                  alt="materialsymbols"
                />
              }
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </Link>
        </div>
        <div className="setting">
          <Link to="/setting">
            <Item
              icon={
                <Img
                  className="text-blue-A200"
                  src="images/icons/setting.png"
                  alt="materialsymbols"
                />
              }
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </Link>

          <div onClick={handleLogout}>
            <Item
              icon={
                <Img
                  className="text-blue-A200"
                  src="images/icons/logout.png"
                  alt="materialsymbols"
                />
              }
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </div>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default Leftbar;
