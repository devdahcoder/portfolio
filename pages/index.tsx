import { useEffect, useRef, useState } from "react";
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

    const { hasPageFullyLoaded, isTextCompleted, loadingTextRefElement, name } = useMainContainer();

    return (
        <div>
            <TextCircle 
                text={"design is life - design is life - design is life - "} 
                className={`${hasPageFullyLoaded ? 
                `!z-0 transition-all duration-500 ease-in-out
                left-[5.5rem] small-xs:left-32 medium-xs:left-[24rem] large-sm:left-[30rem] extra-large-xs:left-[32rem] extra-large-mid:left-[43.5rem]
                top-[4rem] small-xs:top-[5.5rem] small-mid:top-[6rem] medium-xs:top-[7rem]  medium-sm:top-[9rem] large-xs:top-36
                large-sm:top-52 extra-large-xs:top-[13rem] extra-large-mid:top-56`
                : 
                "z-50 -top-12 -left-12"}`} 
            />

            <Loading 
                isTextCompleted={isTextCompleted}
                hasPageFullyLoaded={hasPageFullyLoaded}
                loadingTextRefElement={loadingTextRefElement}
            />

            <div className="">
                <HomePage hasPageFullyLoaded={hasPageFullyLoaded} name={name} />
                <Works />
                <Talk />
                <Community />
                <Contributions />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

Home.getLayout = getAppLayout;

export default Home;
