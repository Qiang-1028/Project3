<script>
    function initMap() {
      var home = {lat: 41.832042, lng:-87.612864};
      var school = {lat:41.835134, lng:-87.626981};
      var gym = {lat:41.832133, lng:-87.615088};
      var map = new google.maps.Map(document.getElementById('map'), {zoom: 15, center: home});
      var marker = new google.maps.Marker({position: home, map: map});
      var marker2 = new google.maps.Marker({position:school, map: map});
      var marker3 = new google.maps.Marker({position:gym, map: map});}
  </script>
  <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvQrwL5WpdEQ-wKv7CKDbWER2UwYE-b-k&callback=initMap">
  </script>