/**
 * User: Lior Elrom
 * Date: 3/1/16
 * Time: 9:14 PM
 */

'use strict';

import axios from 'axios';
import { GraphQLList } from 'graphql';
import FollowType from './FollowType';

const fetchDataFromUrl = (url) => {
    const needToFormat = url.indexOf('{') > 0;
    const formattedUrl = needToFormat ? url.slice(0, url.indexOf('{')) : url;
    return axios.get(formattedUrl).then(res => res.data);
};

const FollowersType = () => {
    return {
        type: new GraphQLList(FollowType),
        description: 'GitHub information about a user\'s followers',
        resolve: data => fetchDataFromUrl(data.followers_url)
    };
};

export default FollowersType;
