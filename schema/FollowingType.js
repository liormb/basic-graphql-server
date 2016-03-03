/**
 * User: Lior Elrom
 * Date: 3/2/16
 * Time: 8:00 PM
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

const FollowingType = () => {
    return {
        type: new GraphQLList(FollowType),
        description: 'GitHub information about who the user is following',
        resolve: data => fetchDataFromUrl(data.following_url)
    };
};

export default FollowingType;
