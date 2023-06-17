import React, { useState } from "react";
import "./Sidebar.css";
import {TocRounded} from "@mui/icons-material";
import Item from "./Item";
import {motion} from 'framer-motion'
import Vector from "../../assets/icons/Vector.svg";
import About from "../../assets/icons/About.svg";
import Contests from "../../assets/icons/Contests.svg";
import Orders from "../../assets/icons/Orders.svg";
import Favourites from "../../assets/icons/Favourites.svg";
import Payments from "../../assets/icons/Payments.svg";
import Winners from "../../assets/icons/Winners.svg";
import Settings from "../../assets/icons/Settings.svg";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  const sideContainerVariants = {
    true:{
    },
    false:{
      transition:{
        delay:0.6
      }
    }
  }

   const sidebarVariants = {
     true: {
      width:'15rem',
     },
     false: {
       width: "5rem",
       transition: {
         delay: 0.4,
       },
     },
   };

   const profileVariants = {
    true:{
      alignSelf: 'center',
      width: '4rem',
    },
    false:{
      alignSelf: 'flex-start',
      marginTop: '1rem',
      width: '3rem',
    }
   };

   const logoVariants = {
    true: {
      opacity: 1,
    },
    false:{
      opacity: 1,
    }
   }
  return (
    <motion.div
      data-open={open}
      variants={sideContainerVariants}
      initial={`${open}`}
      animate={`${open}`}
      className="sidebar-container"
    >
      <motion.div
        initial={`${open}`}
        animate={`${open}`}
        variants={sidebarVariants}
        className="sidebar"
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            rotate: 180,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transition: {
              delay: 0.2,
              duration: 0.4,
            },
          }}
          onClick={handleToggle}
          className="lines_icon"
        >
          <TocRounded />
        </motion.div>
        <div className="main">
          <motion.div
            className="logo"
            initial={`${open}`}
            animate={`${open}`}
            variants={logoVariants}
          >
            <img src="../../src/assets/images/logo1.svg" alt="logo" />
            <h4>SharkBuz</h4>
          </motion.div>
          {/* <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255,255,255,0.3)",
              boxShadow: "0 8px 32px 0 #444543",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border:"1px solid rgba(255,255,255,0.18)",
              cursor: "pointer"
            }}
            className="profile"
          >
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="menu"
            />
          </motion.div> */}
        </div>
        <div className="groups">
          <div className="group">
            <Item icon={Vector} name="Home" />
            <Item icon={About} name="About" />
            <Item icon={Contests} name="Contests" />
            <Item icon={Orders} name="Orders" />
            <Item icon={Favourites} name="Favourites" />
            <Item icon={Payments} name="Payments" />
            <Item icon={Winners} name="Winners" />
            <div className="settings">
              <Item icon={Settings} name="Settings" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;


