import { Layout } from 'antd';
import * as QueryString from "query-string";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProfileCard from "../components/ProfileCard";



const { Header, Content, Footer } = Layout;
function Profile() {

    return (
      <Layout className="container main-layout">
      
      <Layout className="">
        <Header className="layout-header">
          <AppHeader  />
        </Header>
        <Content className="layout-content">
        <ProfileCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
    );
  }
  
  export default Profile;