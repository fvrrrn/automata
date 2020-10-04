import React from 'react'
import BottomButton from './BottomButton'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="l-flex l-flex--row l-flex--center l-flex--gap">
        <div className="l-flex__item">
          <BottomButton />
        </div>
        <div className="l-flex__item">
          <BottomButton />
        </div>
        <div className="l-flex__item">
          <BottomButton />
        </div>
      </div>
    </footer>
  )
}

export default Footer
