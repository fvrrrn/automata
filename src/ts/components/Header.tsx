import React from 'react'
import Nav from './Nav'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="l-flex l-flex--row l-flex--space-between">
        <div className="l-flex__item">
          <h1 className="logo">Musa</h1>
        </div>
        <div className="l-flex__item">
          <Nav></Nav>
        </div>
      </div>
    </header>
  )
}

export default Header
