import React from 'react'
import { Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import Paragraph from 'antd/es/typography/Paragraph'
import { SearchApartment } from '@entities/searchApartment'
import { paragraphStyle, titleStyle } from './ApartmentCalc.styles'
import './ApartmentCalc.css'

export const ApartmentCalc = () => {
  return (
    <div className='container'>
      <div className='apartmentCalcBlock mb'>
        <div className='containerComponent'>
          <Typography>
            <Title style={titleStyle}>Оценка инвестиционной <br /> привлекательности квартиры </Title>
            <Paragraph style={paragraphStyle}>
              Анализ инвестиционной привлекательности квартиры на основе её <br /> параметров, также параметров жилого комплекса и инфраструктуры
            </Paragraph>
          </Typography>
          <SearchApartment />
        </div>
      </div>
    </div>
  )
}
