import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = { name: 'Shubham', age: 20 };
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar /> 
      <div className="content">
        <Home />

      </div>
    </div>
  );
}

export default App; // to use in all the file
