import "./App.css";
import gifs from "./gifs.json";

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
          {gifs.slice(0, 20).map((gif) => (
            <tr key={gif._id}>
              <td>
                <img src={gif.url} alt="allen gif"></img>
              </td>
              <td>{gif.tags}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
