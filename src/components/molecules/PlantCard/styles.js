import styled, { css } from 'styled-components/native'

export const PlantCardSmallContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    background-color: ${theme.colors.shape};
    border-radius: ${theme.metrics.px(20)}px;
    max-width: 45%;
    margin: ${theme.metrics.px(10)}px;
    padding: ${theme.metrics.px(10)}px;
  `}
`

export const PlantCardDetails = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: flex-end;
    margin-right: ${theme.metrics.px(15)}px;
  `}
`

export const PlantCardMediumContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    align-items: center;
    flex-direction: row;
    background-color: ${theme.colors.shape};
    border-radius: ${theme.metrics.px(20)}px;
    width: 95%;
    margin: ${theme.metrics.px(10)}px;
    padding: ${theme.metrics.px(20)}px ${theme.metrics.px(10)}px;
  `}
`
