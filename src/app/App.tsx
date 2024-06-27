
import './App.css'
import { Home } from './home/home';
import { AppContainer } from './app-container';
import { Footer } from '../components/footer/footer';
export const App =() =>{
  return (
    <AppContainer >     
      <Home/>
      <Footer/>
    </AppContainer>
  )
}


