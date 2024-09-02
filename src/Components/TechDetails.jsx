import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { FaUsers, FaLightbulb, FaHandshake, FaTachometerAlt, FaPalette } from 'react-icons/fa';
import { TechInfo } from '../data/TechInfo';
import { AiOutlineJavaScript } from "react-icons/ai";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const TechDetails = () => {
    const iconMap = {
        IoLogoHtml5 : IoLogoHtml5 ,
        FaCss3Alt : FaCss3Alt,
        FaReact : FaReact ,
        SiExpress: SiExpress,
        FaUsers: FaUsers,
        FaLightbulb: FaLightbulb,
        FaHandshake: FaHandshake,
        FaTachometerAlt: FaTachometerAlt,
        FaPalette: FaPalette,
        IoLogoNodejs:IoLogoNodejs ,
        AiOutlineJavaScript:AiOutlineJavaScript,
        RiNextjsFill:RiNextjsFill 

      };
      

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3 }} // Responsive columns: 1 on mobile, 2 on small screens, and 3 on medium and up
      spacing={4}
      p={4} // Adding some padding for spacing around the grid
    >
      {TechInfo.map((card) => (
        <Card key={card.id}>
          <CardHeader>
            <div className="flex flex-col items-center">
              {/* Retrieve icon from data */}
              {React.createElement(iconMap[card.icon], { className: 'text-4xl mb-2' })}
              <Heading size='md'>{card.title}</Heading>
            </div>
          </CardHeader>
          <CardBody >
            <Text className='text-center'>{card.description}</Text>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default TechDetails;
