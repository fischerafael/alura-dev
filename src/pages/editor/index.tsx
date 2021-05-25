import React from 'react'
import { NavBar } from '../../components/NavBar'
import { AppTemplate } from '../../components/AppTemplate'
import { SideBarLeft } from '../../components/SideBarLeft'
import { CodeDisplay } from '../../components/CodeDisplay'
import { SideBarRight } from '../../components/SideBarRight'

export const EditorPage = () => {
    return (
        <>
            <NavBar />
            <AppTemplate>
                <SideBarLeft />
                <CodeDisplay />
                <SideBarRight />
            </AppTemplate>
        </>
    )
}
