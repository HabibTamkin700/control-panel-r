import Content from "./components/Content";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App h-screen overflow-y-scroll scrollbar-hide overflow-x-hidden px-6">
      <Header />
      <div className="flex items-start justify-start space-x-2 w-full">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
