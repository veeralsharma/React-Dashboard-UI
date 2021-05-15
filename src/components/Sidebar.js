import React from 'react'
import '../css/Sidebar.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import TuneIcon from '@material-ui/icons/Tune';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import InboxIcon from '@material-ui/icons/Inbox';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import OpacityIcon from '@material-ui/icons/Opacity';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AppsIcon from '@material-ui/icons/Apps';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-head container">
                <h2>Create New</h2>
            </div>
            <div className="sidebar-nav">
                <div className="nav-box container">
                    <ul className="sidebarlist">
                        <li><DashboardIcon /> Dashboard</li>
                        <li><TuneIcon />Slider Type</li>
                        <li><FileCopyIcon/> Page Layout</li>
                    </ul>
                </div>
                <div className="nav-box container">
                    <ul className="sidebarlist">
                        <li><InboxIcon/> Inbox</li>
                        <li><ConfirmationNumberIcon/> Ticket</li>
                        <li><HomeWorkIcon/> Extra</li>
                    </ul>
                </div>
                <div className="nav-box container">
                    <ul className="sidebarlist">
                        <li><OpacityIcon/> Ui Elements</li>
                        <li><RecentActorsIcon/> Cards</li>
                        <li><AppsIcon/> Components</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
