import React from 'react'
import { DisplayImage } from '../../design/Display'
import { InputText } from '../../design/Input'
import { FlexLayout } from '../../design/Layout'
import { TextParagraph } from '../../design/Typography'
import { theme } from '../../styles/theme'

export const NavBar = () => {
    return (
        <FlexLayout
            as="nav"
            style={{
                background: `${theme.colors.darkBlue}`,
                width: '100%',
                height: '15vh',
                padding: '0 1rem',
                justifyContent: 'space-between'
            }}
        >
            <FlexLayout
                style={{
                    height: '100%',
                    width: '25%',
                    justifyContent: 'flex-start'
                }}
            >
                <DisplayImage src="/assets/logo.svg" alt="Alura Dev Logo" />
            </FlexLayout>

            <FlexLayout style={{ height: '100%', width: '50%' }}>
                <InputText
                    placeholder="Busque por algo"
                    style={{
                        width: '100%',
                        height: '3rem',
                        borderRadius: '.5rem',
                        background: `${theme.colors.greyBlue}`,
                        color: `${theme.colors.white}`
                    }}
                />
            </FlexLayout>

            <FlexLayout
                style={{
                    height: '100%',
                    width: '25%',
                    justifyContent: 'flex-end',
                    gap: '0.5rem'
                }}
            >
                <DisplayImage
                    src="https://avatars.githubusercontent.com/u/47259718?v=4"
                    alt="User Profile"
                    style={{ width: '2rem', borderRadius: '1rem' }}
                />
                <TextParagraph style={{ color: `${theme.colors.white}` }}>
                    Rafael Fischer
                </TextParagraph>
            </FlexLayout>
        </FlexLayout>
    )
}
