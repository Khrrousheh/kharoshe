import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const env = globalThis.process?.env ?? {}
const repositoryName = env.GITHUB_REPOSITORY?.split('/')[1]
const isUserOrOrganizationSite = repositoryName?.endsWith('.github.io')
const githubPagesBase = repositoryName && !isUserOrOrganizationSite ? `/${repositoryName}/` : '/'

const normalizeBase = (base) => {
  const withLeadingSlash = base.startsWith('/') ? base : `/${base}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

export default defineConfig({
  base: env.VITE_BASE_PATH
    ? normalizeBase(env.VITE_BASE_PATH)
    : env.GITHUB_ACTIONS
      ? githubPagesBase
      : '/',
  plugins: [react()],
})
