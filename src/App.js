import React from 'react';
import './App.css';
import './style/css/main.css';


import { MdPlayCircleOutline,MdPauseCircleOutline,MdReplay,MdClear,MdAddCircleOutline,MdPlayArrow,MdDone,MdHome,MdInsertChart,MdSettings,MdSubject,MdFreeBreakfast } from 'react-icons/md';



// import styled from 'styled-component';

const wrapperStyle = {
  'display':'flex',
  'flexDirection':'row',
  'height':'100vh'
}

const mainStyle= {
  'display':'flex',
  'justifyContent:':'space-around',
  'flex-wrap':'wrap',
  'backgroundColor':'#1B2A3B',
  'flexBasis':'55%',
  'flexGrow':'1',
  'color':'#fff',
};

const subStlye= {
  'backgroundColor':'#283645',
  'flexGrow':'1',
  'flexBasis':'45%'
};

const barStyle= {
  'display':'flex',
  'backgroundColor':'#0D151D',
  'flexBasis':'5%',
  'color':'#fff',
  'flexDirection':'column',
  'justifyContent': 'start',
  'alignItems': 'center',
  'paddingTop':'2vh'
};

const barIconStyle= {
  'paddingTop':'10px'
}

const Task = ({text,done=false}) => {
  const taskWrapperStyle = {
    backgroundColor:'#1B2A3B',
    margin:'5px',
    padding:'5px',
    borderRadius:'5%',
    width:'20vw',
    wordWrap:'break-word'
  }
  const taskStyle = !done ? 
                    {
                        'color':'#fff'
                    } :
                    {
                        'color':'#fff',
                        'opacity':'0.5',
                        'textDecoration':'line-through'
                    };
  return(
    <div style={taskWrapperStyle}>
      { !done ? <MdPlayArrow color="f4d035"/> : <MdDone color="f4d035"/> } {'  '}
      <span style={taskStyle}>{text}</span>
    </div>
  )
}


const App = () => {
  return (
      <div className="wrapper" style={wrapperStyle}>
        {/** 時鐘區塊 */}
        <div className="main-div" style={mainStyle}>
                  <div className="main-info-block">
                    <div className="start-time">
                        <p className="main-info-title">2019/07/20</p>
                        <p className="main-info-value">06:30</p>
                    </div>

                    <div className="task-list">
                        <p className="main-info-title">Done / To Do</p>
                        <p className="main-info-value">2/10</p> 
                    </div>
                  </div>

                  <div className="clock-wrapper">
                    <div className="clock">
                      <div className="task-name">-Start Work-</div>
                      <div className="timer">25:00</div>
                    </div>
                  </div>

                  <div className="btn-group">
                      <MdClear  size="50px" color="#fff"/>
                      <MdPlayCircleOutline  size="80px" color="#fff"/>
                      <MdReplay  size="50px" color="#fff"/>
                  </div>
        </div>
        
        {/** 任務控管區塊 */}
        <div className="sub-div" style={subStlye}>    
              <div className="add-task-btn-wrapper">          
                  <button className="add-task-btn"><MdAddCircleOutline />Add Task</button>
              </div>
              <div className="todo-block">
                  <h2 className="todo-title">To Do</h2>
                    <Task text="1.The first task to do today" />
                    <Task text="2.The second task to do today" />
                    <Task text="3.The third task to do today" />

                  <h2 className="todo-title">Done</h2>
                    <Task done={true} text="1.The first task to do today" />
                    <Task done={true} text="2.The second task to do today" />
                    <Task done={true} text="3.The third task to do today" />
              </div>
        </div> 
        
        {/** icon選單 */}
        <div className="side-bar" style={barStyle}>   
            <MdHome color="#fff" size="36px" style={barIconStyle}/>
            <MdSubject color="#fff" size="36px" style={barIconStyle}/>
            <MdFreeBreakfast color="#fff" size="36px" style={barIconStyle}/>
            <MdInsertChart color="#fff" size="36px" style={barIconStyle}/>
            <MdSettings color="#fff" size="36px" style={barIconStyle}/>
            <p>POMODORO</p>
        </div>
     
      </div>
  );
}

export default App;
