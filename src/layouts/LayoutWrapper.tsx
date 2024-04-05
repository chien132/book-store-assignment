import { ReactNode } from "react";
import LayoutA from "./LayoutA";
import { Layout } from "antd";

type LayoutWrapperProps = {
  children: ReactNode;
};

const LayoutWrapper = (props: LayoutWrapperProps) => {
  const { children, ...restProps } = props;
  return (
    <Layout>
      <LayoutA {...restProps}>{children}</LayoutA>
    </Layout>
  );
};

export default LayoutWrapper;
