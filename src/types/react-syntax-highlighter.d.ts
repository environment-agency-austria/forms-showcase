declare module 'react-syntax-highlighter' {
  import * as React from 'react';
  export class PrismAsyncLight extends React.Component<SyntaxHighlighterProps> {
    public static registerLanguage(name: string, func: any): void;
  }
}
