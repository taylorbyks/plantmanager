import styled, { css } from 'styled-components/native'

export const PlantSelectContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background}
    flex: 1;
    justify-content: flex-start;
    padding: ${theme.metrics.px(48)}px ${theme.metrics.px(15)}px ${theme.metrics.px(38)}px;
  `}
`
