import Header from "@/components/header/Header";
import { Layout } from "antd";
import { ReactNode } from "react";
const { Content } = Layout;

type LayoutAProps = {
  children: ReactNode;
};

const LayoutA = (props: LayoutAProps) => {
  const { children } = props;

  return (
    <Layout>
      <Header />
      <Content className="px-52 py-8 mt-16">{children}</Content>
    </Layout>
  );
};

export default LayoutA;
