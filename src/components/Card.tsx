'use client';

import { mergeDefaultClassWithProps } from '@/utils/index.ts';

export default function Card(props) {
  return (
    <div className={ mergeDefaultClassWithProps('background-alt rounded-md shadow-md', props) }>
      { props.children }
    </div>
  )
}
