import React from "react";
import { MdDownload } from "react-icons/md";

const NavbarButton = () => {
  const handleDownload = () => {
    const resumeUrl = "/resume/SangramResume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Sangram_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow "
      onClick={handleDownload}
    >
      Resume
      <div className="sm:hidden lg:block">
        <MdDownload />
      </div>
    </button>
  );
};

export default NavbarButton;
