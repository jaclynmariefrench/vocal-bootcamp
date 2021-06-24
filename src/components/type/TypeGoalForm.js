import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { TypeContext } from "./TypeProvider";
import { GoalContext } from "./GoalProvider"
// import "./Types.css"


export const TypeGoalForm = () => {
  // TYPES
  const { types, getTypes, addType } = useContext(TypeContext);

  const [type, setTypes] = useState({});
// GOALS
  const { goals, getWarmUpGoals, addWarmUpGoal } = useContext(GoalContext)
    
  const [goal, setWarmupGoals] = useState({})

  const history = useHistory()
// TYPE
  const handleControlledInputChange = (event) => {
    const newType = { ...type };
    newType[event.target.id] = event.target.value;
    setTypes(newType);
  };
// GOAL
  const handleControlledInputChange = (event) => {
    const newGoal = { ...goal }
    newGoal[event.target.name] = event.target.value
    setWarmupGoals(newGoal)
  }

  const handleSaveVocalType = () => {

    addType({
            typeNameId: parseInt(type.typeId),
            userId: parseInt(localStorage.getItem("vocal_user"))
          }).then(addWarmUpGoal({
            goalNameId: parseInt(goal.goalId)
          })).then(() => history.push(`user/goals/${localStorage.getItem("vocal_user")}`))
        }

  


  useEffect(() => {
    getTypes();
  }, []);
    

  return (
    <form className="typeForm">
      <h2 className="typeForm__title">Set Type</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="type">Choose Type: </label>
          <select
            value={type.id}
            name="typeId"
            id="typeId"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a Type</option>
            {types.map((t) => (
              <option key={t.id} value={t.id}>
                {t.typeName}
              </option>
            ))}
          </select>
          <button className="btn btn-primary" onClick={() => {
        handleSaveVocalType()
      }}>Save Type</button>
        </div>
      </fieldset>
    </form>
  );

};










    const handleControlledInputChange = (event) => {
      const newGoal = { ...goal }
      newGoal[event.target.name] = event.target.value
      setWarmupGoals(newGoal)
    }
    
    useEffect(() => {
      getWarmUpGoals();
    }, []);
      
      return (
          <form className="warmUpGoalForm">
        <h2 className="warmUpGoalForm__title">Set Goal</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="warmUpGoal">Choose Goal: </label>
            <select value={goal.id} name="warmUpGoal" id="goalId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a Goal</option>
              {goals.map((g) => (
                  <option key={g.id} value={g.id}>
                  {g.goalName}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
      </form>
    )
}