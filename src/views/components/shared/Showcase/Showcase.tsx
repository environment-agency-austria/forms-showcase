import * as React from 'react';

// tslint:disable-next-line:import-name
import PrismCode from 'react-prism';
import { Button } from 'reactstrap';

interface IShowcaseComponentProps {
  logMessage(msg: string): void;
}

interface IShowcaseProps {
  title: string;
  description: string;
  code: string;
  component: React.ComponentType<IShowcaseComponentProps>;
}

interface IShowcaseState {
  showCode: boolean;
  messageLog: string[];
}

export class Showcase extends React.Component<IShowcaseProps, IShowcaseState> {
  public state: IShowcaseState = {
    messageLog: [],
    showCode: false,
  };

  private logMessage = (msg: string): void => {
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

  private hideCode = (): void => {
    this.setState({ showCode: false });
  }

  private showCode = (): void => {
    this.setState({ showCode: true });
  }

  // tslint:disable-next-line:member-ordering
  public render(): JSX.Element {
    const {
      title,
      description,
      // tslint:disable-next-line:naming-convention
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
              <h6><Button color="link" onClick={this.hideCode}>Hide sourcecode</Button></h6>
              <PrismCode className="lang-jsx" component="pre">{code}</PrismCode>
            </React.Fragment>
          ) :
            <h6 className="mb-0">
              <Button
                color="link"
                onClick={this.showCode}
              >
                Show sourcecode
              </Button>
            </h6>
          }
        </div>
      </div>
    );
  }
}
