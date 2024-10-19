import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import Link from 'next/link';
import FileDownloadButton from './FileDownloadButton';
import SocialMedia from './SocialMedia';
import Image from 'next/image';
import logo from './../public/ajith-logo-transaparent.png';

const MobileNavbar = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    open: { 
      x: '0%',
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: { 
      x: '100%',
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 300
      }
    },
    closed: {
      y: 20,
      opacity: 0
    }
  };

  return (
    <div className="relative md:hidden">
      {/* Hamburger Button */}
      <div className="fixed top-0 left-0 right-0 h-16 flex justify-between items-center px-4 z-50"
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
        }}
      >
        <Link
          href="#home"
        >
          <Image src={logo} alt="Logo"width={30} height={30} />
        </Link>
        <button
          onClick={toggleNav}
          className="p-2 text-white focus:outline-none"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleNav}
        />
      )}

      {/* Navigation Menu */}
      <motion.nav
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={navVariants}
        className="fixed top-0 right-0 h-full w-[70%] bg-black z-40 shadow-lg pt-4"
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
        }}
      >
        <div className="pt-16 px-6">
          <ul className="space-y-4">
            {navItems.map((item: any, index: number) => (
              <motion.li 
                key={index}
                variants={menuItemVariants}
              >
                <Link 
                  href={item.link}
                  className="relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                  onClick={toggleNav}
                >
                  <span className="text-sm !cursor-pointer">{item.name}</span>
                </Link>
              </motion.li>
            ))}
            <motion.li 
              variants={menuItemVariants}
            >
              <FileDownloadButton />
            </motion.li>
            <motion.li 
              variants={menuItemVariants}
            >
              <SocialMedia />
            </motion.li>
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};

export default MobileNavbar;