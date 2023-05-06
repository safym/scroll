import CustomScrollbar from "./components/CustomScrollbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Custom Scrollbars with React</h1>
      <p>
        <ul>
          <li>Works for all browsers</li>
          <li>Works with mouse events and touch events</li>
          <li>Without using ::-webkit-scrollbar</li>
          <li>Without using libraries</li>
        </ul>
      </p>
      <CustomScrollbar>
        <div className="content">
          <p>Hello! Start content!</p>
          <p>
            Aliquip pariatur consequat id ea in esse nulla occaecat qui minim
            incididunt ea sit ad cupidatat. Ad aute in quis tempor culpa
            pariatur qui deserunt dolor in nulla ea. Mollit id nisi consectetur
            sunt ea et cillum eiusmod fugiat duis et.
          </p>
          <p>
            Cupidatat nostrud cupidatat pariatur esse amet amet officia est
            eiusmod ullamco nisi officia sunt sint id eiusmod. Amet magna id
            tempor cupidatat commodo esse et in cupidatat culpa. Quis esse nulla
            eiusmod velit minim cillum consectetur id consequat labore sunt est
            commodo lorem sunt. Ipsum fugiat fugiat laboris velit qui enim
            deserunt minim et ea laboris. Adipiscing fugiat fugiat nulla commodo
            tempor do tempor commodo pariatur anim ad sit sit excepteur est
            nostrud ex.
          </p>
          <p>
            Non in amet ad consequat mollit ut adipiscing elit proident ex.
            Reprehenderit mollit aliquip proident mollit voluptate aute anim et
            proident enim ut laborum nisi sunt ut dolore id amet id. Proident
            sunt sed duis dolor dolore irure excepteur sit id in in magna amet
            eu voluptate. Ut fugiat dolor pariatur officia et exercitation
            mollit velit mollit aliqua in laborum voluptate est eu. Officia sed
            commodo excepteur lorem nisi laboris occaecat incididunt et aliqua
            commodo consequat lorem sit magna do ex veniam cillum. Ad mollit
            culpa reprehenderit magna lorem incididunt nisi nisi id laborum et
            labore cillum reprehenderit dolore labore.
          </p>
          <p>Bye! End content!</p>
        </div>
      </CustomScrollbar>
    </div>
  );
}

export default App;
