import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import Modal from 'react-modal';


// Set the app element for the modal (optional)
Modal.setAppElement('#root');

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal visibility
    const [isSplashVisible, setIsSplashVisible] = useState(true);

    const handleSplashEnd = () => {
        setIsSplashVisible(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Open modal on form submission
        setModalIsOpen(true);
        // Clear form fields
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    return (
        <>
           
            {/* Contact Form Section */}
            <div className='lg:flex gap-5  lg:px-10 bg-[#1290ca]/10  py-16'>
                <div className='flex justify-center items-center bg-white shadow-lg rounded-lg text-center pb-10 w-full font-nunito'>
                    <div className="p-4 w-3/4 lg:w-full  ">
                        <form className='md:p-10' onSubmit={handleSubmit}>
                            <div className='text-start py-5'>
                                <p className='text-[#384b98] text-[#1290ca]/70 font-medium text-xl'>Have Questions</p>
                                <p className='text-gray-800 font-bold text-xl md:text-2xl lg:text-3xl xl:text-3xl'>Send us a message</p>
                            </div>

                            <div className="mb-4 w-full">
                                <input
                                    className="bg-gray-100 appearance-none focus:outline-black border rounded w-full py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Name*"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='md:flex gap-8'>
                                <div className="mb-4 md:w-1/2">
                                    <input
                                        className="bg-gray-100 focus:outline-black appearance-none border rounded w-full py-3 px-3 lg:py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4 md:w-1/2">
                                    <input
                                        className="bg-gray-100 focus:outline-black appearance-none border rounded w-full py-3 px-3 lg:py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <textarea
                                    className="bg-gray-100 focus:outline-black appearance-none border rounded w-full py-3 pb-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    name="message"
                                    placeholder="Your message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex justify-start">
                                <button
                                    className="bg-[#1290ca]/90 hover:bg-[#1290ca] w-full flex text-center justify-center gap-2 items-center text-white hover:text-black font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    <FaPaperPlane />
                                    Get in Touch
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Static Contact Info Section */}
                <div className='space-y-4 px-10 pb-10 py-5 bg-white shadow-lg rounded-lg  lg:w-1/2'>
                    <div className='space-y-5'>
                        <p className='text-4xl font-bold pr-[10rem] text-[#1290ca] '>Contact Details</p>
                        <p className='text-gray-600 font-semibold'>Get in touch with us for any questions about our industries or projects.</p>
                    </div>
                    <div>
                        <p className='text-xl font-bold text-[#1290ca]/90 mb-1'>Office :</p>
                        <p className='text-gray-600 font-semibold'>OSTECH Machines Pvt Ltd Plot no.121 Vibrant Business Park, GIDC, Vapi-396191, Gujarat</p>
                    </div>
                    <div>
                        <p className='text-xl font-bold text-[#1290ca]/90  mb-1'>Email us :</p>
                        <p className='text-gray-600 font-semibold'>
                            <span>rajneesh@ostech.in</span> <br />
                            <span>kamal.kaushik@ostech.in</span>
                        </p>
                    </div>
                    <div>
                        <p className='text-xl font-bold text-[#1290ca]/90 mb-1'>Call Support :</p>
                        <p className='text-gray-600 font-semibold'>+91 99783 88388</p>
                    </div>
                </div>
            </div>

            {/* Static Google Map */}
           <div className='px-10 bg-[#1290ca]/10 pb-7'>
           <iframe
                src="https://www.google.com/maps/embed?pb=...your-google-map-embed-link..."
                height="450"
                className='border-0 w-full'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
           </div>

            {/* Modal for successful submission */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Submission Successful"
                className="fixed inset-0 flex items-center justify-center z-50 p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="bg-[#f5faf7ed] p-6 rounded-lg shadow-lg w-full max-w-md relative">
                    <h2 className="text-2xl font-bold mb-4 text-green-700">Thank You!</h2>
                    <p className="mb-4">Your message has been successfully sent.</p>
                    <p className='mb-4'>We will get back to you soon.</p>
                    <button
                        onClick={() => setModalIsOpen(false)}
                        className=" text-black px-4 py-2  absolute top-2 right-2"
                    >
                        <FaTimes size={25} />
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default ContactForm;
