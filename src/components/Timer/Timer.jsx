import React from 'react';
import classes from './Timer.module.css';

const Timer = ({getProperTime, time, isActive, setIsActive, progressCircle, initialTime, setTime}) => {

    const resetTimer = () => {
        setTime(initialTime);
        setIsActive(false);
    }

    const toggleClock = () => {
        setIsActive(!isActive)
    } 

    return(
        <div className={classes.timer}>
          <div style={ {background: `conic-gradient(#b85600 ${progressCircle}%, transparent ${progressCircle}%)`}} className={classes.timer__outerCircle}>
            <div className={classes.timer__innterCircle}>
              <div className={classes.clock}>
                <div className={classes.clock__body}>
                  <h3>{getProperTime(time)}</h3>
                </div>
                <div className={classes.clock__start}>
                  <button onClick={toggleClock}>{isActive ? "Pause" : "Start"}</button>
                </div>
                {time === 0 && <button onClick={resetTimer} className={classes.clock__reset}>Reset</button>}
              </div>
            </div> 
          </div>
        </div>
    );
};

export default Timer;