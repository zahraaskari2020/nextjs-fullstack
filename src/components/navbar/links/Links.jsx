"use client";

import styles from './links.module.css';
import NavLink from "./navLink/navLink";
import { useState } from "react";
import Image from "next/image";

const Links = () => {

  const[open, setOpen] = useState(false);

      // TEMPORARY
      const session = true;
      const isAdmin = true;

  const links = [
      {
        title: "Homepage",
        path: "/",
      },
      {
        title: "About",
        path: "/about",
      },
      {
        title: "Contact",
        path: "/contact",
      },
      {
        title: "Blog",
        path: "/blog",
      },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.links}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}{
            session ? (
              <>
                {
                  isAdmin && 
                    <NavLink item={{title:"Admin", path:"/admin"}} />
                }
                <button className={styles.logout}>LogOut</button>
              </>
            ) : (
              <NavLink item={{title:"Login", path:"/login"}} />
            )
          }
      </div>
      {/* <button className={styles.menuButton} onClick={()=> setOpen((prev)=> !prev)}>Menu</button> */}
      <Image className={styles.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)} />
      {
        open && <div className={styles.mobileLinks}>
          {links.map((link)=>(
              <NavLink item={link} key={link.title} />
          ))}
        </div>
      }
    </div>
  )
}

export default Links
