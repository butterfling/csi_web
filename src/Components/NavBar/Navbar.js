import React, { useRef, useState } from 'react'
import logo from "../Images/logo1.png";
import { NavLink } from 'react-router-dom';
import './style.css'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export default function () {
    const box = useRef();
    const inBox = useRef();

    const [boxStyle, setBoxStyle] = useState({ width: "80px" });
    const [smallBoxStyle, setSmallBoxStyle] = useState({ transform: "translateX(0%)" })
    const [bigBoxStyle, setBigBoxStyle] = useState({ transform: "translateX(-50vw)" })
    const move = () => {
        setBoxStyle({ width: "max-content" });
        setSmallBoxStyle({ transform: "translateX(-100%)", position: "absolute" })
        setBigBoxStyle({ transform: "translateX(0%)" })
    }

    const backMove = () => {
        setBoxStyle({ width: "80px" });
        setSmallBoxStyle({ transform: "translateX(0%)", position: "relative" })
        setBigBoxStyle({ transform: "translateX(-50vw)" })


    }
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);




    return (
        <>
            <button className='ham-btn' onClick={onOpenModal}><i class="fa-solid fa-bars fa-2xl"></i></button>
            <div className={`navbar-main container`} onMouseOver={move} style={boxStyle} onMouseLeave={backMove}>

                <div className='nav-vert-out' style={smallBoxStyle}>

                    <div className='navbar-vertical' >
                        <div className='logo-img'>
                            <img src={logo} className='logo'></img>
                        </div>
                        <span className='rotate-text-container'><h1 className='rotate-text' style={{ fontSize: '25px' }}>UPES-CSI STUDENT CHAPTER</h1></span>
                    </div>
                </div>
                <div className={`navbar-inner d-flex flex-column align-items-center justify-content-center`} style={bigBoxStyle}>
                    <div className='logo-img'>
                        <img src={logo} className='logo'></img>
                    </div>

                    <div className='list-items'>
                        <ul className='container d-flex flex-column align-items-start gap-1 ul-contain'>
                            <li><NavLink to="/" onClick={backMove} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><i className="fa-solid fa-house"></i><span class="list-item-text">Home</span></NavLink></li>
                            <li><NavLink to="/about" onClick={backMove} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><i class="fa-solid fa-user"></i><span class="list-item-text">About Us</span></NavLink></li>
                            <li><NavLink to="/events" onClick={backMove} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><i class="fa-solid fa-calendar-days"></i><span class="list-item-text">Events</span></NavLink></li>
                            <li><NavLink to="/team" onClick={backMove} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><i class="fa-solid fa-people-group"></i><span class="list-item-text">Team</span></NavLink></li>
                            <li><NavLink to="/contact" onClick={backMove} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><i class="fa-solid fa-phone"></i><span class="list-item-text">Contact Us</span></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Modal open={open} onClose={onCloseModal} left blockScroll={false} classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
                root: "pk"
            }}>
                <div className={`navbar-inner d-flex flex-column align-items-center justify-content-center`}>
                    <div className='logo-img'>
                        <img src={logo} className='logo'></img>
                    </div>

                    <div className='list-items'>
                        <ul className='container d-flex flex-column align-items-start gap-1 ul-contain'>
                            <li><NavLink to="/" onClick={onCloseModal} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><i className="fa-solid fa-house"></i>Home</NavLink></li>
                            <li><NavLink to="/about" onClick={onCloseModal} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><i class="fa-solid fa-user"></i>About Us</NavLink></li>
                            <li><NavLink to="/events" onClick={onCloseModal} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><i class="fa-solid fa-calendar-days"></i>Events</NavLink></li>
                            <li><NavLink to="/team" onClick={onCloseModal} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><i class="fa-solid fa-people-group"></i>Team</NavLink></li>
                            <li><NavLink to="/contact" onClick={onCloseModal} className={({ isActive }) => (isActive ? 'active' : 'inactive')}><i class="fa-solid fa-phone"></i>Contact US</NavLink></li>
                        </ul>
                    </div>
                </div>
            </Modal>

        </>
    )
}
