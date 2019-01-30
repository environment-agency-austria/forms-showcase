declare module 'react-syntax-highlighter' {
  import React from 'react';
  export class PrismAsyncLight extends React.Component<SyntaxHighlighterProps> {
    public static registerLanguage(name: string, func: any): void;
  }
}

declare module 'react-syntax-highlighter/dist/languages/prism/bash' {
  const language: any;
  export default language;
}

declare module 'react-syntax-highlighter/dist/languages/prism/jsx' {
  const language: any;
  export default language;
}
