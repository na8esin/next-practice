'use server'

import { env } from 'node:process';
import crypto from "crypto";

export async function create(): Promise<string> {
  return `{ "id": "${crypto.randomBytes(16).toString("hex")}" }`
}

export async function fetchPWD(): Promise<string> {
  return `${env.PWD ?? ''}`
}