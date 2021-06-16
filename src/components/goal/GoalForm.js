import React, { useContext, useEffect, useState } from "react"
import { GoalContext } from "./GoalProvider"
// import "./Goals.css"
import { useHistory } from 'react-router-dom';

export const GoalForm = () => {
    const { goals, addWarmUpGoal } = useContext(GoalContext)
    
    const [goal, setWarmupGoals] = useState({})

	  const history = useHistory();

    const handleControlledInputChange = (event) => {
      const newGoal = { ...goal }
      newGoal[event.target.name] = event.target.value
      setWarmupGoals(newGoal)
    }

    const handleSaveGoal = () => {
      if (parseInt(goal.id) === 0) {
          window.alert("Please select a goal")
      } else {
        addWarmUpGoal({
              name: goal.goalName,
              id: goal.id,
          })
          .then(() => history.push("/warmUpGoals"))
        } 
      }
      
      
      
      return (
          <form className="warmUpGoalForm">
        <h2 className="warmUpGoalForm__title">Set Goal</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="warmUpGoal">Choose goal: </label>
            <select value={goal.id} name="warmUpGoal" id="goalId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a goal</option>
              {goals.map(g => (
                  <option key={g.id} value={g.id}>
                  {g.goalName}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
  
        <button className="btn btn-primary"
          onClick={event => {
              event.preventDefault() // Prevent browser from submitting the form and refreshing the page
              handleSaveGoal()
            }}>
        Save Goal</button>
      </form>
    )
}


