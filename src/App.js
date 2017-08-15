//main wrapper component
import React from 'react'
import ReactDOM from 'react-dom'

import Sidebar from './components/skeleton/Sidebar'
import Topbar from './components/skeleton/Topbar'
import Context from './components/skeleton/Context'

class App extends React.Component{
  render(){
    return(
      <div>
        <Topbar />
        <Sidebar/>
        <Context />
      </div>
    )
  }
}

export default App
