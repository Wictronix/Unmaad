import EventsStreet from "./EventsStreet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function EventsStreetPage() {
    return (
        <main className="relative flex min-h-screen flex-col font-sans text-white">
            <Navbar />
            <EventsStreet />
            <Footer />
        </main>
    );
}
