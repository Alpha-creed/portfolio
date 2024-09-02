import React from 'react';
import { Box, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from '@chakra-ui/react';
import { FaAngleDoubleRight } from 'react-icons/fa';  // Import FaAngleDoubleRight for the separator
import TechDetails from '../Components/TechDetails';
import ServInfo from '../Components/ServInfo';

const Service = () => {
  return (
    <Box 
      minHeight="100vh"  // Ensure the Box covers the full viewport height
      padding="10px" 
      paddingTop="80px" 
      backgroundColor="#A9A9A9"
    >
      <Flex 
        align="flex-start" 
        direction="column" 
        height="100%"  // Make sure the Flex container takes up the full height of its parent
        // maxW="container.xl"  // Optionally limit the width
        mx="auto"  // Center the content horizontally
      >
        <Breadcrumb separator={<FaAngleDoubleRight color='gray.500' />}>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Services</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading as="h1" fontSize="4xl" marginTop="40px">
          SERVICES I OFFER
        </Heading>
        <ServInfo/>
      </Flex>
    </Box>
  );
}

export default Service;
