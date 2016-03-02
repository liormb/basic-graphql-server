/**
 * User: Lior Elrom
 * Date: 2/28/16
 * Time: 9:43 AM
 */

'use strict';

import express from 'express';
import GraphQLHTTP from 'express-graphql';
import schema from './data/schema';

const app = express();
const PORT = 3000;

app.use('/GraphQL', GraphQLHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log('GraphiQL Server is listening at http://localhost:%s/graphql', PORT);
});
