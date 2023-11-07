'use client';

import { EXTERNAL_LINKS } from '@/constants/index.ts';

export default function ApplicationWrapper(props) {
  return (
    <body>
      { props.children }

      <footer>
        <span>
          Color Scheme: <a href={ EXTERNAL_LINKS.DRACULA } target="_blank">Dracula</a>
        </span>
      </footer>
    </body>
  )
}
