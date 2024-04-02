import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";

function App() {
  return (
    <main className="flex min-h-screen flex-col content-center px-8 py-16 text-center">
      <Title />
      <Form />
    </main>
  );
}

export default App;
