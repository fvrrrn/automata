import React from 'react'

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul>
        <div className="l-flex l-flex--row">
          <div className="l-flex__item">
            <li>
              <button>Button1</button>
            </li>
          </div>

          <div className="l-flex__item">
            <li>
              <button>Button1</button>
            </li>
          </div>
          <div className="l-flex__item">
            <li>
              <button>Button1</button>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  )
}

export default Nav
