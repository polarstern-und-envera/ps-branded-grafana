import { css } from '@emotion/react';

import { GrafanaTheme2 } from '@grafana/data';

export function getFontStyles(theme: GrafanaTheme2) {
  const grafanaPublicPath = typeof window !== 'undefined' && window.__grafana_public_path__;
  const fontRoot = grafanaPublicPath ? `${grafanaPublicPath}fonts/` : 'public/fonts/';

  return css([
    {
      /* latin */
      '@font-face': {
        fontFamily: 'Roboto Mono',
        fontStyle: 'normal',
        fontWeight: 400,
        fontDisplay: 'swap',
        src: `url('${fontRoot}roboto/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0mQ.woff2') format('woff2')`,
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
    },
    {
      /* latin */
      '@font-face': {
        fontFamily: 'Roboto Mono',
        fontStyle: 'normal',
        fontWeight: 500,
        fontDisplay: 'swap',
        src: `url('${fontRoot}roboto/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0mQ.woff2') format('woff2')`,
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      },
    },
    {
      /* Helvetica LT W01 Light (weight 300) */
      '@font-face': {
        fontFamily: 'Helvetica Neue',
        fontStyle: 'normal',
        fontWeight: 300,
        fontDisplay: 'swap',
        src: `url('${fontRoot}Helvetica/37953885-0443-4c72-a693-9152a9f5a901.woff2') format('woff2'), url('${fontRoot}Helvetica/fcce277c-07e2-4c88-ad8b-a71b484e2cbe.woff') format('woff'), url('${fontRoot}Helvetica/315bbeb9-a30f-4f38-91ae-d6cfbbf89437.ttf') format('truetype')`,
      },
    },
    {
      /* Helvetica LT W01 Roman (weight 400) */
      '@font-face': {
        fontFamily: 'Helvetica Neue',
        fontStyle: 'normal',
        fontWeight: 400,
        fontDisplay: 'swap',
        src: `url('${fontRoot}Helvetica/89294146-207c-4803-91fe-338f0d0094bd.woff2') format('woff2'), url('${fontRoot}Helvetica/57055fe4-c2d3-4287-bac2-eece43fdcbd3.woff') format('woff'), url('${fontRoot}Helvetica/2922d55c-8df4-4066-b7b0-eec2d1524330.ttf') format('truetype')`,
      },
    },
    {
      /* Helvetica LT W01 Bold (weight 700) */
      '@font-face': {
        fontFamily: 'Helvetica Neue',
        fontStyle: 'normal',
        fontWeight: 700,
        fontDisplay: 'swap',
        src: `url('${fontRoot}Helvetica/7ce0a2f5-eb00-46aa-919c-5b3f3667646c.woff2') format('woff2'), url('${fontRoot}Helvetica/cad22c74-45b4-4c49-9e6a-0cd3768a7bc7.woff') format('woff'), url('${fontRoot}Helvetica/8ebb9b04-d12d-488e-aa96-0bb6e6777336.ttf') format('truetype')`,
      },
    },
  ]);
}
