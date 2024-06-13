
import { Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
export default function LoaderSping() {
 

  return (
     <div className="flex justify-center items-center w-full h-[100vh] bg-blue-950">
        <Space>
          <Spin indicator={<LoadingOutlined spin />} size="large"/>

          <LoadingOutlined style={{ fontSize: 100, color: "white" }} spin />
        </Space>
      </div>

  );
}
