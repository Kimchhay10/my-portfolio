import { Spacer } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";
import useSideBar from "../../hooks/system/useSideBar";
import NavBar from "../Navbar";
import SideBar from "../SideBar";

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  const {isClickBar} = useSideBar()
  return (
    <div className="relative w-full flex flex-col justify-between font-poppins">
      {isClickBar && (
        <motion.div transition={{ duration: 3, ease: 3 }}>
          <SideBar />
        </motion.div>
      )}
      <div className="container relative z-30 flex w-full mx-auto px-[20px]">
        <NavBar />
      </div>
      <Spacer y={1} />
      <main className="container w-full h-screen mx-auto bg-white px-[20px]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
