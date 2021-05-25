import styled from 'styled-components'

export const InputText = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    padding: 0 1rem;
    outline: none;

    width: 100%;
    height: 3rem;
    background: ${(props) => props.theme.colors.greyBlue};
    color: ${(props) => props.theme.colors.white};
    font-size: 0.75rem;
    border-radius: 0.5rem;
`

export const InputTextArea = styled.textarea`
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    padding: 0 1rem;
    outline: none;

    padding: 1rem;
    resize: vertical;

    width: 100%;
    min-height: 4rem;
    background: ${(props) => props.theme.colors.greyBlue};
    color: ${(props) => props.theme.colors.white};
    font-size: 0.75rem;
    border-radius: 0.5rem;
`
