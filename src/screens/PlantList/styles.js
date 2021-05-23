import styled, { css } from 'styled-components/native'

export const PlantListContainer = styled.KeyboardAvoidingView`
  ${({ theme }) => css`
    flex: 1;
    justify-content: space-between;
    padding: ${theme.metrics.px(68)}px ${theme.metrics.px(15)}px ${theme.metrics.px(38)}px;
    background-color: ${theme.colors.background};
  `}
`
