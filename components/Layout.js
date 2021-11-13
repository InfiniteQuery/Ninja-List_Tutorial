import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/dist/shared/lib/head";
const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Head>
                <title>Ninjalist</title>
                <meta name="keywords" content="about"/>
            </Head>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    );
}
 
export default Layout;