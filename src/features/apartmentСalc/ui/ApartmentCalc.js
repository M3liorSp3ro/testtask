import React from 'react'
import './ApartmentCalc.css'
import { Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import { titleStyle } from './ApartmentCalc.styles'
import { paddingBottom } from '../../../shared'

export const ApartmentCalc = () => {
  return (
    <div className='container'>
        <div className='apartmentCalcBlock'>
            <div className='containerComponent'>
                <Typography style={paddingBottom()}>
                    <Title style={titleStyle}>Оценка инвестиционной <br/> привлекательности квартиры </Title>
                </Typography>
            </div>
        </div>
    </div>
  )
}
