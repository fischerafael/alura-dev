import React from 'react'
import { GridLayoutOneTwoOne } from '../../design/Layout'
import { theme } from '../../styles/theme'

export const AppTemplate = ({ children }) => {
    return (
        <GridLayoutOneTwoOne
            style={{
                background: `${theme.colors.darkBlue}`,
                minHeight: '85vh',
                padding: '1rem'
            }}
        >
            {children}
        </GridLayoutOneTwoOne>
    )
}
