import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './ErrorCatcher.styles';

interface IErrorCatcher {
  onRetry: () => void;
}

export const ErrorCatcher: React.FC<IErrorCatcher> = ({onRetry}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AN ERROR OCURRED.</Text>
      <Button title="Retry" onPress={onRetry} />
    </View>
  );
};
