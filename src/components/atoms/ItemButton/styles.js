import styled, { css } from 'styled-components/native'

export const ItemButtonContainer = styled.TouchableOpacity`
  ${({ active, theme }) => css`
    background-color: ${active ? theme.colors.green_light : theme.colors.shape};
    border-radius: ${theme.metrics.px(12)}px;
    width: ${theme.metrics.px(76)}px;
    height: ${theme.metrics.px(40)}px;
    margin-right: ${theme.metrics.px(5)}px;
  `}
`
