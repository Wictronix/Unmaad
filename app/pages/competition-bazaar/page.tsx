import CompetitionBazaar from "./CompetitionBazaar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CompetitionBazaarPage() {
    return (
        <main className="relative flex min-h-screen flex-col font-sans text-white">
            <CompetitionBazaar />
            <Footer />
        </main>
    );
}
