import { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "UPADTE_USER_DATA") {
    return {
      ...state,
      usersData: action.payload,
    };
  }

  if (action.type === "LOADING") {
    return {
      ...state,
      isLoading: action.payload,
    };
  }

  if (action.type === "DELETE_ITEM") {
    const updatedList = state.usersData.filter(
      (eachItem) => eachItem.id !== action.payload
    );
    return { ...state, usersData: updatedList };
  }

  if (action.type === "UPDATE_DATA") {
    return { ...state, isUpdate: action.payload };
  }

  if (action.type === "UPDATE_USER_DETAILS") {
    const updateUser = state.usersData.map((eachItem) => {
      if (eachItem.id === action.payload.id) {
        //console.log(eachItem, "new eachItem");

        return {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
        };
      } else {
        return eachItem;
      }
    });
    return {
      ...state,
      usersData: updateUser,
    };
  }

  return state;
};

const UseReducerFetchData = () => {
  const initialState = {
    usersData: [],
    isLoading: false,
    isError: { status: false, msg: "" },
    isUpdate: { status: false, id: "", name: "", email: "" },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING", payload: true });
      dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({ type: "UPADTE_USER_DATA", payload: data });
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ERROR",
        payload: { status: true, msg: error.message },
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(state.usersData, "dispatch");

  const handleDeleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  const updateDetails = (id, name, email) => {
    dispatch({ type: "UPDATE_USER_DETAILS", payload: { id, name, email } });
  };

  return (
    <div style={{ background: "lightblue", padding: "15px" }}>
      <h2>Fetch data using useReducer</h2>
      {state.isLoading ? (
        <div style={{ textAlign: "center" }}>
          <h3 style={{ color: "blue" }}>Loading...</h3>
        </div>
      ) : (
        <div>
          {state.usersData.map((eachItem) => {
            console.log(eachItem, "each");
            const { id, email, name, website } = eachItem;
            console.log(id, email, name, website);
            return (
              <div
                key={id}
                style={{
                  border: "2px solid blue",
                  borderRadius: "8px",
                  padding: "10px",
                  margin: "15px 0px",
                  position: "relative",
                }}
              >
                <div>
                  <div>
                    <h2>{name}</h2>
                    <h3>{email}</h3>
                    <h4>{website}</h4>
                  </div>
                  {state.isUpdate.status && state.isUpdate.id === id && (
                    <FormDetails
                      updateId={state.isUpdate.id}
                      updateName={state.isUpdate.name}
                      updateEmail={state.isUpdate.email}
                      updateDetails={updateDetails}
                    />
                  )}
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button onClick={() => handleDeleteItem(id)}>Delete</button>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "UPDATE_DATA",
                        payload: { status: true, id: id, name: name, email },
                      })
                    }
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UseReducerFetchData;

const FormDetails = ({ updateId, updateName, updateEmail, updateDetails }) => {
  const [name, setName] = useState(updateName || "");
  const [email, setEmail] = useState(updateEmail || "");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        right: 10,
        top: 20,
        position: "absolute",
      }}
    >
      <input
        style={{ padding: "10px", borderRadius: "8px", border: "none" }}
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", borderRadius: "8px", border: "none" }}
      />
      <button
        style={{ padding: "8px", borderRadius: "8px", border: "none" }}
        onClick={() => updateDetails(updateId, name, email)}
      >
        Update
      </button>
    </div>
  );
};
