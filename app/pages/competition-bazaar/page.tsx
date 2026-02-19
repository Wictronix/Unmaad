import CompetitionBazaar from "./CompetitionBazaar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Metadata } from "next";
import { sharedMetadata } from "../../shared-metadata";

export const metadata: Metadata = {
    ...sharedMetadata,
    title: "Competition Bazaar | Unmaad 2026",
    description: "Participate in exciting competitions at Unmaad 2026.",
};

export default function CompetitionBazaarPage() {
    return (
        <main className="relative flex min-h-screen flex-col font-sans text-white">
            <CompetitionBazaar />
            <Footer />
        </main>
    );
}
