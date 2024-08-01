import React from 'react'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import { evaluationBlockDigits, evaluationBlockParagraph, evaluationBlockTitle } from './EvaluationBlock.styles'
import './EvaluationBlock.css'

export const EvaluationBlock = (props) => {

    const { title, digits, desc, color } = props

    return (
        <div className='evaluationBlock'>
            <Title level={5} style={evaluationBlockTitle}>
                {title}
            </Title>
            <Title level={1} style={evaluationBlockDigits(color)}>
                {digits}
            </Title>
            <Paragraph style={evaluationBlockParagraph}>
                {desc}
            </Paragraph>
        </div>
    )
}
