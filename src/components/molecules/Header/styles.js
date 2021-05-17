import styled, { css } from "styled-components/native"

export const HeaderContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: ${theme.metrics.px(20)}px;
    margin-bottom: ${theme.metrics.px(35)}px;
  `}
`

export const UserImage = styled.Image`
  ${({ theme }) => css`
    width: ${theme.metrics.px(70)}px;
    height: ${theme.metrics.px(70)}px;
    border-radius: ${theme.metrics.px(35)}px;
  `}
`
