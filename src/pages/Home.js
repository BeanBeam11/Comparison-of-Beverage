import { Layout } from 'antd';
import AppHeader from "../components/Header"
import HomeContent from "../components/HomeContent";
import AppFooter from "../components/Footer"


const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <Content className="layout-content">
          <HomeContent/>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
