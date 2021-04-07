import { useContext } from "react";
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Comparison from "../components/Comparison"
import ProductList from "../components/ProductList";
import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;
function Compare() {
 
    return (
      <Layout className="container main-layout">
      
      <Layout className="bg-gray">
        <Header className="layout-header">
          <AppHeader  />
        </Header>
        <Content className="layout-content">
         <Comparison />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
    );
  }
  
  export default Compare;