import './App.css';
import scss from './app.module.scss'
import { testFetch } from '@/api/test'

testFetch()
  .then(res => {
    console.log('res')
    console.log(res)
  })

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
