import Navbar from './components/Page';//navbar imported
import Footer from './components/footer';//footer imported

//App function
function App() {
  //return method to return elements on web from below
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', minHeight: '70vh' }}>
        <h1>Welcome to My E-commerce Site</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
// the function application