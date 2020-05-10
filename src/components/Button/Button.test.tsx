import React from 'react';
import {render} from 'react-native-testing-library';
import Button from './Button';

describe('<Button />', () => {
  it('testing color default', () => {
    const view = render(<Button>Hello Testing Library</Button>);

    expect(view.toJSON()?.props.style.backgroundColor).toBe('blue');
  });

  it('testing color = red', () => {
    const view = render(<Button color="red">Hello Testing Library</Button>);

    expect(view.toJSON()?.props.style.backgroundColor).toBe('red');
  });
});
