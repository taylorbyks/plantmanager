import styled, { css } from "styled-components/native"

export const HeaderContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 20;
  `}
`

export const UserImage = styled.Image`
  ${({ theme }) => css`
    width: ${theme.metrics.px(70)}px;
    height: ${theme.metrics.px(70)}px;
    border-radius: ${theme.metrics.px(35)}px;
  `}
`
