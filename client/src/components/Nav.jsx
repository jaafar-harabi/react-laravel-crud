import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,

} from "@material-tailwind/react";
import { useEffect, useState } from 'react';

import {Link} from 'react-router-dom'
import {logo} from '../assets'



const Nav = () => {

  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        color="black"
        className="p-1 font-bold"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        color="black"
        className="p-1 font-bold"
      >
        <Link to="/add" className="flex items-center mx-10">
          Add
        </Link>
      </Typography>
      <Typography
        as="li"
        color="black"
        className="p-1 font-bold"
      >
        <Link to="/view" className="flex items-center">
          View
        </Link>
      </Typography>
      
    </ul>
  );

  
  return (
    

<div className="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
  <Navbar className="sticky top-0 z-10  rounded-none px-4 py-2 lg:px-8 lg:py-4 mx-auto">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img alt="" src={logo} className="w-32 h-16" />
          </Typography>
          <div className="flex items-center gap-4 mx-auto">
            <div className="mr-4 hidden lg:block ">{navList}</div>
          
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        
        </MobileNav>
      </Navbar>
    </div>
  )
}

export default Nav


