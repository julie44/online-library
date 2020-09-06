import React, { useState, useEffect, Fragment } from 'react'

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  useEffect(() => {
    document.body.classList.add('overflow_hidden');
    return () => {
      document.body.classList.remove('overflow_hidden');
    }
  })
  
  const RenderModal = ({ children }) => (
    <Fragment>
      {isVisible && 
      <Fragment>
        <p className="modalBackdrop" onClick={hide}></p>
        <div className="modal">
          {children}
        </div>
      </Fragment>
      }
    </Fragment>
  )

  return {
    show,
    hide,
    RenderModal,
  }
}

export default useModal;