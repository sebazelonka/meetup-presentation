import React from 'react';
import {
  Deck,
  Slide,
  FlexBox,
  Appear,
  Notes,
  Box,
  Progress,
  Grid,
} from 'spectacle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/theme';
import { GlobalStyle } from './theme/globalstyle';
import { H1, H3, H2 } from '../src/components/title';
import { Paragraph } from './components/paragraph/Paragraph';
import { Image } from './components/image/Image';
import { Ul, Li } from './components/list/List';

const tema = {
  colors: {
    primary: '#fff',
    secondary: '#00f',
    backgroundColor: '#f00',
  },
};

const template = () => (
  <FlexBox justifyContent="flex-end" position="absolute" bottom={0} width={1}>
    <Box padding="0 1rem">
      <Progress color={theme.colors.paragraph} />
    </Box>
  </FlexBox>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Deck theme={tema} template={template} transitionEffect="fade">
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H1>Design Systems</H1>
            <H3>Un puente entre diseño y desarrollo</H3>
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <Image
              src={process.env.PUBLIC_URL + '/images/me.jpg'}
              alt="@sebazelonka"
            />
            <H2>@sebazelonka</H2>
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <Grid gridTemplateColumns="1fr 2fr" width="100%">
              <H1>Agenda</H1>
              <Ul>
                <Li>Qué es un Design System</Li>
                <Li>Para qué sirve</Li>
                <Li>Comunicación Diseño - Desarrollo</Li>
                <Li>¿Flujo de trabajo ideal?</Li>
                <Li>Demo</Li>
                <Li>Preguntas</Li>
              </Ul>
            </Grid>
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H1>Qué es un Design System</H1>
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <Box>
              <H1>Design System</H1>
            </Box>
            <Box marginY={2}>
              <Paragraph>■</Paragraph>
            </Box>
            <Box>
              <H1>Styleguide</H1>
            </Box>
            <Box marginY={2}>
              <Paragraph>■</Paragraph>
            </Box>
            <Box>
              <H1>UI Library</H1>
            </Box>
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H2>
              Los Sistemas de Diseño como tal, existen hace mucho en el mundo
              del diseño gráfico.
            </H2>
          </FlexBox>

          <Notes>
            <p>
              Hay muchas definiciones y diferencias sutiles entre los diferentes
              términos, pero en ésta charla me voy a enfocar en explicar
              brevemente el objetivo, cómo arrancar con uno y cómo implementarlo
              usando JS, no tanto en cómo se llama.
            </p>
          </Notes>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <Image
              src={process.env.PUBLIC_URL + '/images/tube.jpg'}
              alt="design system"
            />
            <Box marginTop={2}>
              <Paragraph>London tube - 1936</Paragraph>
            </Box>
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <Image
              src={process.env.PUBLIC_URL + '/images/quark.png'}
              alt="design system"
            />
            <Box marginTop={2}>
              <Paragraph>QuarkXpress - 1986</Paragraph>
            </Box>
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <Image
              src={process.env.PUBLIC_URL + '/images/ui.png'}
              alt="design system"
            />
            <Box marginTop={2}>
              <Paragraph>Interfaz Digital - 2000s</Paragraph>
            </Box>
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H1>Para qué sirve</H1>
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H1>2 objetivos principalmente:</H1>
            <Appear elementNum={0}>
              <Box marginBottom={2} marginTop={2}>
                <H2>Coherencia a través de toda la aplicación o sistema</H2>
              </Box>
            </Appear>
            <Appear elementNum={1}>
              <H2>Velocidad en el desarrollo</H2>
            </Appear>
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H1>Comunicación Diseño - Desarrollo</H1>
            <Appear elementNum={0}>
              <Box marginTop={2}>
                <H3>Algunos problemas y posibles solucionarlos</H3>
              </Box>
            </Appear>
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <Image
              src={process.env.PUBLIC_URL + '/images/design-front-tools.png'}
              alt="process"
            />
          </FlexBox>
          <Notes>
            <p>
              Las herramientas para diseñar y para desarrollar vienen
              desarrollándose hace mucho. Pero hasta no hace mucho tiempo, había
              una barrera entre esos 2 mundos.
            </p>
          </Notes>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <Image
              src={process.env.PUBLIC_URL + '/images/process.png'}
              alt="process"
            />
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <Image
              src={process.env.PUBLIC_URL + '/images/handoff.png'}
              alt="process"
            />
          </FlexBox>
          <Notes>
            <p>De hace un tiempo a esta parte, eso comenzó a cambiar.</p>
            <p>
              Las herramientas de diseño empezaron a incorporar cada vez más
              cosas para facilitar el traspaso entre los equipos.
            </p>
            <p>
              Del otro lado, también se vio la necesidad de crear herramientas
              que permitan visualizar y mantener ordenados los componentes que
              se iban creando.
            </p>
          </Notes>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <Image
              src={process.env.PUBLIC_URL + '/images/process-mark.png'}
              alt="process"
            />
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H1>¿Flujo de trabajo ideal?</H1>
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H1>No</H1>
            <Appear elementNum={0}>
              <Box marginTop={2}>
                <H2>No existe una metodología "one-fit-all"</H2>
              </Box>
            </Appear>
          </FlexBox>
          <Notes>
            <p>
              Existen muchísimas metodologías y sistemas que permiten organizar
              el Design System y los componentes
            </p>
            <p>
              Una de las más conocidas tal vez sea{' '}
              <a href="https://bradfrost.com/blog/post/atomic-web-design/">
                Atomic Design
              </a>{' '}
              desarrollada por Brad Frost hace unos años, pero lo que quiero
              destacar acá, es que cada proyecto y cada empresa tienen que
              encontrar su propia forma de organizar el DS.
            </p>
          </Notes>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H3>Atomic Design</H3>
            <Image
              src={process.env.PUBLIC_URL + '/images/atomic-design-process.png'}
              alt="design system"
            />
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H1>¿Primero el diseño o los componentes?</H1>
          </FlexBox>
          <Notes>
            <p>
              Un buen design system arranca con una buena comunicación entre
              todos los integrantes del equipo, sobre todo entre el equipo de
              diseño y el equipo de front end.
            </p>
            <p>
              La mejor forma de hacerlo, desde mi punto de vista, es como
              diseñadores, trabajando con componentes (o como se llamen
              dependiendo del software) en la herramienta que usemos. De ésta
              forma, vamos a estar dejando el camino allanado para cuando el
              equipo de front-end tenga que trabajar, ya que al reutilizar
              componentes es mas sencillo extraer elementos para componentizar
              el código
            </p>
          </Notes>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H3>Iterar</H3>
            <Image
              src={process.env.PUBLIC_URL + '/images/iterate.png'}
              alt="design system"
            />
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H1>Adaptarse</H1>
          </FlexBox>
          <Notes>
            <Paragraph>
              La mejor forma de hacerlo, desde mi punto de vista, es como
              diseñadores, trabajando con componentes (o como se llamen
              dependiendo del software) en la herramienta que usemos. De ésta
              forma, vamos a estar dejando el camino allanado para cuando el
              equipo de front-end tenga que trabajar, ya que al reutilizar
              componentes es mas sencillo extraer elementos para componentizar
              el código
            </Paragraph>
          </Notes>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H3>Encontrar la granularidad adecuada</H3>
            <Image
              src={process.env.PUBLIC_URL + '/images/granularity.png'}
              alt="design system"
            />
          </FlexBox>
        </Slide>

        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H1>Demo</H1>
          </FlexBox>
        </Slide>
        <Slide backgroundColor={theme.colors.mainBackground}>
          <FlexBox flexDirection="column" flex="1">
            <H1>¿Preguntas?</H1>
          </FlexBox>
        </Slide>
      </Deck>
    </ThemeProvider>
  );
}

export default App;
