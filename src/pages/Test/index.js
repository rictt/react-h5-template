import testStyle from './index.module.scss'
import { renderRoutes } from "react-router-config";

function Test(props) {
  return (
    <div className={testStyle['test-page']}>
      Test
      <h3 className='custom-color'>自定义颜色</h3>
      {renderRoutes(props.route.routes)}
    </div>
  )
}

export default Test