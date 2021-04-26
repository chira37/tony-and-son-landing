import Head from "next/head";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Guarantee from "./components/Guarantee";

export default function Home() {
    return (
        <div>
            <Head>
                <title>HOME | Tony & Son Plumbing Co</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Nav />
            <Header />
            <Services />
            <Testimonials />
            <Contact />
            <Guarantee />
            <Footer />
        </div>
    );
}
