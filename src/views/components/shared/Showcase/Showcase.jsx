import React from 'react';
import PrismCode from 'react-prism';
import { Button } from 'reactstrap';

class Showcase extends React.Component {
  state = {
    messageLog: [],
    showCode: false,
  }

  logMessage = (msg) => {
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

    const { messageLog, showCode } = this.state;

    return (
      <div className="showcase">
        <h5 id={title}>{title}</h5>
        <p className="description">{description}</p>
        <div className="display">
          <Component logMessage={this.logMessage} />
        </div>
        {messageLog.length > 0 &&
          <div className="message-log">
            <h6>Message log</h6>
            <pre>{messageLog.join('\n')}</pre>
          </div>
        }
        <div className="source">
          {showCode ? (
            <React.Fragment>
              <h6><Button color="link" onClick={() => this.setState({ showCode: false })}>Hide sourcecode</Button></h6>
              <PrismCode className="lang-jsx" component="pre">{code}</PrismCode>
            </React.Fragment>
          ) :
            <h6 className="mb-0">
              <Button
                color="link"
                onClick={() => this.setState({ showCode: true })}
              >
                Show sourcecode
              </Button>
            </h6>
          }
        </div>
      </div>
    );
  }
};

export default Showcase;
