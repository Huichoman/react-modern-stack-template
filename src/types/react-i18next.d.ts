// src/types/react-i18next.d.ts
import 'react-i18next';

declare module 'react-i18next' {
  interface ReactI18NextChildren {
    [key: string]: any;
  }
}

// Global override for React children types
declare global {
  namespace React {
    type ReactNode =
      | ReactElement<any, any>
      | string
      | number
      | Iterable<ReactNode>
      | ReactPortal
      | boolean
      | null
      | undefined;
  }
}
