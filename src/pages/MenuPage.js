import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import MenuList from "../components/MenuList";
const { Header, Content, Footer } = Layout;
function MenuPage() {
  return (
    <Layout className="container main-layout">
      
      <Layout className="">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <Content className="layout-content">
          <MenuList/>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MenuPage;
