import { SocialIcon } from "react-social-icons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="Name">Giuliano Kranevitter</h1>

        <div className="Hi">🙋‍♂️</div>

        <ul className="SocialMedia">
          <li>
            <SocialIcon url="https://github.com/giulianok" />
          </li>
          <li>
            <SocialIcon url="https://www.linkedin.com/in/giulianok/" />
          </li>
          <li>
            <SocialIcon url="https://twitter.com/giulianokcom" />
          </li>
          <li>
            <SocialIcon url="https://kranbos.com" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
