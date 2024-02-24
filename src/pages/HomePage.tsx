
/*UI*/
import { AboutMe, LightMode, MyName, NavbarDesktop, Network, Portfolio, Skills } from '../components/ui';

/*Styles*/
import Layout from './Layouts/Layout';
const HomePage = () => {

    return (
        <Layout>
            <LightMode />
            <MyName />
            <NavbarDesktop />
            <Network />
            <AboutMe />
            <Skills />
            <Portfolio />
        </Layout>
    )
}

export default HomePage