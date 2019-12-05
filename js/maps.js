   function initMap() {
      var home = {
        lat: 41.832042, 
        lng:-87.612864
      };
      var school = {
        lat:41.835134,
        lng:-87.626981
      };
      var gym = {
        lat:41.832133, 
        lng:-87.615088
      };
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: home
      });
      var marker = new google.maps.Marker({
        position: home,
        map: map,
        icon: 'media/icon.png'
      });
      var marker2 = new google.maps.Marker({
        position:school, 
        map: map,
        icon: 'media/icon.png'
      });
      var marker3 = new google.maps.Marker({
        position:gym, 
        map: map,
        icon: 'media/icon.png'
      });
      var infoWindow = new google.maps.InfoWindow({
        content: 'My home'
      });
      marker.addListener('click', function () {
       infoWindow.open(map, marker);
      })
      var infoWindow2 = new google.maps.InfoWindow({
        content: 'My School'
      });
      marker2.addListener('click', function () {
        infoWindow2.open(map, marker2);
      })
      var infoWindow3 = new google.maps.InfoWindow({
        content: 'My Gym'
      });
      marker3.addListener('click', function () {
       infoWindow3.open(map, marker3);
      })
      var transitLayer = new google.maps.TransitLayer();
      }
 