import './App.css';
import scss from './app.module.scss'

function App() {
  return (
    <div className="App">
      <main className="main-test">
        main 主体区域
      </main>
      <div className={scss['app-test']}>test</div>
    </div>
  );
}

export default App;
