import React from 'react'

import { FlexLayout } from '../../design/Layout'
import { TextSubTitle } from '../../design/Typography'
import { theme } from '../../styles/theme'
import { SideBarLeftAnchorLink } from '../SideBarLeftAnchorLink'

export const SideBarLeft = () => {
    return (
        <FlexLayout
            style={{
                height: '100%',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                gap: '1rem'
            }}
        >
            <TextSubTitle
                style={{
                    color: `${theme.colors.white}`,
                    fontSize: '.75rem',
                    letterSpacing: '.3rem'
                }}
            >
                MENU
            </TextSubTitle>

            <SideBarLeftAnchorLink
                icon="/assets/code-editor.svg"
                text="Editor de Código"
                url="#"
            />

            <SideBarLeftAnchorLink
                icon="/assets/community.svg"
                text="Comunidade"
                url="#"
            />
        </FlexLayout>
    )
}
