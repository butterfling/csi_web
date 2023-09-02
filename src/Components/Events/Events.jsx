import React, { useState } from "react";
import img1 from "./4f4c466ddd65c6fcdce199d384cbada3.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Events.css";
import CountUpAnimation from "../Counter/CountAnimation";
const Events = () => {
    const events = [
        {
            id: 1,
            name: "BGMI",
            type: "Gaming",
            date: "20/08/2021",
            last: "10:00 AM",
            venue: "Online",
            description: "BGMI Tournament it is tournament for BGMI. Please join",
            image: img1,
            link: "https://google.com",
        },
        {
            id: 2,
            name: "Another Event",
            type: "Some Type",
            date: "Some Date",
            last: "Some Last Date",
            venue: "Some Venue",
            description: "Some Description",
            image: img1,
            link: "https://example.com",
        },
    ];

    const [currentEventIndex, setCurrentEventIndex] = useState(0);

    const handleNextEvent = () => {
        setCurrentEventIndex((prevIndex) =>
            prevIndex === events.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevEvent = () => {
        setCurrentEventIndex((prevIndex) =>
            prevIndex === 0 ? events.length - 1 : prevIndex - 1
        );
    };

    const currentEvent = events[currentEventIndex];

    return (
        <div className="events px-4 md:px-10 grid place-content-center pb-10 bg-blend-screen  ">
            <div className=" place-content-center">
                <CountUpAnimation />
            </div>
            <div className="events__heading pt-20 pr-[25px]">
                <h1 className="text-4xl md:text-6xl text-center text-white pb-5 font-normal" style={{ color: "#00E0FF" }}>
                    Live Events
                </h1>
            </div>
            <div className="events__container pt-5 relative px-5 sm:px-10">
                <button
                    className="text-white font-semibold text-lg py-2 rounded-lg w-8 md:w-10 absolute left-0 top-1/2 transform -translate-y-1/2"
                    onClick={handlePrevEvent}
                >
                    <FaArrowLeft className="text-xl md:text-2xl" />
                </button>
                <button
                    className="text-white font-semibold text-lg py-2 px-3 rounded-lg w-8 md:w-10 absolute right-0 top-1/2 transform -translate-y-1/2"
                    onClick={handleNextEvent}
                >
                    <FaArrowRight className="text-xl md:text-2xl" />
                </button>
                <div className="events__card grid md:grid-cols-2   rounded-lg overflow-hidden">
                    <div className="events_card_image">
                        <img
                            src={currentEvent.image}
                            alt="event"
                            className=" event_img h-auto rounded-3xl"
                        />
                    </div>
                    <div className="events_card_details bg-gradient-to-b from-red-900 to-black text-white rounded-3xl p-4 md:p-8">
                        <h1 className="py-3 text-2xl md:text-4xl font-extrabold leading-8 text-center">
                            {currentEvent.name}
                        </h1>
                        <p className="text-sm md:text-base pt-2 pb-4 font-medium leading-6">
                            {currentEvent.description}
                        </p>
                        <div className="flex flex-row pb-2">
                            <h3 className="font-bold pr-1 text-sm md:text-base">
                                Venue:&nbsp;
                            </h3>
                            <h3 className="text-md md:text-lg">{currentEvent.venue}</h3>
                        </div>
                        <div className="flex flex-row pb-2">
                            <h3 className="font-bold pr-1 text-sm md:text-base">
                                Date:&nbsp;
                            </h3>
                            <h3 className="text-md md:text-lg">{currentEvent.date}</h3>
                        </div>
                        <div className="flex flex-row pb-3">
                            <h3 className="font-bold pr-1 text-sm md:text-base">
                                Last date to register:&nbsp;
                            </h3>
                            <h3 className="text-md md:text-lg">{currentEvent.last}</h3>
                        </div>
                        <Link to={currentEvent.link} className="pt-2 flex flex-row">
                            <button className="border w-24 md:w-32 h-8 border-neutral-200 rounded-lg">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="events__heading pt-20 pr-[25px]">
                <h1 className="text-4xl md:text-6xl text-center text-white pb-5 font-normal" style={{ color: "#00E0FF" }}>
                    Upcoming Events
                </h1>
            </div>
            <div className="events__container pt-5 relative px-5 sm:px-10">
                <button
                    className="text-white font-semibold text-lg py-2 rounded-lg w-8 md:w-10 absolute left-0 top-1/2 transform -translate-y-1/2"
                    onClick={handlePrevEvent}
                >
                    <FaArrowLeft className="text-xl md:text-2xl" />
                </button>
                <button
                    className="text-white font-semibold text-lg py-2 px-3 rounded-lg w-8 md:w-10 absolute right-0 top-1/2 transform -translate-y-1/2"
                    onClick={handleNextEvent}
                >
                    <FaArrowRight className="text-xl md:text-2xl" />
                </button>
                <div className="events__card grid md:grid-cols-2   rounded-lg overflow-hidden">
                    <div className="events_card_image">
                        <img
                            src={currentEvent.image}
                            alt="event"
                            className=" event_img h-auto rounded-3xl"
                        />
                    </div>
                    <div className="events_card_details bg-gradient-to-b from-red-900 to-black text-white rounded-3xl p-4 md:p-8">
                        <h1 className="py-3 text-2xl md:text-4xl font-extrabold leading-8 text-center">
                            {currentEvent.name}
                        </h1>
                        <p className="text-sm md:text-base pt-2 pb-4 font-medium leading-6">
                            {currentEvent.description}
                        </p>
                        <div className="flex flex-row pb-2">
                            <h3 className="font-bold pr-1 text-sm md:text-base">
                                Venue:&nbsp;
                            </h3>
                            <h3 className="text-md md:text-lg">{currentEvent.venue}</h3>
                        </div>
                        <div className="flex flex-row pb-2">
                            <h3 className="font-bold pr-1 text-sm md:text-base">
                                Date:&nbsp;
                            </h3>
                            <h3 className="text-md md:text-lg">{currentEvent.date}</h3>
                        </div>
                        <div className="flex flex-row pb-3">
                            <h3 className="font-bold pr-1 text-sm md:text-base">
                                Last date to register:&nbsp;
                            </h3>
                            <h3 className="text-md md:text-lg">{currentEvent.last}</h3>
                        </div>
                        <Link to={currentEvent.link} className="pt-2 flex flex-row">
                            <button className="border w-24 md:w-32 h-8 border-neutral-200 rounded-lg">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;