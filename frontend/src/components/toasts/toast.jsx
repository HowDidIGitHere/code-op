import React from 'react';

const ErrorIcon = <svg 
  className='type-icon' 
  focusable="false" 
  viewBox="0 0 20 20" 
  role="img"
>
  <path d="M10.0373 0C8.35577 0 7.04947 1.46478 7.24118 3.1353L8.27941 12.1824C8.38192 13.0756 9.1381 13.75 10.0373 13.75C10.9364 13.75 11.6926 13.0756 11.7951 12.1824L12.8333 3.1353C13.025 1.46478 11.7187 0 10.0373 0Z">
  </path>
  <path d="M12 18C12 19.1046 11.1046 20 10 20C8.89546 20 8.00003 19.1046 8.00003 18C8.00003 16.8954 8.89546 16 10 16C11.1046 16 12 16.8954 12 18Z">
  </path>
</svg>

const SuccessIcon = <svg 
  className="type-icon" 
  focusable="false" 
  viewBox="0 0 20 20" 
  role="img"
>
  <rect 
    width="20" 
    height="20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
  </rect>
  <path d="M5.54871 17.6569C4.76766 16.8758 4.76766 15.6095 5.54871 14.8284L16.5442 3.83292C17.3253 3.05187 18.5916 3.05187 19.3726 3.83292C20.1537 4.61397 20.1537 5.8803 19.3727 6.66134L8.37714 17.6569C7.59609 18.4379 6.32976 18.4379 5.54871 17.6569Z"></path><path d="M8.40397 17.6569C7.62292 18.4379 6.35659 18.4379 5.57554 17.6569L0.625795 12.7071C-0.155254 11.9261 -0.155254 10.6597 0.625795 9.87868C1.40684 9.09763 2.67317 9.09763 3.45422 9.87868L8.40397 14.8284C9.18502 15.6095 9.18502 16.8758 8.40397 17.6569Z">
  </path>
  <title>CheckMark</title>
</svg>

const CloseIcon = <svg
  className='close-icon'
  focusable="false"
  viewBox="0 0 20 20"
  role="img">
  <g clipPath="url(#clip0)"
>
    <path d="M0.949037 16.2225C0.167988 17.0036 0.167988 18.2699 0.949037 19.051C1.73009 19.832 2.99642 19.832 3.77747 19.051L10 12.8284L16.2225 19.051C17.0036 19.832 18.2699 19.832 19.051 19.051C19.832 18.2699 19.832 17.0036 19.051 16.2225L12.8284 10L19.051 3.77746C19.832 2.99641 19.832 1.73008 19.051 0.949029C18.2699 0.16798 17.0036 0.167982 16.2225 0.94903L10 7.17157L3.77746 0.94903C2.99642 0.167982 1.73009 0.167982 0.949037 0.94903C0.167988 1.73008 0.167989 2.99641 0.949038 3.77746L7.17158 10L0.949037 16.2225Z">
    </path>
  </g>
  <defs>
    <clipPath id="clip0">
      <rect width="20" height="20" fill="white">
      </rect>
    </clipPath>
  </defs>
</svg>

export default function Toast(props) {
  const type = props.type;
  const closeAction = props.closeAction;
  return (
    <div className={'toast ' + type}>
      <div className='content'>
        <div className='header'>
          { type === 'error' ? ErrorIcon : '' }
          <h3 className='title'>{type}</h3>
        </div>
        <span className='body'>
          { props.children }
        </span>
      </div>
      <button onClick={closeAction}>
        { CloseIcon }  
      </button>
    </div>
  );
}