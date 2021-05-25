import styled from 'styled-components'

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    height: 2.5rem;
    padding: 0 2rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    cursor: pointer;
`

export const ButtonDefault = styled(Button)`
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.blue};
    &:hover {
        background: ${(props) => props.theme.colors.greyBlue};
    }
`
