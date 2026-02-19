import MerchStore from "./MerchStore";
import { Metadata } from "next";
import { sharedMetadata } from "../../shared-metadata";

export const metadata: Metadata = {
    ...sharedMetadata,
    title: "Merch Store | Unmaad 2026",
    description: "Shop exclusive Unmaad 2026 merchandise.",
};


export default function Page() {
    return <MerchStore />;
}
