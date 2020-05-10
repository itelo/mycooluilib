import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 12,
  },
});

type ButtonProps = {
  children: React.ReactNode;
  color?: 'blue' | 'red';
  onPress?: TouchableOpacityProps['onPress'];
};

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: props.color}]}
      onPress={props.onPress}>
      <Text>{props.children}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  color: 'blue',
};

export default Button;
