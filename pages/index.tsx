import React from 'react';
import { getAppLayout } from "../components/layouts/app-layout";
import Talk from "../components/section/talk";
import Loading from "../components/loading";
import Community from "../components/section/community";
import Contact from "../components/section/contact";
import Contributions from "../components/section/contributions";
import HomePage from "../components/section/home-page";
import Works from "../components/section/works";
import About from '../components/section/about'
import Footer from "../components/section/footer";
import { useMainContainer } from "../state/main";
import { Toaster } from 'react-hot-toast';
import Experience from '../components/section/experience';


const Home = () => {

    const { hasPageFullyLoaded, isTextCompleted, loadingTextRefElement, name } = useMainContainer();

    if (!hasPageFullyLoaded) {
        return (
            <Loading
                isTextCompleted={isTextCompleted}
                hasPageFullyLoaded={hasPageFullyLoaded}
                loadingTextRefElement={loadingTextRefElement}
            />
        );
    }

    return (
		<div className="">
			<Toaster />
			<HomePage hasPageFullyLoaded={hasPageFullyLoaded} name={name} />
			<About />
			<Experience />
			<Works />
			{/* turn talks to experience */}
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
