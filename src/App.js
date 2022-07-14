import "./App.css";
// import EditTable from "./components/editTable";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomEditableTable from "./components/CustomEditableTable";
import { data } from "./components/constant";
import "./assets/SCSS/style/style.scss";
import TopPage from "./components/TopPage";

function App() {
  return (
    <div className="App">
      <div className="page-fluid">
        <TopPage />
        <CustomEditableTable data={data} />
      </div>
    </div>
  );
}

export default App;
