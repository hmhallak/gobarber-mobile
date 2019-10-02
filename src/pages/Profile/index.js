import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Backgrond from '~/components/Background';
// import { Container } from './styles';

export default function Profile() {
  return <Backgrond />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
