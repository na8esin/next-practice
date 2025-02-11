'use client'

import { create, fetchPWD } from './actions'

export function Button() {
  const hundleClick = async () => {
    const created = await create()
    console.log(created)
  }

  return <button onClick={() => hundleClick()}>Create</button>
}

export function PWDButton() {
  const hundleClick = async () => {
    const pwd = await fetchPWD()
    console.log(pwd)
  }

  return <button onClick={() => hundleClick()}>pwd</button>
}
