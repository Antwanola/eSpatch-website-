import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          autoplay?: boolean;
          'camera-controls'?: boolean;
          'ar'?: boolean;
          'shadow-intensity'?: string;
          'auto-rotate'?: boolean;
          'disable-zoom'?: boolean;
        },
        HTMLElement
      >;
    }
  }
}
