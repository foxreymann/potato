angular.module('potatoFlickrApp')
  .constant('productionConfig', {
    feedUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK'
  })
