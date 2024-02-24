import React, { useState } from "react";
import { Box, List, ListItem, ListIcon, IconButton } from "@chakra-ui/react";
import {
  MdArrowForward,
  MdCreditCard,
  MdPlaylistAdd,
  MdSettings,
  MdHistory,
  MdFeedback,
  MdLocalOffer,
  MdReceipt,
  MdAssignment,
  MdGolfCourse,
} from "react-icons/md";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box bg="blue.800" color="white" width="200px" height="100vh">
      <IconButton
        icon={isMenuOpen ? <MdArrowForward /> : <MdArrowForward />}
        onClick={toggleMenu}
        variant="unstyled"
        aria-label="Toggle Menu"
        color="white"
        marginTop="4"
        transform={isMenuOpen ? "rotate(90deg)" : "rotate(0)"}
        transition="transform 0.3s ease"
      />
      {isMenuOpen && (
        <List spacing={3} mt={4}>
          <ListItem>
            <ListIcon as={MdCreditCard} color="white" />
            Recharge
          </ListItem>
          <ListItem>
            <ListIcon as={MdPlaylistAdd} color="white" />
            Plans
          </ListItem>
          <ListItem>
            <ListIcon as={MdLocalOffer} color="white" />
            Offers
          </ListItem>
          <ListItem>
            <ListIcon as={MdGolfCourse} color="white" />
            Cricket Packs
          </ListItem>
          <ListItem>
            <ListIcon as={MdReceipt} color="white" />
            Vouchers
          </ListItem>
          <ListItem>
            <ListIcon as={MdAssignment} color="white" />
            My Plans
          </ListItem>
          <ListItem>
            <ListIcon as={MdHistory} color="white" />
            Recharge History
          </ListItem>
          <ListItem>
            <ListIcon as={MdFeedback} color="white" />
            Feedback
          </ListItem>
          <ListItem>
            <ListIcon as={MdSettings} color="white" />
            Settings
          </ListItem>
        </List>
      )}
    </Box>
  );
};

export default Sidebar;
