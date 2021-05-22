import styled, { css } from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  ${({ theme, medium }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.green};
    border-radius: ${theme.metrics.px(16)}px;
    width: ${medium ? '75%' : '100%'};
    height: ${theme.metrics.px(56)}px;
    margin-bottom: ${theme.metrics.px(10)}px;
    margin-top: ${ medium ? theme.metrics.px(30) : 0 }px;
  `}
`

export const ButtonDataTimePickerContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    align-items: center;
    width: '100%';
    padding-left: ${theme.metrics.px(40)}px;
    padding-right: ${theme.metrics.px(40)}px;
  `}
`

