import { createServer } from 'node:http'
import assert from 'node:assert';

import {After, Before, Then, When} from '@cucumber/cucumber';

Before(function () {
  process.env.APP_ID = 12345;
  process.env.PRIVATE_KEY = '-----BEGIN RSA PRIVATE KEY-----\ntest-key\n-----END RSA PRIVATE KEY-----';
});

After(function () {
  delete process.env.APP_ID;
  delete process.env.PRIVATE_KEY;
});

When('the instance is started', async function () {
  const {default: middleware} = await import('../../../../api/index.js');

  this.server = createServer((req, res) => {
    middleware(req, res, () => {
      res.writeHead(404);
      res.end();
    });
  });
});

Then('it should start successfully', async function () {
  assert.ok(this.server);
});
