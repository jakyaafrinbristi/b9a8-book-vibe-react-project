import React from 'react';

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
 
} from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
     
 
        <NavLink to={"/"} 
         className={({ isActive }) =>
         isActive
           ? "text-green-500 font-bold underline"
        
           : "flex items-center"
       }>
       
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        
        <NavLink to={"/listed"}  className={({ isActive }) =>
         isActive
           ? "text-green-500 font-bold underline"
        
           : "flex items-center"
       }>
         Listed Books
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
       
        <NavLink to="/read"  className={({ isActive }) =>
         isActive
           ? "text-green-500 font-bold underline"
        
           : "flex items-center"
       }>
          Pages To Read
        </NavLink>
      </Typography>
      
    </ul>
  );
const NavvBar = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
    return (
        <Navbar className="mx-auto max-w-7xl py-2 lg:px-8 lg:py-4 shadow-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-bold text-2xl"
        >
         Book Vibe
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
        <Button
            variant="gradient"
            color="green"
            size="md"
            className="hidden lg:inline-block"
          >
            <span>Sign in</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            size="md"
            className="hidden lg:inline-block"
          >
            <span>Sign Up</span>
          </Button>
        </div>
        
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" color="blue" className=" ">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
    );
};

export default NavvBar;