import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
