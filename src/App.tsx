import Test from "./components/Test";
import { data } from "./mock_data/qestions";
import "./App.css";

export default function App() {
  return <Test data={data} timer={{ hours: 0, minutes: 10 }} />;
}
