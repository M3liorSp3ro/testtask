import React from 'react'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { SearchBlock } from '@shared/searchBlock'
import { searchApartmentButton } from './SearchApartment.styles'
import './SearchApartment.css'
import { searchBlocks } from '../consts'

export const SearchApartment = () => {
    return (
        <div className='searchBlock'>
            <div className='searchContainer'>
                <div className='searchBlocks'>
                    {searchBlocks.map((searchBlock, i) => {
                        return <SearchBlock key={i} title={searchBlock.title} subTitle={searchBlock.subTitle} />
                    })}
                    <Button type="primary" shape="square" style={searchApartmentButton} icon={<SearchOutlined />} />
                </div>
            </div>
        </div>
    )
}
