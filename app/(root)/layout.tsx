import MobileNav from "@/components/shared/mobile-nav";
import { Sidebar } from "@/components/shared/sidebar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      {/*sidebar  */}
      <Sidebar />

      {/* mobilenav */}
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default RootLayout;
