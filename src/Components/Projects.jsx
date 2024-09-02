import React from 'react';
import {
  Card,
  CardFooter,
  Image,
  Box,
  Heading,
  useBreakpointValue,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
  import { FaAngleDoubleRight } from "react-icons/fa";
import repairs from '../assets/repairsCover.jpg'
import ecom from '../assets/ecomcover.jpg'
import store from '../assets/store.jpg'
import quiz from '../assets/quizcover.jpg'

const Projects = () => {
  const navigate = useNavigate();

  // Determine the number of columns based on screen size
  const columns = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Box marginTop="60px" padding="10px" paddingTop="20px" backgroundColor="#A9A9A9">
      <Flex align="flex-start" direction="column">
      <Breadcrumb style={{cursor:'pointer'}} separator={<FaAngleDoubleRight  color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Portfolio</BreadcrumbLink>
  </BreadcrumbItem>

</Breadcrumb>
        <Heading as="h1" fontSize="4xl" marginBottom="30px">
          My Projects
        </Heading>
        <Box  padding="20px" borderRadius="md">
          <Grid
            templateColumns={`repeat(${columns}, 1fr)`}
            gap="20px"
          >
            {/* Card 1 */}
            <GridItem>
              <Card maxW="3xl"    onClick={() => window.location.href = "https://promstech.netlify.app/"}
    cursor="pointer" >
                <Image
                  objectFit="cover"
                  src={repairs}
                  alt="Chakra UI"
                />
                <CardFooter justify="center" flexWrap="wrap">
                  <Heading as="h3" size="md">Repairs Shop Website</Heading>
                </CardFooter>
              </Card>
            </GridItem>

            {/* Card 2 */}
            <GridItem>
              <Card maxW="3xl" onClick={() => navigate("#")}>
                <Image
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Chakra UI"
                />
                <CardFooter justify="center" flexWrap="wrap">
                  <Heading as="h3" size="md">Store Management App</Heading>
                </CardFooter>
              </Card>
            </GridItem>

            {/* Card 3 */}
            <GridItem rowSpan={2}>
              <Card maxW="3xl" onClick={() => window.location.href = "https://cologne-craft.netlify.app/"}
    cursor="pointer">
                <Image
                  objectFit="cover"
                  src={ecom}
                  alt="Chakra UI"
                />
                <CardFooter justify="center" flexWrap="wrap">
                  <Heading as="h3" size="md">Cologne Craft Ecommerce Site</Heading>
                </CardFooter>
              </Card>
            </GridItem>

            {/* Card 4 */}
            <GridItem>
              <Card maxW="3xl" onClick={() => navigate("#")}>
                <Image
                  objectFit="cover"
                  src={quiz}
                  // height="410px"
                  alt="Chakra UI"
                />
                <CardFooter justify="center" flexWrap="wrap">
                  <Heading as="h3" size="md">Quiz App</Heading>
                </CardFooter>
              </Card>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
