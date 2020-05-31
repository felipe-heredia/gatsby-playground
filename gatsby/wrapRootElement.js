import React from 'react'
import { ThemeProvider } from 'styled-components'

import Theme from '../src/styles/theme'

export function wrapRootElement({ element }) {
  return <ThemeProvider theme={Theme}>{element}</ThemeProvider>
}
