import React from 'react';
import { Title } from '../components/title';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Title',
  decorators: [withA11y],
  component: Title,
};

export const Simple = () => <Title>Title</Title>;
