import express from 'express';
import { initTRPC } from '@trpc/server';
import * as t from 'io-ts';

const app = express();

// Define your TRPC queries and mutations here
const t = initTRPC();

app.use('/trpc', t.createExpressMiddleware());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
