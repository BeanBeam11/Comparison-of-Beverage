import { Layout } from 'antd';
import AppHeader from "../components/Header"
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
          {/* <ProductList products={products} /> */}
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
