'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('potatoFlickrApp', 'mockedFlickrFeedModule'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, mockedFlickrFeed) {
    $httpBackend.whenJSONP(/api.flickr.comi\/services\/feeds\/photos_public.gne/).respond(mockedFlickrFeed);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(3).toBe(3);
  });
});
