import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import "./App.css";

const GifRow = ({ gif }) => (
  <tr>
    <td>
      <img src={gif.url} alt="allen gif"></img>
    </td>
    <td>{gif.tags}</td>
  </tr>
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
  font-size: x-large;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
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
      <Input value={filter} onChange={(evt) => filterSet(evt.target.value)} />
      <table>
        <thead>
          <tr>
            <th>GIF</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {gifs
            .filter((gif) =>
              gif.tags.toLowerCase().includes(filter.toLowerCase())
            )
            .slice(0, 20)
            .map((gif) => (
              <GifRow gif={gif} key={gif._id} />
            ))}
        </tbody>
      </table>
    </Container>
  );
}

export default App;
