import React from 'react'
import './search.css';
import './index.js';


const Search = props => (
        <div>
       
          
          <div className="search">
            <svg x="0px" y="0px" viewBox="0 0 24 24" width="20px" height="20px">
              <g strokeLinecap="square" strokeLinejoin="miter" stroke="currentColor">
                <line fill="none" strokeMiterlimit={10} x1={22} y1={22} x2="16.4" y2="16.4" />
                <circle fill="none" stroke="currentColor" strokeMiterlimit={10} cx={10} cy={10} r={9} />
              </g>
            </svg>
            <div>
              <input type="text" placeholder="Search for something..." />
            </div>
          </div>
        
         
        
        </div>

        
        

)

export default Search

  