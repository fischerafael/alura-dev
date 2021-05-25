import React from 'react'
import { NavBar } from '../../components/NavBar'
import { AppTemplate } from '../../components/AppTemplate'
import { SideBarLeft } from '../../components/SideBarLeft'
import { CodeDisplay } from '../../components/CodeDisplay'

export const EditorPage = () => {
    return (
        <>
            <NavBar />
            <AppTemplate>
                <SideBarLeft />
                <CodeDisplay />
            </AppTemplate>
        </>
    )
}
