import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form/Form";
import Info from "./components/Info";
import Privacy from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="flex min-h-screen flex-col content-center px-8 py-12 text-center">
      <Title />
      <Form />
      <hr className="mx-auto h-px w-3/4 border-0 bg-gray-700" />
      <Info />
      <hr className="mx-auto h-px w-3/4 border-0 bg-gray-700" />
      <Privacy />
      <hr className="mx-auto h-px w-3/4 border-0 bg-gray-700" />
      <Footer />
    </main>
  );
}

export default App;
