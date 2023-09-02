import React from 'react';
import './galleryEvent.css'; // Make sure to adjust the path to your CSS file
import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';

function EventsPage(props) {
    // let [year]=props;
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    console.log(props.year)
    return (
        <section className="dark">
            <div className="container py-4">
                {/* <h1 className="h1 text-center" id="pageHeaderTitle">Events</h1> */}
                {props.year.map(item => (

                    <article className={`postcard dark ${item['color']}`}>
                        <a className="postcard__img_link" href="/">
                            <img className="postcard__img" src="https://upescsi.in/assets/imgs/Valorant%20Touranment.jpeg"
                                alt="Image Title" />
                        </a>
                        <div className="postcard__text">
                            <h1 className={`postcard__title ${item.color}`}><a href="/">{item.eventname}</a></h1>
                            <div className="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>{item.evantDate}
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">{item.description}</div>
                            <ul className="postcard__tagbox">
                                {/* <!-- <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                        <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li> --> */}
                                <li className={`tag__item play ${item.color}`}>
                                    <button onClick={onOpenModal}><i className="fas fa-play mr-2"></i>Gallery</button>
                                </li>
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
            <Modal open={open} onClose={onCloseModal} center classNames={{
                root: "ok"
            }}>
                <ImageCarousel />
            </Modal>
        </section>
    );
}

export default EventsPage;
