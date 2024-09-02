import React, { useState } from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react';
import { FiAlignLeft } from "react-icons/fi";
import logo from "../assets/logo.gif";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Create a motion button component
const MotionButton = motion(Button);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Hook to manage drawer state
  const btnRef = React.useRef();
  const [activeTab, setActiveTab] = useState('');
  const navigate = useNavigate();

  // Function to handle tab click and set the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
    onClose(); // Close the drawer when a tab is clicked (optional)
  };

  return (
    <>
      <div className="bg-black max-h-[100px] flex flex-row justify-between items-center p-3 fixed top-0 left-0 right-0 z-50">
        <div ref={btnRef} onClick={onOpen}>
          <FiAlignLeft className="text-[20px] sm:text-[30px] md:text-[40px] text-white cursor-pointer" />
        </div>
        <div  onClick={()=>navigate('/')}>
          <img src={logo} alt="Logo" className="h-[30px] sm:h-[40px] md:h-[50px]" />
        </div>
        <div>
          <Button className="text-sm sm:text-base md:text-lg" onClick={() => navigate("contact")}>
            Hire Me
          </Button>
        </div>
      </div>

      {/* Drawer Component */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className='text-white'>Menu</DrawerHeader>
          <DrawerBody>
            {/* Sidebar with tabs */}
            <div className="flex flex-col space-y-4">
              <MotionButton
                className={`text-left ${activeTab === '' ? 'bg-cyan-500 text-white' : 'bg-white text-black'} hover:bg-cyan-400 hover:text-white`}
                onClick={() => handleTabClick('')}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Home
              </MotionButton>
              <MotionButton
                className={`text-left ${activeTab === 'portfolio' ? 'bg-cyan-500 text-white' : 'bg-white text-black'} hover:bg-cyan-400 hover:text-white`}
                onClick={() => handleTabClick('portfolio')}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Portfolio
              </MotionButton>
              <MotionButton
                className={`text-left ${activeTab === 'technologies' ? 'bg-cyan-500 text-white' : 'bg-white text-black'} hover:bg-cyan-400 hover:text-white`}
                onClick={() => handleTabClick('technologies')}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Technologies
              </MotionButton>
              <MotionButton
                className={`text-left ${activeTab === 'services' ? 'bg-cyan-500 text-white' : 'bg-white text-black'} hover:bg-cyan-400 hover:text-white`}
                onClick={() => handleTabClick('services')}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Services
              </MotionButton>
              <MotionButton
                className={`text-left ${activeTab === 'contact' ? 'bg-cyan-500 text-white' : 'bg-white text-black'} hover:bg-cyan-400 hover:text-white`}
                onClick={() => handleTabClick('contact')}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Contact
              </MotionButton>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
