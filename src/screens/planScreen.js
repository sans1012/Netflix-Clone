import React,{useState} from 'react'
import "./planScreen.css";

function PlanScreen() {
      const [products,setProducts]=useState([]);

      return (
            <div className="planScreen_plan">
                  <div className="planScreen_info">
                        
                  </div>
                  <button>Subscribe</button>
            </div>
      )
}

export default PlanScreen;
