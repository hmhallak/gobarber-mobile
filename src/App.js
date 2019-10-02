import React from 'react';
import { YellowBox } from 'react-native';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

import createRouter from './routes';

YellowBox.ignoreWarnings(['RCTRootView cancelTouches']);

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes />;
}
