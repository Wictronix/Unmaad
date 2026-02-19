import EventsStreet from "./EventsStreet";
import Footer from "../../components/Footer";
import { Metadata } from "next";
import { sharedMetadata } from "../../shared-metadata";

export const metadata: Metadata = {
    ...sharedMetadata,
    title: "Events Street | Unmaad 2026",
    description: "Discover the amazing events happening at Unmaad 2026.",
};


export default function EventsStreetPage() {
    return (
        <main className="relative flex min-h-screen flex-col font-sans text-white">
            <EventsStreet />
            <Footer />
        </main>
    );
}
