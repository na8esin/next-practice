'use client'

import { create } from './actions'

export function Button() {
  const hundleClick = async () => {
    const createe = await create()
    console.log(createe)
  }

  return <button onClick={() => hundleClick()}>Create</button>
}