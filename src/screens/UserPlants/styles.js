import styled, { css } from 'styled-components/native'

export const UserPlantsContainer = styled.KeyboardAvoidingView`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    padding: ${theme.metrics.px(68)}px ${theme.metrics.px(15)}px ${theme.metrics.px(0)}px;
    background-color: ${theme.colors.background};
  `}
`
