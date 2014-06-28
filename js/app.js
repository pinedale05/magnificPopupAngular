var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
});

app.directive('initMagnificPopup', function(){
  return {
      restrict: 'A',
      link: function(scope, element, attrs){ 
        console.log(attrs)
        $(element).magnificPopup({
          delegate: attrs.mpDelegate,
          closeOnContentClick: attrs.mpCloseoncontentclick, 
          type: attrs.mpType,
          zoom: evalAttrs(attrs.mpZoom),
          gallery: evalAttrs(attrs.mpGallery),
          disableOn: attrs.mpDisableon,
          removalDelay: attrs.mpRemovaldelay,
          preloader: attrs.mpPreloader,
          fixedContentPos: attrs.mpFixedcontentpos,
          fixedBgPos: attrs.mpFixedbgpos,
          overflowY: attrs.mpOverflowy,
          closeBtnInside: attrs.mpClosebtninside,
          midClick: attrs.mpMidclick,
          mainClass: attrs.mpMainclass,
          focus: attrs.mpFocus,
          alignTop: attrs.mpAligntop,
          modal: attrs.mpModal
        });
      }
  }
});

var evalAttrs = function(attrs){
  eval('var objAttrs='+attrs)
  console.log(objAttrs);
  return objAttrs;
}