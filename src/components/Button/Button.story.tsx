import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Button from './Button';

storiesOf('Button', module)
  .add('default button', () => <Button>Hello Storybook</Button>)
  .add('button with prop color = red', () => (
    <Button color="red">Hello Storybook</Button>
  ));
