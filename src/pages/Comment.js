import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"

const { Header,Footer } = Layout;
function Comment() {
 
    return (
      <Layout className="container main-layout">
      
      <Layout className="bg-gray">
        <Header className="layout-header">
          <AppHeader  />
        </Header>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
    );
  }
  
  export default Comment;