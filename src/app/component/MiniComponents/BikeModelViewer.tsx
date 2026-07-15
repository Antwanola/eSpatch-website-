// components/BikeModelViewer.tsx
'use client';

import { createElement } from 'react';
import ModelViewerLoader from './../ModelViewer';

export default function BikeModelViewer() {
  return (
    <>
      <ModelViewerLoader />
      {createElement('model-viewer' as const, {
        className: 'espatch-model-viewer',
        src: '/models/espatch-bike.glb',
        alt: 'eSpatch delivery bike',
        'auto-rotate': true,
        'camera-controls': true,
        'shadow-intensity': '1',
        exposure: '0.8',
      })}
    </>
  );
}