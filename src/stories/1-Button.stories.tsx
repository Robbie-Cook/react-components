import React from 'react';

import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../Button';

export default {
  title: 'Button',
  component: Button,
};

const Text: React.FC = () => <Button onClick={action('clicked')}>{text('Children', 'My Button')}</Button>;

export { Text };
