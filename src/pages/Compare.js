import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Comparison from "../components/Comparison"



const { Header, Content, Footer } = Layout;
function Compare() {
 
    return (
      <Layout className="container main-layout">
      
      <Layout className="">
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