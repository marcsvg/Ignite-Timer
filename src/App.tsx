import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { CylesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CylesContextProvider>
        <RouterProvider router={router} />
      </CylesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
