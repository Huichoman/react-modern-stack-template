import 'react-i18next';

declare module 'react-i18next' {
  interface ReactI18NextChildren {
    [key: string]: any;
  }
}

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
