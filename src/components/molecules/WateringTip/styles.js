import styled, { css } from 'styled-components/native'

export const TipContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    position: relative;
    border-radius: 20;
    background-color: ${theme.colors.blue_light}
    justify-content: space-between;
    align-items: center;
    padding: ${theme.metrics.px(20)}px;
    bottom: ${theme.metrics.px(10)}px;
  `}
`

export const TipImage = styled.Image`
  ${({ theme }) => css`
    width: ${theme.metrics.px(56)}px;
    height: ${theme.metrics.px(56)}px;
  `}
`