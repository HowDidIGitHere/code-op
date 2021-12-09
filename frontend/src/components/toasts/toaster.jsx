import React from 'react';
import Toast from './toast';

export default class Toaster extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.messages;
    const closeAction = this.props.closeAction;
    const path = this.props.location.pathname;
    return (
      <div className={
        `toaster
        ${ /\/account*/.test(path) ? 'toaster-main-view' : '' }
        ${ /\/sign-in/.test(path) ? 'toaster-login-view' : '' }`
      }>
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