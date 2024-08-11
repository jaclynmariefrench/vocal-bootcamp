import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { TypeContext } from "./TypeProvider";
import { GoalContext } from "../goal/GoalProvider";
import { WarmUpContext } from "../generator/warmUpProvider";
import "./Types.css";

export const TypeGoalForm = () => {
  // TYPES
  const { types = [], getTypes, addType, addEditType } = useContext(TypeContext);
  const { getWarmUps, warmUps } = useContext(WarmUpContext);
  const [type, setTypes] = useState({});
  // GOALS
  const { goals = [], getWarmUpGoals } = useContext(GoalContext);
  const [goal, setWarmupGoals] = useState({});

  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  
  const handleControlledInputChange = (event) => {
    const newType = { ...type };
    newType[event.target.id] = event.target.value;
    setTypes(newType);
    const newGoal = { ...goal };
    newGoal[event.target.id] = event.target.value;
    setWarmupGoals(newGoal);
  };

  const handleSaveTypeGoal = () => {

    if(type.typeId === undefined && goal.goalId === undefined) {
      window.alert("Please select a type and a goal!")
    } else if(type.typeId === undefined) {
      window.alert("Please select a type!")
    } else if(goal.goalId === undefined) {
      window.alert("Please select a goal!")
    } else {
      setIsLoading(true);

      if (
        !warmUps.find(
          (w) => w.userId === parseInt(localStorage.getItem("vocal_user"))
        )
      ) {
        addType({
          goalNameId: parseInt(goal.goalId),
          typeNameId: parseInt(type.typeId),
          userId: parseInt(localStorage.getItem("vocal_user")),
        }).then(() =>
          history.push("/user")
        );
      } else {
        addEditType({
          id: warmUps.find(
            (w) => w.userId === parseInt(localStorage.getItem("vocal_user"))
          ).id,
          typeNameId: parseInt(type.typeId),
          goalNameId: parseInt(goal.goalId),
          userId: parseInt(localStorage.getItem("vocal_user")),
        }).then(()=>  history.push("/user"));
      }
    }
  };

  useEffect(() => {
    getTypes();
  }, []);

  useEffect(() => {
    getWarmUpGoals();
  }, []);

  useEffect(() => {
    getWarmUps();
  }, []);

  return (
    <form className="typeGoalForm">
      <fieldset className="type_form">
      <h2 className="typeForm__title">Set Type</h2>
        <div className="form-group">
          <select
            value={type.id}
            name="typeId"
            id="typeId"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a Type</option>
            {types && types.map((t) => (
              <option key={t.id} value={t.id}>
                {t.typeName}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      
      <fieldset className="goal_form">
      <h2 className="warmUpGoalForm__title">Set Goal</h2>
        <div className="form-group">
          <select
            value={goal.id}
            name="warmUpGoal"
            id="goalId"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a Goal</option>
            {goals && goals.map((g) => (
              <option key={g.id} value={g.id}>
                {g.goalName}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <div className="typegoal_submit_button">
        <button
          className="btn btn-primary mybtn"
          onClick={(event) => {
            event.preventDefault()
            handleSaveTypeGoal()
          }}
        >
          Save Type
        </button>
      </div>
    </form>
  );
};
