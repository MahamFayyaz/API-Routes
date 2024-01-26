import { user } from '@/app/dummydata'
import React from 'react'
import {NextResponse} from 'next/server'
export function GET(resonse) {
    const data=user;
  return (
    NextResponse.json(data)
  )
}
