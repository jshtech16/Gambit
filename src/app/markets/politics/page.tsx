import BetList from "@/components/Betlist";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import News from "@/components/News";
import SlickTabs from "@/components/SlickTabs";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="bg-white dark:bg-black px-[20px] xl:px-[30px]">
                <Carousel />
                <SlickTabs />
                <BetList />
                <News />
            </div>
            <Footer />
        </div>
    );
}
