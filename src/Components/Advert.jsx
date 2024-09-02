import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { cardData } from '../data/serviceInfo';
import { AiOutlineUser, AiOutlineShop, AiOutlineDollar, AiOutlineLock } from 'react-icons/ai';
import { FaUsers, FaLightbulb, FaHandshake, FaTachometerAlt, FaPalette } from 'react-icons/fa';


const Advert = () => {
    const iconMap = {
        AiOutlineUser: AiOutlineUser,
        AiOutlineShop: AiOutlineShop,
        AiOutlineDollar: AiOutlineDollar,
        AiOutlineLock: AiOutlineLock,
        FaUsers: FaUsers,
        FaLightbulb: FaLightbulb,
        FaHandshake: FaHandshake,
        FaTachometerAlt: FaTachometerAlt,
        FaPalette: FaPalette,
      };
      

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3 }} // Responsive columns: 1 on mobile, 2 on small screens, and 3 on medium and up
      spacing={4}
      p={4} // Adding some padding for spacing around the grid
    >
      {cardData.map((card) => (
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

export default Advert;
