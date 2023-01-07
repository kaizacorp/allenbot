import "./App.css";
import gifs from "./gifs.json";
import PropTypes from "prop-types";

const GifRow = ({ gifs }) => (
  <tr>
    <td>
      <img src={gifs.url} alt="allen gif"></img>
    </td>
    <td>{gifs.tags}</td>
  </tr>
);

GifRow.propTypes = {
  url: PropTypes.string,
  tags: PropTypes.string,
};

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Allenbot Gifs</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>URL</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {gifs.slice(0, 20).map((gifs) => (
            <GifRow gifs={gifs} key={gifs._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
