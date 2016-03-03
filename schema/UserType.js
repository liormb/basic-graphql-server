/**
 * User: Lior Elrom
 * Date: 2/28/16
 * Time: 10:34 AM
 */

'use strict';

import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';

import FollowersType from './FollowersType';
import FollowingType from './FollowingType';

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Basic GitHub user information',
    fields: () => ({
        'id'     : { type: GraphQLInt    },
        'login'  : { type: GraphQLString },
        'name'   : { type: GraphQLString },
        'avatar' : {
            type: GraphQLString,
            resolve: gitHubUser => gitHubUser.avatar_url
        },
        'created_at' : { type: GraphQLString },
        'updated_at' : { type: GraphQLString },
        'followers'  : FollowersType(),
        'following'  : FollowingType()
    })
});

export default UserType;
