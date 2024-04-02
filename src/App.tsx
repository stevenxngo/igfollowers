import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="flex min-h-screen flex-col content-center py-16 text-center">
      <Title />
      <Form />
      <hr className="mx-auto w-3/4 h-px border-0 bg-gray-700" />
      <Footer />
    </main>
  );
}

export default App;
