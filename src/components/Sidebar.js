import React from "react";
import "../css/Sidebar.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import TuneIcon from "@material-ui/icons/Tune";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import InboxIcon from "@material-ui/icons/Inbox";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import OpacityIcon from "@material-ui/icons/Opacity";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import AppsIcon from "@material-ui/icons/Apps";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-head container">
        <h2>Create New</h2>
      </div>
      <div className="sidebar-nav">
        <div className="nav-box container">
          <div className="navlink">
            <div className="icondiv">
              <DashboardIcon className="sidebar-icon" /> Dashboard
            </div>
            <div className="icondiv">&gt;</div>
          </div>
          <div className="navlink">
            <div className="icondiv">
              <TuneIcon className="sidebar-icon" />
              Slider Type
            </div>
            <div className="icondiv">&gt;</div>
          </div>
          <div className="navlink">
            <div className="icondiv">
              <FileCopyIcon className="sidebar-icon" /> Page Layout
            </div>
            <div className="icondiv">&gt;</div>
          </div>
        </div>
        <div className="nav-box container">
          <div className="navlink">
            <div className="icondiv">
              <InboxIcon className="sidebar-icon" /> Inbox
            </div>
            <div className="icondiv">&gt;</div>
          </div>
          <div className="navlink">
            <div className="icondiv">
              <ConfirmationNumberIcon className="sidebar-icon" /> Ticket
            </div>
            <div className="icondiv">&gt;</div>
          </div>
          <div className="navlink">
            <div className="icondiv">
              <HomeWorkIcon className="sidebar-icon" /> Extra
            </div>
            <div className="icondiv">&gt;</div>
          </div>
        </div>
        <div className="nav-box container">
          <div className="navlink">
            <div className="icondiv">
              <OpacityIcon className="sidebar-icon" /> Ui Elements
            </div>
            <div className="icondiv">&gt;</div>
          </div>
          <div className="navlink">
            <div className="icondiv">
              <RecentActorsIcon className="sidebar-icon" /> Cards
            </div>
            <div className="icondiv">&gt;</div>
          </div>
          <div className="navlink">
            <div className="icondiv">
              <AppsIcon className="sidebar-icon" /> Components
            </div>
            <div className="icondiv">&gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
