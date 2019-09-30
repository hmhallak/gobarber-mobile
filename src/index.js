import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

YellowBox.ignoreWarnings(['RCTRootView cancelTouches']);

export default function src() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
