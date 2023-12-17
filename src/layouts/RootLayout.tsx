import React from "react";
import Navbar from "../components/Navbar";
import WrapperSpace from "../components/WrapperSpace";
import Footer from "../components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <WrapperSpace>
        <Navbar />
        <div className="h-screen">{children}</div>
      </WrapperSpace>
      <Footer />
    </>
  );
};

export default RootLayout;
