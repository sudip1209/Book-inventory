import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import userImg from "../assets/profile.jpg";

const SideBar = () => {
  return (
    <div className="">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="#" img={userImg} imgAlt="User profile">
          <p>User Name</p>{" "}
          {/* Optional: You can add a username or a title here */}
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              <p className="ml-2">Dashboard</p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/upload"
              icon={HiOutlineCloudUpload}
            >
              <p className="ml-2">Upload Book</p>
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              <p className="ml-2">Manage Books</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              <p className="ml-2">Users</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              <p className="ml-2">Products</p>
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight}>
              <p className="ml-2">Sign In</p>
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              <p className="ml-2">Log Out</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              <p className="ml-2">Upgrade to Pro</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              <p className="ml-2">Documentation</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              <p className="ml-2">Help</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;

