import { loadEnvConfig } from '@next/env'

export default async function setupEnv(): Promise<void> {
  loadEnvConfig(process.cwd())
}
