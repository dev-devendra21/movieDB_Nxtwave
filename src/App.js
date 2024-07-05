import {Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import TopRated from './Components/TopRated'
import Upcoming from './Components/Upcoming'
import SearchProvider from './Context/searchContext'
import './App.css'

// write your code here
const App = () => (
  <>
    <SearchProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/top-rated" component={TopRated} />
        <Route path="/upcoming" component={Upcoming} />
      </Switch>
    </SearchProvider>
  </>
)

export default App
