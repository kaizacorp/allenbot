import "./App.css";
import gifs from "./gifs.json";

const GifRow = ({ gifs }) => (
  <tr>
    <td>
      <img src={gifs.url} alt="allen gif"></img>
    </td>
    <td>{gifs.tags}</td>
  </tr>
);

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
          <th>URL</th>
          <th>Tags</th>
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
