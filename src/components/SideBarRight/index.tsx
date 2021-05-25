import React from 'react'
import { ButtonDefault } from '../../design/Button'
import { InputText, InputTextArea } from '../../design/Input'
import { FlexLayout } from '../../design/Layout'
import { TextSubTitle } from '../../design/Typography'

export const SideBarRight = () => {
    return (
        <FlexLayout
            style={{
                height: '100%',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                gap: '2rem'
            }}
        >
            <FlexLayout
                style={{
                    flexDirection: 'column',
                    width: '100%',
                    gap: '1rem',
                    alignItems: 'flex-start'
                }}
            >
                <TextSubTitle>SEU PROJETO</TextSubTitle>
                <InputText placeholder="Nome do seu projeto" />
                <TextSubTitle>PERSONALIZAÇÃO</TextSubTitle>
                <InputTextArea placeholder="Descrição do seu projeto" />
            </FlexLayout>

            <ButtonDefault style={{ width: '100%' }}>
                Salvar Projeto
            </ButtonDefault>
        </FlexLayout>
    )
}
