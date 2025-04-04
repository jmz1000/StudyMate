import '../index.css';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h1>Welcome to StudyMate</h1>
        <p>This is the main content area.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;


