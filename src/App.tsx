import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form/Form";
import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col px-6 py-16 text-center">
      <Title />
      <Form />
      <div className="my-14 border-t border-neutral-800" />
      <Info />
      <div className="my-14 border-t border-neutral-800" />
      <About />
      <div className="my-14 border-t border-neutral-800" />
      <Footer />
    </main>
  );
}

export default App;
