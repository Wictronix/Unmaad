import SponsorAlley from "./SponsorAlley";
import { Metadata } from "next";
import { sharedMetadata } from "../../shared-metadata";

export const metadata: Metadata = {
    ...sharedMetadata,
    title: "Sponsor Alley | Unmaad 2026",
    description: "Our valued partners and sponsors for Unmaad 2026.",
};


export default function Page() {
    return <SponsorAlley />;
}
