import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import AppAppBar from './components/AppAppBar'
import AppTheme from './shared-theme/AppTheme'
import { CssBaseline } from '@mui/material'
import { CurrentUserContext, CurrentUserHolder } from './contexts/CurrentUserContext'

function App(props) {
  return (
    <>
      <CurrentUserHolder>
        <AppTheme {...props}>
          <CssBaseline enableColorScheme />
          <AppAppBar />
          <AppRoutes />
        </AppTheme>
      </CurrentUserHolder>
    </>
  )
}

export default App
