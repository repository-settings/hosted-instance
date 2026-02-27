import { createNodeMiddleware, createProbot } from 'probot'

import app from '@repository-settings/app'

export default createNodeMiddleware(app, {
  probot: createProbot(),
  webhooksPath: '/'
})
