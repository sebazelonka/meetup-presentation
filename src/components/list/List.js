import styled from 'styled-components';

export const Ul = styled.ul`
  list-style-type: '- ';
`;

export const Li = styled.li`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.paragraph};
  margin-bottom: 1rem;
`;
