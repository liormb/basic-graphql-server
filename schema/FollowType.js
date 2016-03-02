/**
 * User: Lior Elrom
 * Date: 2/28/16
 * Time: 2:36 PM
 */

'use strict';

import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

const FollowType = new GraphQLObjectType({
    name: 'Follow',
    description: 'GitHub follow user',
    fields: () => ({
        type      : { type: GraphQLString },
        id        : { type: GraphQLInt    },
        login     : { type: GraphQLString },
        url       : { type: GraphQLString },
        repos_url : { type: GraphQLString }

    })
});

export default FollowType;
