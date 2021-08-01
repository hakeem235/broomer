import React, { useState, useRef, useEffect, useCallback } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Addjob = ({ isOpen, onClose, onEventAdded, showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 400,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const onSubmit = (event) => {
    event.perventDefault();
    onEventAdded({
      title,
      start,
      end,
    });
    onClose();
  };

  return (
    <>
      {showModal ? (
        <div className="Background" onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <fomr onSubmit={onSubmit}>
              <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <div>
                <label>Start Date</label>
                <Datetime value={start} onChange={(date) => setStart(date)} />
              </div>

              <div>
                <label>End Date</label>
                <Datetime value={end} onChange={(date) => setEnd(date)} />
              </div>

              <button type="submit">Add Job</button>
            </fomr>
            <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
          </animated.div>
        </div>
      ) : null}
    </>

    //     <Modal isOpen={isOpen} onRequestClose={onClose}>
    //     <fomr onSubmit={onSubmit}>
    //     <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>

    //     <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>

    //     <div>
    //         <label>Start Date</label>
    //     <Datetime value={start} onChange={date => setStart(date)}/>
    //     </div>

    //     <div>
    //         <label>End Date</label>
    //     <Datetime value={end} onChange={date => setEnd(date)}/>
    //     </div>

    //     <button type="submit">Add event</button>

    //     </fomr>
    // </Modal>
  );
};

export default Addjob;
