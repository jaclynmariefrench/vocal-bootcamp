import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { TypeContext } from "./TypeProvider";
// import "./Types.css"


export const TypeForm = () => {
  const { types, getTypes, addType } = useContext(TypeContext);

  const [type, setTypes] = useState({});

  const history = useHistory()

  const handleControlledInputChange = (event) => {
    const newType = { ...type };
    newType[event.target.id] = event.target.value;
    setTypes(newType);
  };

  const handleSaveVocalType = () => {

    addType({
            typeNameId: parseInt(type.typeId),
            userId: parseInt(localStorage.getItem("vocal_user"))
          }).then(() => history.push(`user/goals/${localStorage.getItem("vocal_user")}`));
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