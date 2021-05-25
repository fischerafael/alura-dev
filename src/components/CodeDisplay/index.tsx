import React from 'react'
import { ButtonDefault } from '../../design/Button'
import { FlexLayout } from '../../design/Layout'

export const CodeDisplay = () => {
    return (
        <FlexLayout
            style={{
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '2rem'
            }}
        >
            <FlexLayout
                style={{
                    background: 'blue',
                    width: '100%',
                    minHeight: '40vh',
                    flexDirection: 'column',
                    borderRadius: '0.5rem'
                }}
            >
                <FlexLayout>oi</FlexLayout>
            </FlexLayout>
            <ButtonDefault style={{ width: '100%' }}>
                Visualizar com highlight
            </ButtonDefault>
        </FlexLayout>
    )
}
