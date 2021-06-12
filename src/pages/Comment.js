import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import CommentList from "../components/CommentList"
const { Header,Content,Footer } = Layout;
function Comment() {
 
    return (
      <Layout className="container main-layout">
      <Layout className="">
        <Header className="layout-header bg-color">
          <AppHeader  />
        </Header>
        <Content className="layout-content">
          <CommentList/>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
    );
  }
  
  export default Comment;