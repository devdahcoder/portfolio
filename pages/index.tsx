import React from 'react';
import { getAppLayout } from "../components/layouts/app-layout";
import Talk from "../components/layouts/talk";
import Loading from "../components/loading";
import Community from "../components/Section/community";
import Contact from "../components/Section/contact";
import Contributions from "../components/Section/contributions";
import HomePage from "../components/Section/home-page";
import Works from "../components/Section/works";
import Footer from "../components/Section/footer";
import TextCircle from "../components/text-circle";
import { useMainContainer } from "../state/main";

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
            <HomePage hasPageFullyLoaded={hasPageFullyLoaded} name={name} />
            <Works />
            <Talk />
            <Community />
            <Contributions />
            <Contact />
            <Footer />
        </div>
    );
};

Home.getLayout = getAppLayout;

export default Home;
