import React from 'react';
import classes from './Modal.module.css';
import { motion, AnimatePresence } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import ModalForm from './ModalForm/ModalForm';

const Modal = ({setIsOpen, isOpen, workTime, shortBreakTime, longBreakTime, setWorkTime, setShortBreakTime, setLongBreakTime}) => {

    const onModalClose = () => {
        setIsOpen(false);
      }


    return(
        <div className="modal">
        <>
          <AnimatePresence>
          {isOpen && (
            <>
            <div className={classes.background} onClick={e => {
              e.stopPropagation()
              onModalClose()
            }}></div>
            <div className={classes.modalCointainer}>
              <motion.div className={classes.modalContent} 
              initial={{y:"-100vh", scale: 0}} 
              animate={{y: 0, scale: 1}} 
              exit={{y:"-100vh", scale: 0}}>
                <div className={classes.modalContent__header}>
                  <h3 className={classes.modalContent__title}>Settings</h3>
                  <button className={classes.modalContent__closeButton} 
                    onClick={onModalClose}><FaWindowClose fontSize="48px"/></button>
                </div>
                <div className="modalContent__body">
                <ModalForm 
                  onModalClose={onModalClose}
                  setLongBreakTime={setLongBreakTime}
                  setShortBreakTime={setShortBreakTime}
                  setWorkTime={setWorkTime}
                  workTime={workTime}
                  shortBreakTime={shortBreakTime}
                  longBreakTime={longBreakTime}
                />
                </div>
              </motion.div>
            </div>
            </>
          )}
          </AnimatePresence>
        </>
      </div>
    );
};

export default Modal;