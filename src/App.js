import React from "react";
import styled from "@emotion/styled";
import "./App.css";

import GifsContext from "./GifsContext";
import GifsFilter from "./components/GifsFilter";
import GifsGrid from "./components/GifsGrid";

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
  const [filter, filterSet] = React.useState("");
  const [gifs, gifsSet] = React.useState([]);

  React.useEffect(() => {
    fetch("/allenbot/gifs.json")
      .then((resp) => resp.json())
      .then((data) => gifsSet(data));
  }, []);

  if (!gifs.length) {
    return <div>Loading data</div>;
  }

  return (
    <GifsContext.Provider
      value={{
        filter,
        gifs,
        filterSet,
        gifsSet,
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
