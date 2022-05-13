import React from 'react';
import classes from './ControlPanel.module.css';

const ControlPanel = ({activeButton, setIsActive, setActiveButton}) => {

    const handleButtonClick = (index) => {
        setActiveButton(index);
        setIsActive(false);
      }

    return(
        <div className={classes.controlPanel}>
          {["Work", "Short Break", "Long Break"].map( (el, id) => {
            return(
              <button onClick={() => handleButtonClick(id)} 
                className={activeButton === id ? `${classes.controlPanel__button} ${classes.controlPanel__button_active}` : `${classes.controlPanel__button}`} 
                key={id}>{el}</button>
            )
          })}
        </div>
    );
};

export default ControlPanel;