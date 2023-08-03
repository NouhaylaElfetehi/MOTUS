import './Game.css';
import React, { useRef , useEffect } from 'react';
import { BsBackspace } from "react-icons/bs"
import { AiOutlineEnter } from "react-icons/ai";
 import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as myfn from './AppFunctions.js';

function App() {
  const dataFetchedRef = useRef(false);
  
  useEffect(() => {
    if (dataFetchedRef.current) return;
    if(window.location.href.includes('dashboard')){
      dataFetchedRef.current = true;
      myfn.initialFunction(); 
      console.log("here");
    }
    
  }, []);

  //var statistics=JSON.parse(localStorage.getItem("statistics"));
  var statistics={"TotalPlayed":5,"Win":3,"Loss":2,"Streak":1,"MaxStreak":1,"Guess":[0,2,0,1,0,0]};
  //var statistics=localStorage.getItem("statistics");
  //console.log("statistics:"+statistics);

  return (
    
    <div className="App" tabIndex="0" onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => myfn.handleKeyDown(e.key)}>
      <div className="game-header">
      </div>

      {/* Settings Modal */}
      <div className="modal" id="settings-modal" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <div className="flex-div"></div>
              <h5 className="modal-title" id="exampleModalLabel">SETTINGS</h5>
              <div className="flex-div"></div>
              <button type="button" className="dismiss-button" data-bs-dismiss="modal" aria-label="Close"><AiOutlineClose/></button>
            </div>
            <div className="modal-body">
              <div className="settings-options">
                <div className="settings-options-texts">
                  <div>
                    Dark Theme
                  </div>
                  <div>
                   
                  </div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" onClick={myfn.themeButton} id="darkThemeSwitch"/>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>

      {/* Statistics Modal */}
      <div className="modal" id="statistics-modal" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header pb-0">
              <div className="flex-div"></div>
              <button type="button" className="dismiss-button" data-bs-dismiss="modal" aria-label="Close"><AiOutlineClose/></button>
            </div>
            <div className="modal-body pt-0">
              <div className="statistics-options">
                <div>
                  <h5 className="modal-title" id="exampleModalLabel">STATISTICS</h5>
                </div>
                <div className="stats-boxes">
                  <div className="stats-box">
                    <div className="stats-num">
                      { statistics.TotalPlayed }
                    </div>
                    <div className="stats-text">
                      Played
                    </div>
                  </div>
                  <div className="stats-box">
                    <div className="stats-num">
                      { eval( (statistics.Win /statistics.TotalPlayed) *100) }
                    </div>
                    <div className="stats-text">
                      Win %
                    </div>
                  </div>
                  <div className="stats-box">
                    <div className="stats-num">
                      { statistics.Streak }
                    </div>
                    <div className="stats-text">
                      Current Streak
                    </div>
                  </div>
                  <div className="stats-box">
                    <div className="stats-num">
                      { statistics.MaxStreak }
                    </div>
                    <div className="stats-text">
                      Max Streak
                    </div>
                  </div>
                </div>
                <div className="guessdiv mt-2 mb-1">
                  <h6 className="stats-title" id="exampleModalLabel">GUESS DISTRIBUTION</h6>
                  <div className="statsData">
                  { 
                  statistics.Guess.map((item,index) => (   
                    <div className='statsData-box'>
                      <div className='guess-num'>{index+1}</div>
                      {
                      item==0
                      ?
                      <div className='guess-val'>{item}</div>
                      :
                      <div className='guess-val guess-value'>{item}</div>
                      }

                    </div>
                  ))
                  }
                  </div>  
                  <div>
                  </div>                
                </div>
              </div>
              <div className="mt-1">
                Thanks For Playing
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="game-body">
        <h1 className="cool-title">Motus Game</h1>
        <div class="flex place-content-between mt-4 text-xs">
          <a class="text-slate-300 underline" href="https://github.com/NouhaylaElfetehi" target="_blank">
            Mon Git- Nouhayla Elfetehi
          </a>
        </div>
          <div className="Board-module">
            <div className="Board-module-board">
              <div className="board-row">
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
              </div>
              <div className="board-row">
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
              </div>
              <div className="board-row">
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
              </div>
              <div className="board-row">
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
              </div>
              <div className="board-row">
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
              </div>
              <div className="board-row">
                <div className="cube line6 col-2"></div>
                <div className="cube line6 col-2"></div>
                <div className="cube line6 col-2"></div>
                <div className="cube line6 col-2"></div>
                <div className="cube line6 col-2"></div>
              </div>
            </div>     
          </div>
          <div className="Keyboard-module">
            <div id="keyboard-cont">
                <div className="first-row">
                    <button className="keyboard-button" value="Q" id="Q"  onClick={myfn.buttonclicked}>q</button>
                    <button className="keyboard-button" value="W" id="W"  onClick={myfn.buttonclicked}>w</button>
                    <button className="keyboard-button" value="E" id="E"  onClick={myfn.buttonclicked}>e</button>
                    <button className="keyboard-button" value="R" id="R"  onClick={myfn.buttonclicked}>r</button>
                    <button className="keyboard-button" value="T" id="T"  onClick={myfn.buttonclicked}>t</button>
                    <button className="keyboard-button" value="Y" id="Y"  onClick={myfn.buttonclicked}>y</button>
                    <button className="keyboard-button" value="U" id="U"  onClick={myfn.buttonclicked}>u</button>
                    <button className="keyboard-button" value="I" id="I"  onClick={myfn.buttonclicked}>i</button>
                    <button className="keyboard-button" value="O" id="O"  onClick={myfn.buttonclicked}>o</button>
                    <button className="keyboard-button" value="P" id="P"  onClick={myfn.buttonclicked}>p</button>
                  </div>
                <div className="second-row">
                  <div className="flex-div"></div>
                  <button className="keyboard-button" value="A" id="A" onClick={myfn.buttonclicked}>a</button>
                  <button className="keyboard-button" value="S" id="S" onClick={myfn.buttonclicked}>s</button>
                  <button className="keyboard-button" value="D" id="D" onClick={myfn.buttonclicked}>d</button>
                  <button className="keyboard-button" value="F" id="F" onClick={myfn.buttonclicked}>f</button>
                  <button className="keyboard-button" value="G" id="G" onClick={myfn.buttonclicked}>g</button>
                  <button className="keyboard-button" value="H" id="H" onClick={myfn.buttonclicked}>h</button>
                  <button className="keyboard-button" value="J" id="J" onClick={myfn.buttonclicked}>j</button>
                  <button className="keyboard-button" value="K" id="K" onClick={myfn.buttonclicked}>k</button>
                  <button className="keyboard-button" value="L" id="L" onClick={myfn.buttonclicked}>l</button>
                  <div className="flex-div"></div>
                </div>
              <div className="third-row">
                  <button className="keyboard-button" value="Enter" onClick={myfn.submitclicked}><AiOutlineEnter/></button>
                  <button className="keyboard-button" value="Z" id="Z" onClick={myfn.buttonclicked}>z</button>
                  <button className="keyboard-button" value="X" id="X" onClick={myfn.buttonclicked}>x</button>
                  <button className="keyboard-button" value="C" id="C" onClick={myfn.buttonclicked}>c</button>
                  <button className="keyboard-button" value="V" id="V" onClick={myfn.buttonclicked}>v</button>
                  <button className="keyboard-button" value="B" id="B" onClick={myfn.buttonclicked}>b</button>
                  <button className="keyboard-button" value="N" id="N" onClick={myfn.buttonclicked}>n</button>
                  <button className="keyboard-button" value="M" id="M" onClick={myfn.buttonclicked}>m</button>
                  <button className="keyboard-button" value="Del" onClick={myfn.delclicked}><BsBackspace/></button>
              </div>
            </div>
          </div> 
          <ToastContainer/>
      </div>
    </div>
  );
}

export default App;
