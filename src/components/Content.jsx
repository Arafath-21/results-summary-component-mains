import React from 'react'
import memory from '../assets/images/icon-memory.svg';
import reaction from '../assets/images/icon-reaction.svg';
import verbal from '../assets/images/icon-verbal.svg';
import visual from '../assets/images/icon-visual.svg';

function Content() {
  return <>
    <div className="col-md-6 result text-center col-md-6">
      <h2>Your Result</h2>
      <div className="over-circle">        
        <div className="circle">76 <br /> <span><p>of 100</p></span></div>
      </div>
      <div className='greeting'>
        <h1>Great</h1>
      </div>
      <div className='description'>
        <p>Your performance exceed 65% of the people conducting the test here!</p>
      </div>
    </div>
    <div className="col-md-6 col-md-6 result-1">
      <h2>Summary</h2>
      <div className='icons'>
        <div className='icons-gtn'>
          <button className="btn reaction  d-flex justify-content-between align-items-center">
            <div className=''>
              <img src={reaction} alt="Reaction Icon" />
              <span>Reaction</span>
            </div>            
            <span>80/100</span>
          </button>  
        </div>
        <div className="icons-gtn">
          <button className="btn memory  d-flex justify-content-between align-items-center">
            <div className='img'>
              <img src={memory} alt="Memory Icon" />Memory              
            </div>
            <span className='res'>92/100</span>
          </button>  
        </div>
        <div className="icons-gtn">
          <button className="btn verbal  d-flex justify-content-between align-items-center">
            <div className=''>
              <img src={verbal} alt="Verbal Iccon" />
              Verbal
            </div>
            <span>61/100</span>
          </button> 
        </div>
        <div className="icons-gtn">
          <button className="btn visual  d-flex justify-content-between align-items-center">
            <div className=''>
              <img src={visual} alt="Visual Icon" />
              Visual
            </div>
            <span>73/100</span>
          </button>
        </div>
      </div>
      <button className='btn final-btn'>Continue</button>
    </div>
  </>
}

export default Content