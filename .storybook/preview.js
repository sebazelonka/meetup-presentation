import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../theme/globalstyle';
import { theme, inverted } from '../theme/theme';
import { ThemeProvider } from 'styled-components';

addDecorator((story) => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  </Fragment>
));
