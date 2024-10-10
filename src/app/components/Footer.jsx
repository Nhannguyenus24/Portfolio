"use client"
import React from "react";
import Image from "next/image"
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Hiệu ứng cuộn mượt mà
    });
  };
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image src="/favicon.ico" width="40" height="40" alt="Logo" onClick={scrollToTop}/>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
