import styled, { css } from 'styled-components/native'

export const IconButtonContainer = styled.TouchableOpacity`
  ${({ theme, danger }) => css`
    width: ${danger ? theme.metrics.px(120) : theme.metrics.px(56)}px;
    height: ${danger ? theme.metrics.px(109) : theme.metrics.px(56)}px;
    margin-top: ${danger ? theme.metrics.px(10) : theme.metrics.px(0)}px;
    margin-right: ${danger ? theme.metrics.px(5) : theme.metrics.px(0)}px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${danger ? theme.metrics.px(20) : theme.metrics.px(16)}px;
    background-color: ${danger ? theme.colors.red : theme.colors.green};
  `}
`
