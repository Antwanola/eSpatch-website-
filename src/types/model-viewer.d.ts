// types/model-viewer.d.ts

export {};

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'model-viewer': any;
//     }
//   }
// }

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps
        React.HTMLAttributes<HTMLElement> & Record<string, any>,
        HTMLElement
      >;
    }
  }
}