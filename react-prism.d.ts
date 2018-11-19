import * as React from 'react';

interface PrismProps {
  async?: boolean;
  className?: string;
  component?: React.ReactType;
  children?: React.ReactNode;
}

declare class PrismCode extends React.PureComponent<PrismProps> {}

export default PrismCode;
