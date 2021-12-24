import { testFetch } from '@/api/test'
import { NavLink, HashRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "@/router";

testFetch()
  .then(res => {
    console.log('res')
    console.log(res)
  })

const appStyle = {
  textAlign: 'center',
  fontSize: '20px',
  display: 'flex',
  justifyAlign: 'center',
  flexDirection: 'column',
  marginTop: '100px'
} 

function App() {
  return (
    <div style={appStyle}>
      <Router>
        <div>
          <NavLink exact to="/">home</NavLink>
          <span> | </span>
          <NavLink to="/test">group</NavLink>
          <span> | </span>
          <NavLink to="/test/detail">group detail</NavLink>
        </div>
        {renderRoutes(routes)}
      </Router>
    </div>
  );
}

export default App;
