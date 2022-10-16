import React from 'react';
import { getAppLayout } from "../components/layouts/app-layout";
import Talk from "../components/layouts/talk";
import Loading from "../components/loading";
import Community from "../components/Section/community";
import Contact from "../components/Section/contact";
import Contributions from "../components/Section/contributions";
import HomePage from "../components/Section/home-page";
import Works from "../components/Section/works";
import About from '../components/Section/about'
import Footer from "../components/Section/footer";
import { useMainContainer } from "../state/main";
import { Toaster } from 'react-hot-toast';


const Home = () => {

    const { hasPageFullyLoaded, isTextCompleted, loadingTextRefElement, name, isSiteLoading } = useMainContainer();

    if (isSiteLoading) {
        return (
            <Loading 
                isTextCompleted={isTextCompleted}
                hasPageFullyLoaded={hasPageFullyLoaded}
                loadingTextRefElement={loadingTextRefElement}
            />
        )
    }

    return (
        <div className="">
            <Toaster />
            <HomePage hasPageFullyLoaded={hasPageFullyLoaded} name={name} />
            <Works />
            <Talk />
            <Community />
            <Contributions />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

Home.getLayout = getAppLayout;

export default Home;
