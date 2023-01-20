import React from "react";
import styled from "@emotion/styled";
import "./App.css";

import GifsContext from "./GifsContext";
import GifsFilter from "./components/GifsFilter";
import GifsGrid from "./components/GifsGrid";

const GifReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_GIFS":
      return {
        ...state,
        gifs: action.payload,
      };
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    default:
      throw new Error("No action");
  }
};

const Container = styled.div`
  margin: auto;
  width: 1000px;
  max-width: 90%;
  padding-top: 1rem;
`;

const Title = styled.h1`
  text-align: center;
`;

function App() {
  const [state, dispatch] = React.useReducer(GifReducer, {
    filter: "",
    gifs: [],
    query: "",
  });

  React.useEffect(() => {
    fetch("/allenbot/gifs.json")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "SET_GIFS",
          payload: data,
        })
      );
  }, []);

  React.useEffect(() => {
    const timeOutId = setTimeout(
      () =>
        dispatch({
          type: "SET_FILTER",
          payload: state.query,
        }),
      600
    );
    return () => clearTimeout(timeOutId);
  }, [state.query]);

  if (!state.gifs.length) {
    return <div>Loading data</div>;
  }

  return (
    <GifsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Container>
        <Title>Allenbot Gifs</Title>
        <GifsFilter />
        <GifsGrid />
      </Container>
    </GifsContext.Provider>
  );
}

export default App;
