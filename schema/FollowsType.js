/**
 * User: Lior Elrom
 * Date: 3/1/16
 * Time: 9:14 PM
 */

'use strict';

import {
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

export default {
    followersType: followsType('followers'),
    followingType: followsType('following')
};
