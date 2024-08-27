import React, { useState } from 'react';
import { Nav, Navbar, Modal, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Img1 from '../assets/Img1.jpg'; // Update the path if needed

export default function Navigation() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About', to: '/' },
    { name: 'Education', to: '/education' },
    { name: 'Experience', to: '/experience' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Achievements', to: '/achievements' },
    { name: 'Contact', to: '/contact' },
  ];

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        variant='dark'
        expand='lg'
        className='fixed-top'
        id='sideNav'
        expanded={isNavbarOpen}
      >
        <Navbar.Brand as={Link} to='/'>
          <div className='d-flex justify-content-center align-items-center p-2'>
            <span className='d-block d-lg-none text-uppercase text-center font-size-large'>
              MANOJ K
            </span>
          </div>

          <span className='d-none d-lg-block'>
            <motion.img
              className='img-fluid img-profile rounded mb-2'
              src={Img1}
              alt='Manoj'
              drag
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              dragElastic={0.1}
              onClick={handleShowModal} // Trigger modal on click
            />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={handleToggle} />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            {navItems.map((navItem, index) => (
              <Nav.Link
                as={Link}
                to={navItem.to}
                key={index}
                onClick={closeNavbar}
                className={location.pathname === navItem.to ? 'active' : ''}
              >
                {navItem.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Modal for Image */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Profile Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={Img1}
            alt='Manoj'
            className='modal-image' 
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
