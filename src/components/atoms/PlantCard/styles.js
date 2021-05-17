import styled, { css } from "styled-components/native"

export const PlantCardContainer = styled.TouchableOpacity`
  ${({ theme, medium}) => css`
    flex: 1;
    align-items: center;
    background-color: ${theme.colors.shape};
    border-radius: ${theme.metrics.px(20)}px;
    max-width: ${medium ? "45%" : "95%"};
    margin: ${theme.metrics.px(10)}px;
    padding: ${theme.metrics.px(10)}px;
  `}
`
