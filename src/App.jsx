import { useEffect, useState } from 'react';
import './App.css';
import { FaCog } from "react-icons/fa";
import Modal from './components/Modal/Modal';
import ControlPanel from './components/ControlPanel/ControlPanel';
import Timer from './components/Timer/Timer';

function App() {

  const [activeButton, setActiveButton] = useState(0);
  const [progressCircle, setProgressCircle] = useState(0);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [workTime, setWorkTime] = useState(60 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(10 * 60);
  const [longBreakTime, setLongBreakTime] = useState(30 * 60);
  const [initialTime, setInitialTime] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect( () => {
    setProgressCircle(time / (initialTime / 100))
  }, [time, setProgressCircle])

  useEffect( () => {
    switch(activeButton) {
      case 0: setTime(workTime);
              setInitialTime(workTime);
              break;
      case 1: setTime(shortBreakTime);
              setInitialTime(shortBreakTime);
              break;
      case 2: setTime(longBreakTime);
              setInitialTime(longBreakTime);
              break;
      default: setTime(workTime);
               setInitialTime(workTime);
               break;
    }
  }, [activeButton, workTime, shortBreakTime, longBreakTime])

  useEffect( () => {
    if(isActive && time > 0){
      const interval = setInterval( () => {
        setTime( time => time - 1)
      }, 1000)
  
      return () => clearInterval(interval);
    }
  }, [time, isActive])

  const onModalOpen = () => {
    setIsOpen(true);
  }

  const getProperTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  return (
    <div className="App">
      <div className="container">
        <Modal 
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          workTime={workTime}
          shortBreakTime={shortBreakTime}
          longBreakTime={longBreakTime}
          setWorkTime={setWorkTime}
          setShortBreakTime={setShortBreakTime}
          setLongBreakTime={setLongBreakTime}
        />
        <div className="title">
          <h1>Pomodoro</h1>
        </div>
        <ControlPanel 
          activeButton={activeButton}
          setIsActive={setIsActive}  
          setActiveButton={setActiveButton}
        />
        <Timer 
          getProperTime={getProperTime}
          time={time}
          isActive={isActive}
          setIsActive={setIsActive}
          progressCircle={progressCircle}
          initialTime={initialTime}
          setTime={setTime}
        />
        <div className="configIcon" onClick={onModalOpen}>
          <FaCog />
        </div>
      </div>
    </div>
  );
}

export default App;
