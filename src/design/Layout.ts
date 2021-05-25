import styled from 'styled-components'

export const FlexLayout = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const GridLayout = styled.section`
    display: grid;
    gap: 1rem;
`

export const GridLayoutOneTwoOne = styled(GridLayout)`
    grid-template-columns: 1fr 2fr 1fr;
`
