import styled, { css } from "styled-components/native"

export const EnvironmentsListContainer = styled.FlatList`
  ${({ theme }) => css`
    margin-bottom: ${theme.metrics.px(30)}px;
    margin-top: ${theme.metrics.px(30)}px;
  `}
`


