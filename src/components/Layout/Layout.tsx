import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>{children}</SafeAreaView>
  );
};

export default Layout;
