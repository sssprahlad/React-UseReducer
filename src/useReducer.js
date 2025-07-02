import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, "state");
  console.log(action, "action");
  if (action.type === "DELETE_ITEM") {
    const updateObj = state.data?.filter(
      (eachItem) => eachItem.id !== action.payload
    );
    console.log(updateObj, "deleteObj");
    return {
      data: updateObj,
    };
  }

  if (action.type === "ADD_ITEM") {
    return { ...state, data: [...state.data, action.payload] };
  }
};

const ReducerExanple = () => {
  const initialState = {
    data: [
      { id: 1, name: "sai", age: 25, email: "sai@gmail.com" },
      { id: 2, name: "siva", age: 22, email: "siva@gmail.com" },
      { id: 3, name: "satya", age: 20, email: "satya@gmail.com" },
    ],
  };

  //console.log(useReducer(reducer, initialState));

  const [state, dispatch] = useReducer(reducer, initialState);

  const onDeleteClick = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  const onAddItem = () => {
    // console.log("add text");
    const newId = state.data.length + 1;
    const newAddItem = {
      id: newId,
      name: "ravi" + newId,
      age: 27 + newId,
      email: "adde@gmail.com" + newId,
    };
    dispatch({ type: "ADD_ITEM", payload: newAddItem });
    // console.log("add Item");
  };

  return (
    <>
      <h1>reducer example</h1>
      {state.data.map((eachItem) => {
        const { id, name, age, email } = eachItem;
        return (
          <>
            <div
              key={id}
              style={{
                border: "2px solid black",
                gap: 50,
                borderRadius: "8px",
                margin: "20px",
                padding: "15px",
              }}
            >
              <h2>{name}</h2>
              <h3>{age}</h3>
              <p>{email}</p>
              <button onClick={() => onDeleteClick(id)}>Delete</button>
            </div>
          </>
        );
      })}
      <button onClick={onAddItem}>Add</button>
    </>
  );
};

export default ReducerExanple;
