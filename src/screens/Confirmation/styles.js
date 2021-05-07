import styled, { css } from "styled-components/native"

export const ConfirmationContainer = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: ${theme.metrics.px(32)}px ${theme.metrics.px(15)}px ${theme.metrics.px(38)}px;
  `}
`
