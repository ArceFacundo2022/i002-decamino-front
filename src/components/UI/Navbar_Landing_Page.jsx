import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  // NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import logo from "/logosinFondo.png";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Navbar_Landing_Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Inicio",
      href: "/Home",
      isActive: true
    },
    {
      name: "Nosotros",
      href: "/Home",
      isActive: false
    },
    {
      name: "Contacto",
      href: "/Home",
      isActive: false
    },
    {
      name: "Mi ruta",
      href: "/Home",
      isActive: false
    },
    {
      name: "Iniciar sesión",
      href: "/login",
      isActive: false
    },
  ];

  return (
    <Navbar
      position="static"
      className="w-full bg-[#0a1200]/90 text-white"
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "pb-1",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-freshMint",
          "data-[active=true]:text-greenT",
          "data-[active=false]:text-white"
        ],
        menu:"bg-transparent scrollbar-hide py-0 px-2"
      }}

    >
      <NavbarContent className="flex justify-between items-center">
        <NavbarBrand>
          <img className="w-[60px] h-[56px]" src={logo} alt="DeCamino" />
          <p className="font-bold font-nunito text-2xl md:text-3xl">DeCamino</p>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="min-[875px]:hidden ml-auto"
        />
      </NavbarContent>

      <NavbarContent className="hidden min-[875px]:flex">
        {menuItems.map((item) => (
          <NavbarItem className="px-1" key={item.name} isActive={item.isActive}>
            <Link color="foreground" to={item.href}>
                <p className="font-nunito hover:text-greenT">{item.name}</p>
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Link to={"/Register"}>
            <Button
              className="font-nunito text-white bg-greenT md:w-[150px] text-md"
              radius="full"
            > 
                Registrarme
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* MENU HAMBURGUESA */}
      <NavbarMenu>
       <Sidebar  />
      </NavbarMenu>
      
    </Navbar>
  );
};
