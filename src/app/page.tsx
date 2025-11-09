import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { PagesMetaHead } from "./PagesMetaHead";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

export default function Home() {
  return (
    <AnimatePresence>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <PagesMetaHead />
        <AppHeader />
        <AppFooter />
      </div>
    </AnimatePresence>
  );
}
