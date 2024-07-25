import "../css/Header.css";
import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const items = [
    {
      label: "Welcome Carter Pham",
      key: "SubMenu",
      children: [
        {
          label: <Link to={"/login"}>Đăng nhập</Link>,

          key: "login",
        },
        {
          label: (
            <span
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              Đăng xuất
            </span>
          ),

          key: "logout",
        },
        {
          label: <Link to={"/register"}>Đăng kí</Link>,

          key: "register",
        },
      ],
    },
  ];
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
