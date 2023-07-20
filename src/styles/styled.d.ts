import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface Theme {
    title: string;

    colors: {
      primary: string;
      secoundary: string;

      background: string;
      text: string;
    };
  }
};