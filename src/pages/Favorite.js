import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import FavoriteCard from '../components/FavoriteCard';



const { Header, Content, Footer } = Layout;
function Favorite() {

    return (
      <Layout className="container main-layout">
      
      <Layout className="">
        <Header className="layout-header bg-color">
          <AppHeader  />
        </Header>
        <Content className="layout-content">
       <FavoriteCard/>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
    );
  }
  
  export default  Favorite;