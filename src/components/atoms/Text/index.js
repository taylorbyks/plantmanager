import styled, { css } from 'styled-components/native'

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(32)}px;
    color: ${theme.colors.heading};
    text-align: center;
    font-family: ${theme.fonts.heading};
    line-height: ${theme.metrics.px(40)}px;
  `}
`

export const TitleRegular = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(32)}px;
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.text};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(24)}px;
    color: ${theme.colors.heading};
    text-align: center;
    margin-bottom: ${theme.metrics.px(32)}px;
    font-family: ${theme.fonts.heading};
  `}
`

export const PlantTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(24)}px;
    color: ${theme.colors.heading};
    margin-bottom: ${theme.metrics.px(5)}px;
    margin-top: ${theme.metrics.px(5)}px;
    font-family: ${theme.fonts.heading};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(18)}px;
    color: ${theme.colors.heading};
    padding-left: ${theme.metrics.px(20)}px;
    text-align: center;
    padding-right: ${theme.metrics.px(20)}px;
    font-family: ${theme.fonts.text};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(18)}px;
    color: ${theme.colors.heading};
    padding-left: ${theme.metrics.px(20)}px;
    padding-right: ${theme.metrics.px(20)}px;
    font-family: ${theme.fonts.text};
  `}
`

export const TextBold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(18)}px;
    color: ${theme.colors.heading};
    padding-left: ${theme.metrics.px(20)}px;
    padding-right: ${theme.metrics.px(20)}px;
    font-family: ${theme.fonts.heading};
  `}
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(18)}px;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.text};
  `}
`
export const ItemButtonText = styled.Text`
  ${({ active, theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    color: ${active ? theme.colors.green_dark : theme.colors.heading};
    text-align: center;
    line-height: ${theme.metrics.px(40)}px;
    justify-content: center;
    font-family: ${active ? theme.fonts.heading : theme.fonts.text};
  `}
`

export const PlantCardText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    color: ${theme.colors.heading};
    line-height: ${theme.metrics.px(40)}px;
    font-family: ${theme.fonts.heading};
  `}
`

export const Emoji = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(48)}px;
    margin-bottom: ${theme.metrics.px(8)}px;
  `}
`

export const TipText = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-size: ${theme.metrics.px(16)}px;
    margin-left: ${theme.metrics.px(20)}px;
    color: ${theme.colors.blue};
    font-family: ${theme.fonts.text};
  `}
`

export const AlertLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(12)}px;
    margin-bottom: ${theme.metrics.px(5)}px;
    color: ${theme.colors.heading};
    text-align: center;
    font-family: ${theme.fonts.complement};
  `}
`

export const TextDataTimePicker = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.metrics.px(15)}px;
    font-size: ${theme.metrics.px(24)}px;
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.text};
  `}
`

export const TimeText = styled.Text`
  ${({ theme }) => css`
    margin-top: ${theme.metrics.px(5)}px;
    font-size: ${theme.metrics.px(16)}px;
    color: ${theme.colors.body_dark};
    font-family: ${theme.fonts.heading};
  `}
`

export const TimeLabelText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.metrics.px(16)}px;
    color: ${theme.colors.body_light};
    font-family: ${theme.fonts.text};
  `}
`
