'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function NextProgressBar() {
  return (
    <ProgressBar
      height="3px"
      color="#29D"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}