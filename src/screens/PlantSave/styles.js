import styled, { css } from 'styled-components/native'

export const PlantSaveContent = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.shape}
    justify-content: space-around;
  `}
`

export const PlantSaveContainer = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.shape};
  `}
`

export const PlantInfo = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.shape}
    justify-content: center;
    align-items: center;
    padding: ${theme.metrics.px(50)}px ${theme.metrics.px(20)}px ${theme.metrics.px(40)}px;
  `}
`

export const PlantController = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white}
    padding: ${theme.metrics.px(0)}px ${theme.metrics.px(20)}px ${theme.metrics.px(38)}px;
  `}
`