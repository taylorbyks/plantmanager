import styled, { css } from 'styled-components/native'

export const PlantSaveContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.shape}
    justify-content: space-between;
  `}
`
export const PlantInfo = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.shape}
    justify-content: center;
    align-items: center;
    padding: ${theme.metrics.px(50)}px ${theme.metrics.px(0)}px ${theme.metrics.px(75)}px;
  `}
`

export const PlantController = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white}
    justify-content: flex-end;
    padding: ${theme.metrics.px(20)}px ${theme.metrics.px(20)}px ${theme.metrics.px(38)}px;
  `}
`