import React from 'react';
import { Card, CardHeader, CardBody, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { FaCode, FaServer, FaReact, FaMobileAlt, FaPaintBrush, FaShoppingCart } from 'react-icons/fa';  // Correctly import all icons needed
import { ServDet } from '../data/ServDetInfo';

const ServInfo = () => {
  const iconMap = {
    FaCode: FaCode,
    FaServer: FaServer,
    FaReact: FaReact,
    FaMobileAlt: FaMobileAlt,
    FaPaintBrush: FaPaintBrush,
    FaShoppingCart: FaShoppingCart,
  };

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3 }} // Responsive columns: 1 on mobile, 2 on small screens, and 3 on medium and up
      spacing={4}
      p={4} // Adding some padding for spacing around the grid
    >
      {ServDet.map((card) => (
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

export default ServInfo;
