import React from 'react';

import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';

export default {
  title: 'Button',
};

const ButtonStory: React.FC = () => <Button onClick={action('clicked')}>{text('Children', 'My Button')}</Button>;

export { ButtonStory };
