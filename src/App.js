import React from "react";
import "./App.css";
import gifs from "./gifs.json";
import PropTypes from "prop-types";

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

function App() {
  const [filter, filterSet] = React.useState("");
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        maxWidth: "90%",
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Allenbot Gifs</h1>
      <input value={filter} onChange={(evt) => filterSet(evt.target.value)} />
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
    </div>
  );
}

export default App;
