import './App.css'
import Footer from './Footer'
import Header from './Header'
import MainContent from './Main-Content'


export default function App() {
  return(
    <div className='container-app'>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}
