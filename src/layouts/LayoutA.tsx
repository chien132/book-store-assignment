import Banner from "@/components/header/Banner";
import Footer from "@/components/header/Footer";
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
      <Banner />
      <Content className="px-52 py-8">{children}</Content>
      <Footer />
    </Layout>
  );
};

export default LayoutA;
