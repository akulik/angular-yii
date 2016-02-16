;(function (ng) {
  "use strict";

  ng.module('app').factory('API', ApiService);

  ApiService.$inject = ['$resource'];
  function ApiService ($resource) {
    "use strict";
    const root = 'http://hfm_api.kulik.php.nixsolutions.com/';

    return {
      posts: $resource(root + '/posts/:id', {id: '@id'}, {
        put: {
          method: 'put'
        },
        getComments: {
          method: 'get',
          url: root + '/posts/:id/comments',
          params: {
            id: '@id'
          }
        }
      }),
      users: $resource(root + '/users/:id', {id: '@id'}, {
        put: {
          method: 'put'
        },
        getPosts: {
          method: 'get',
            isArray: true,
          url: root + '/users/:id/posts',
          params: {
            id: '@id'
          }
        }
      }),
      comments: $resource(root + '/comments/:id', {id: '@id'}, {
        put: {
          method: 'put'
        }
      })
    }
  }

}(window.angular));
