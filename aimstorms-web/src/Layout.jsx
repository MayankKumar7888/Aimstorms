import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
    // const services = [
    //     "Brand",
    //     "Strategy",
    //     "Design",
    //     "Storytelling",
    //     "Performance",
    //     "Identity",
    //     "Motion",
    //     "Code",
    // ];

    // const serviceList = [
    //     {
    //         id: "01",
    //         title: "Social Media Marketing",
    //         description:
    //             "Build & manage digital presence across platforms to drive sales.",
    //     },
    //     {
    //         id: "02",
    //         title: "Website Design & Dev",
    //         description:
    //             "Modern websites — structure, layout & function in HTML, CSS, JS.",
    //     },
    //     {
    //         id: "03",
    //         title: "Packaging Design",
    //         description:
    //             "Carefully crafted packaging that communicates value, lasts in memory.",
    //     },
    //     {
    //         id: "04",
    //         title: "Product Photoshoot",
    //         description:
    //             "Stunning product images that increase sales and build trust.",
    //     },
    //     {
    //         id: "05",
    //         title: "Brand Videoshoots",
    //         description:
    //             "Corporate video aligned to your message and marketing goals.",
    //     },
    //     {
    //         id: "06",
    //         title: "Public Relations",
    //         description:
    //             "Credibility, visibility, and creatively shaped public perception.",
    //     },
    //     {
    //         id: "07",
    //         title: "Search Engine Optimization",
    //         description:
    //             "Improve Google visibility and drive organic traffic, sustainably.",
    //     },
    //     {
    //         id: "08",
    //         title: "Pay-Per-Click Advertising",
    //         description:
    //             "High-converting ad campaigns on Google & social for instant leads.",
    //     },
    //     {
    //         id: "09",
    //         title: "UI / UX Design",
    //         description:
    //             "Intuitive, engaging experiences that improve retention.",
    //     },
    //     {
    //         id: "10",
    //         title: "E-commerce Development",
    //         description:
    //             "Scalable stores, seamless UX, secure payments.",
    //     },
    //     {
    //         id: "11",
    //         title: "Content Marketing",
    //         description:
    //             "Strategic content that educates, engages, and converts.",
    //     },
    //     {
    //         id: "12",
    //         title: "Email Marketing",
    //         description:
    //             "Personalized, high-converting email campaigns.",
    //     },
    // ];

    // const portfolioList = [
    //     {
    //         id: "01",
    //         title: "Cockcolours",
    //         category: "Brand & Packaging",
    //         year: "2024",
    //     },
    //     {
    //         id: "02",
    //         title: "Amaribath",
    //         category: "Identity & Web",
    //         year: "2024",
    //     },
    //     {
    //         id: "03",
    //         title: "Disedge School",
    //         category: "Brand System",
    //         year: "2023",
    //     },
    //     {
    //         id: "04",
    //         title: "Airtree HVAC",
    //         category: "Web & Campaign",
    //         year: "2024",
    //     },
    //     {
    //         id: "05",
    //         title: "Brijudyog",
    //         category: "Corporate Identity",
    //         year: "2023",
    //     },
    //     {
    //         id: "06",
    //         title: "Gautami Wellness",
    //         category: "Brand & Packaging",
    //         year: "2024",
    //     },
    //     {
    //         id: "07",
    //         title: "Godavari Foods",
    //         category: "Packaging Suite",
    //         year: "2024",
    //     },
    //     {
    //         id: "08",
    //         title: "Urban Tots",
    //         category: "E-commerce",
    //         year: "2023",
    //     },
    // ];

    // const clientList = [
    //     "Cockcolours",
    //     "Amaribath",
    //     "Disedge",
    //     "Airtree",
    //     "Brijudyog",
    //     "Gautami Wellness",
    //     "GFM Foods",
    //     "GSM Doors",
    //     "Jain Marble",
    //     "Samirika Exports",
    //     "SD Polytech",
    //     "Urban Tots",
    //     "Molt & Lava",
    //     "Ocean Co.",
    //     "Studio Nord",
    //     "Heliograph",
    // ];

    return (
        <div className="grain">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div >
    );
};

export default Layout;