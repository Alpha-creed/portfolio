import React, { useState } from 'react';
import { FaAngleDoubleRight, FaFacebook, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import {
  Box,
  Image,
  Flex,
  VStack,
  HStack,
  Text,
  Icon,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalImage, setModalImage] = useState('');

  const handleImageClick = (src) => {
    setModalImage(src);
    onOpen();
  };

  return (
    <Box
      minHeight="100vh" // Ensure the Box covers the full viewport height
      padding="10px"
      paddingTop="80px"
      backgroundColor="#A9A9A9"
    >
      <Breadcrumb separator={<FaAngleDoubleRight color='gray.500' />}>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex
        direction="column"
        align="center"
        justify="center"
        marginTop="10px"
      >
        {/* Centering the content vertically and horizontally */}
        <VStack spacing={6} align="center">
          <Image
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            borderRadius="full"
            boxSize="150px"
            cursor="pointer"
            onClick={() => handleImageClick('https://bit.ly/dan-abramov')}
          />
          <Heading as="h2" size="md" marginBottom="20px">
            FREDERICK ENCHILL<br />
            FRONTEND DEVELOPER
          </Heading>
          <Text textAlign="center" maxWidth="600px">
            As a freelance web developer, I craft modern, responsive websites that not only look stunning but perform flawlessly across all devices. I specialize in building custom websites and user interfaces that reflect your brand and captivate your audience. With a keen eye for design and a solid grasp of the latest technologies, I ensure your website is fast, secure, and SEO-optimized. Whether you need a sleek business site or a dynamic web application, I turn your vision into reality, helping you stand out online and connect with your customers. Let's build something great together!
          </Text>
          <Box textAlign="center">
            <Heading as="h2" size="md" marginBottom="20px">
              My Social Media Platforms are below
            </Heading>
            <HStack spacing={6} justify="center">
              {/* Horizontal stack for social media icons with links */}
              <Link href="https://www.facebook.com" isExternal>
                <Icon as={FaFacebook} boxSize={8} />
              </Link>
              <Link href="https://twitter.com" isExternal>
                <Icon as={FaSquareXTwitter} boxSize={8} />
              </Link>
              <Link href="https://www.linkedin.com" isExternal>
                <Icon as={FaLinkedin} boxSize={8} />
              </Link>
              <Link href="mailto:enchillfrederick5@gmail.com">
                <Icon as={MdOutlineMail} boxSize={8} />
              </Link>
              <Link href="tel:0261256717">
                <Icon as={FaPhoneAlt} boxSize={8} />
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Flex>

      {/* Modal for displaying full image */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  bg="transparent" boxShadow="none">
          <ModalCloseButton />
          <ModalBody>
            <Image src={modalImage} alt="Full Image" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default About;
