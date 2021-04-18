import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Login from "../components/Login"



const { Header, Content, Footer } = Layout;
function LoginPage() {
 
    return (
      <Layout className="container main-layout">
      
      <Layout className="">
        <Header className="layout-header">
          <AppHeader  />
        </Header>
        <Content className="layout-content">
          <Login/>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
    );
  }
  
  export default LoginPage;