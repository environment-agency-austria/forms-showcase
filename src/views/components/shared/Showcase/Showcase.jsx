import React from 'react';
import PrismCode from 'react-prism';

class Showcase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageLog: [],
    };

    this.logMessage = this.logMessage.bind(this);
  }

  logMessage(msg) {
    this.setState(prevState => {
      const { messageLog } = prevState;

      if (messageLog.length > 9) {
        messageLog.splice(9, 1);
      }

      const newLog = [
        ...[msg],
        ...messageLog,
      ];

      return { messageLog: newLog };
    });
  }

  render() {
    const {
      title,
      description,
      component: Component,
      code,
    } = this.props;

    const { messageLog } = this.state;

    return (
      <div className="showcase">
        <h5 id={title}>{title}</h5>
        <p className="description">{description}</p>
        <div className="display">
          <Component logMessage={this.logMessage} />
        </div>
        <div className="message-log">
          <h6>Message log</h6>
          <pre>{messageLog.join('\n')}</pre>
        </div>
        <h6>Sourcecode</h6>
        <PrismCode className="lang-jsx" component="pre">{code}</PrismCode>
      </div>
    );
  }
};

export default Showcase;
