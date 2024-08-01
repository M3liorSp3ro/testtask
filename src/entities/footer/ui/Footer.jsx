import React from 'react'
import Typography from 'antd/es/typography/Typography'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import { Logo } from '@shared/svg'
import { footerTitle } from './Footer.styles'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='footerBlock'>
            <div className='container'>
                <div className="footerLogo">
                    <Logo size={47} />
                    <Title style={footerTitle}>LOGO</Title>
                </div>
                <Typography>
                    <Paragraph style={{color: 'rgba(137, 145, 162, 1)'}}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Ut et massa mi.
                        Aliquam in hendrerit urna. Pellentesque sit amet
                        sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                        Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                    </Paragraph>
                    <Paragraph style={{color: 'rgba(137, 145, 162, 1)'}}>
                        Curabitur pellentesque nibh nibh,
                        at maximus ante fermentum sit amet. Pellentesque
                        commodo lacus at sodales sodales. Quisque sagittis
                        orci ut diam condimentum, vel euismod erat placerat.
                        In iaculis arcu eros, eget tempus orci facilisis id.
                    </Paragraph>
                </Typography>
            </div>
        </div>
    )
}
