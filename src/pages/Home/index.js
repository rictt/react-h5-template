import style from  './index.scss'
console.log(style)

function Home() {
  return (
    <div className='home-page-test'>
      我是Home页面的内容
      <h3 className='custom-color'>自定义颜色</h3>
    </div>
  )
}

export default Home