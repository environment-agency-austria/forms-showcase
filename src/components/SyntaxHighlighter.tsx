import * as  React from 'react';

import { PrismAsyncLight as CodeHighlighter } from 'react-syntax-highlighter';

import bash from 'react-syntax-highlighter/languages/prism/bash';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import tomorrow from 'react-syntax-highlighter/styles/prism/tomorrow';

CodeHighlighter.registerLanguage('jsx', jsx);
CodeHighlighter.registerLanguage('bash', bash);

interface ISyntaxHighlighterProps {
  code: string;
  language?: 'jsx' | 'bash';
}

export const SyntaxHighlighter: React.SFC<ISyntaxHighlighterProps> = ({ code, language = 'jsx' }): JSX.Element => {
  return <CodeHighlighter language={language} style={tomorrow}>{code}</CodeHighlighter>;
};
