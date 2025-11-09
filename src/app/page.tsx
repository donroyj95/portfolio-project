import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { PagesMetaHead } from "./PagesMetaHead";
import { AppFooter } from "./AppFooter";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <AnimatePresence>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <PagesMetaHead />
        <Navbar />
        <AppFooter />
      </div>
    </AnimatePresence>
  );
}
