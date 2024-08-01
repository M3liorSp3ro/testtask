import React from 'react'
import { Typography } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import { searchBlockParagraph, searchBlockTitle } from './SearchBlock.styles'
import './SearchBlock.css'

export const SearchBlock = (props) => {

const {title, subTitle} = props

  return (
    <div className='searchItem'>
        <Typography>
            <Title style={searchBlockTitle} level={5}>{title}</Title>
            <Paragraph style={searchBlockParagraph}>{subTitle}</Paragraph>
        </Typography>
        <div className='stick' />
    </div>
  )
}
