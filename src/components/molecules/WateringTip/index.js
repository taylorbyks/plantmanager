import React from 'react'

import { TipText } from '../../atoms'
import { TipContainer, TipImage } from './styles'
import waterdrop from '../../../assets/waterdrop.png'

export const WateringTip = ({ text }) => {
  return (
    <TipContainer>
        <TipImage source={waterdrop} />
      <TipText>{text}</TipText>
    </TipContainer>
  )
}
