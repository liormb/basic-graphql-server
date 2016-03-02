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

import axios from 'axios';
import FollowType from './FollowType';

const fetchDataFromUrl = (url) => {
    const needToFormat = url.indexOf('{') > 0;
    const formattedUrl = needToFormat ? url.slice(0, url.indexOf('{')) : url;
    return axios.get(formattedUrl).then(res => res.data);
};

const followsType = (type) => {
    return {
        type: new GraphQLList(FollowType),
        description: 'GitHub information about following or followers',
        resolve: data => fetchDataFromUrl(data[`${type}_url`])
    };
};

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
        'followers'  : followsType('followers'),
        'following'  : followsType('following')
    })
});

export default UserType;
