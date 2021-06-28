// Not using in v.1. 

// import React, { useContext, useEffect, useState } from "react"
// import { GoalContext } from "./GoalProvider"
// // import "./Goals.css"


// export const GoalForm = () => {
//     const { goals, getWarmUpGoals } = useContext(GoalContext)
    
//     const [goal, setWarmupGoals] = useState({})


//     const handleControlledInputChange = (event) => {
//       const newGoal = { ...goal }
//       newGoal[event.target.name] = event.target.value
//       setWarmupGoals(newGoal)
//     }
    
//     useEffect(() => {
//       getWarmUpGoals();
//     }, []);
      
//       return (
//           <form className="warmUpGoalForm">
//         <h2 className="warmUpGoalForm__title">Set Goal</h2>
//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="warmUpGoal">Choose Goal: </label>
//             <select value={goal.id} name="warmUpGoal" id="goalId" className="form-control" onChange={handleControlledInputChange}>
//               <option value="0">Select a Goal</option>
//               {goals.map((g) => (
//                   <option key={g.id} value={g.id}>
//                   {g.goalName}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </fieldset>
//       </form>
//     )
// }


