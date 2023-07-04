import { useState, useEffect, useRef } from 'react';
import './ApplicationModal.scss';
import ToggleButton from '../ToggleButton/ToggleButton';

const ApplicationModal = ({ closeApplication }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!modalRef.current.contains(event.target)) {
                closeApplication();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };

    }, [closeApplication]);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    job: '',
    phone: '',
    address: '',
    file: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div id="app-modal">
        <div id="application-content" ref={modalRef}>
            <h1>Fill This Form</h1>
            <small>'*' means required</small>

            <form onSubmit={handleSubmit}>
                <ToggleButton
                    title="Close"
                    className="app-close"
                    onClick={closeApplication}
                />

                <span>
                    <label htmlFor="name">Your Full Name</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Full Name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    />
                </span>

                <span>
                    <label htmlFor="email">Your Email Address</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email Address"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    />
                </span>

                <span>
                    <label htmlFor="job">Job Title</label>
                    <input
                    type="text"
                    name="job"
                    id="job"
                    placeholder="Job Title"
                    required
                    value={formState.job}
                    onChange={handleInputChange}
                    />
                </span>

                <span>
                    <label htmlFor="phone">Your Phone Number</label>
                    <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone Number"
                    required
                    value={formState.phone}
                    onChange={handleInputChange}
                    />
                </span>

                <span>
                    <label htmlFor="address">Your Address</label>
                    <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Your Address"
                    required
                    value={formState.address}
                    onChange={handleInputChange}
                    />
                </span>

                <span>
                    <label htmlFor="resume">Upload your Resumé / CV</label>
                    <small>Required file formats are .pdf, .docs, .docx only</small>
                    <input type="file" name="resume" id="resume" accept=".pdf, .docs, .docx" required />
                </span>

                <button type="button" id="app-submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
  );
};

export default ApplicationModal;
