import testStyle from './index.module.scss'

function Test() {
  return (
    <div className={testStyle['test-page']}>
      嵌套在test下面的字路由
    </div>
  )
}

export default Test