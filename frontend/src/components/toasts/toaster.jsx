import React from 'react';
import Toast from './toast';
import './toasts.css';
import './toaster.css';

export default class Toaster extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.messages;
    const closeAction = this.props.closeAction;
    return (
      <div className={ 'toaster' }>
        { 
          messages.map(message => {
            return <Toast 
              key={message.id} 
              type={message.type}
              closeAction={closeAction(message.type, message.id)}
            >
              {message.body}
            </Toast>
          })
        }
      </div>
    );
  }
}