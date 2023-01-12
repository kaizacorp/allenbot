import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import "./App.css";

const GifRow = ({ gif }) => (
  <div key={gif._id}>
    <img src={gif.url} alt="allen gif"></img>
  </div>
);

GifRow.propTypes = {
  url: PropTypes.string,
  tags: PropTypes.string,
};

const Container = styled.div`
  margin: auto;
  width: 800px;
  max-width: 90%;
  padding-top: 1rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  font-size: large;
  padding: 0.2rem;
  box-sizing: border-box;
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
    <Container>
      <Title>Allenbot Gifs</Title>
      <Input
        type="text"
        placeholder="Search by tags, ex: 'why'"
        value={filter}
        onChange={(evt) => filterSet(evt.target.value)}
      />
      <div className="image-grid">
        {gifs
          .filter((gif) =>
            gif.tags.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 18)
          .map((gif) => (
            <GifRow gif={gif} key={gif._id} />
          ))}
      </div>
    </Container>
  );
}

export default App;
