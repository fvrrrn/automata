import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Test from './Test'

const App: React.FC = () => {
  return (
    <div className="l-flex l-flex--space-between">
      <div className="l-flex__item">
        <Test />
      </div>
      <div className="l-flex__item">
        <Header />
      </div>
      <div className="l-flex__item">
        <Main />
      </div>
      <div className="l-flex__item">
        <Footer />
      </div>
    </div>
  )
}

export default App
