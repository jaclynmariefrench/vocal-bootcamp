import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { TypeContext } from "./TypeProvider";
import { GoalContext } from "../goal/GoalProvider"
import { WarmUpContext } from "../generator/warmUpProvider";
import "./Types.css"


export const TypeGoalForm = () => {
  // TYPES
  const { types, getTypes, addType } = useContext(TypeContext);
  const {addWarmUp} = useContext(WarmUpContext) 
  const [type, setTypes] = useState({});
// GOALS
  const { goals, getWarmUpGoals } = useContext(GoalContext)
    
  const [goal, setWarmupGoals] = useState({})

  const history = useHistory()
// TYPE
  const handleTypeControlledInputChange = (event) => {
    const newType = { ...type };
    newType[event.target.id] = event.target.value;
    setTypes(newType);
  };
// GOAL
  const handleGoalControlledInputChange = (event) => {
    const newGoal = { ...goal }
    newGoal[event.target.id] = event.target.value
    setWarmupGoals(newGoal)
  }

  const handleSaveTypeGoal = () => {

        addWarmUp({
            typeNameId: parseInt(type.typeId),
            userId: parseInt(localStorage.getItem("vocal_user")),
            goalNameId: parseInt(goal.goalId)
          }).then(() => history.push(`/goals/${localStorage.getItem("vocal_user")}`))
        }

  useEffect(() => {
    getTypes();
  }, []);
  
  useEffect(() => {
    getWarmUpGoals();
  }, []);

  
    // const handleOnClick = history.push('/user');
  

  return (
    <form className="typeGoalForm">
      <h2 className="typeForm__title">Set Type</h2>
      <fieldset className="type_form">
        <div className="form-group">
          <label htmlFor="type">Choose Type: </label>
          <select
            value={type.id}
            name="typeId"
            id="typeId"
            className="form-control"
            onChange={handleTypeControlledInputChange}
          >
            <option value="0">Select a Type</option>
            {types.map((t) => (
              <option key={t.id} value={t.id}>
                {t.typeName}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <h2 className="warmUpGoalForm__title">Set Goal</h2>
        <fieldset className="goal_form">
          <div className="form-group">
            <label htmlFor="warmUpGoal">Choose Goal: </label>
            <select value={goal.id} name="warmUpGoal" id="goalId" className="form-control" onChange={handleGoalControlledInputChange}>
              <option value="0">Select a Goal</option>
              {goals.map((g) => (
                  <option key={g.id} value={g.id}>
                  {g.goalName}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <div className="typegoal_submit_button">
        <button className="btn btn-primary" onClick={() => {
        handleSaveTypeGoal().then(()=> history.push('/user'))
      }}>Save Type
      </button>
        </div>
    </form>
  );

};


// 



    