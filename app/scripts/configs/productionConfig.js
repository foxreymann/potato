angular.module('potatoFlickrApp')
  .constant('productionConfig', {
    feedUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK',
    authorPageUrl: ' https://www.flickr.com/people/{0}',
    searchPageUrl: 'https://www.flickr.com/search?text={0}'
  })
