import React from 'react'
import Title from 'antd/es/typography/Title'
import { Button } from 'antd'
import { Logo } from '@shared/svg'
import { buttonText, headerTitle } from './Header.styles'
import './Header.css'

export const Header = () => {
    return (
        <div className='container'>
            <div className='headerBlock'>
                <div className="headerLogo">
                    <Logo size={63} />
                    <Title style={headerTitle}>LOGO</Title>
                </div>
                <div className="headerButton">
                    <Button type="primary" size={'large'} block>
                        <Title style={buttonText} level={5}>Войти</Title>
                    </Button>
                </div>

            </div>
        </div>
    )
}
