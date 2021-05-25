import React from 'react'
import { theme } from '../../styles/theme'
import { DisplayImage } from '../../design/Display'
import { FlexLayout } from '../../design/Layout'
import { TextAnchor } from '../../design/Typography'

interface Props {
    icon: string
    text: string
    url?: string
    isActive?: boolean
}

export const SideBarLeftAnchorLink = ({ icon, text, url, isActive }: Props) => {
    return (
        <FlexLayout
            style={{
                width: '100%',
                justifyContent: 'flex-start',
                gap: '1rem',
                cursor: 'pointer'
            }}
        >
            <FlexLayout
                style={{
                    height: '2.5rem',
                    width: '2.5rem',
                    background: `${theme.colors.blue}`,
                    borderRadius: '0.75rem'
                }}
            >
                <DisplayImage src={icon} alt={text} />
            </FlexLayout>
            <TextAnchor
                style={{
                    color: `${theme.colors.white}`,
                    fontSize: '.75rem'
                }}
            >
                {text}
            </TextAnchor>
        </FlexLayout>
    )
}
