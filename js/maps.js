<script>
    function initMap() {
      var home = {lat: 41.832042, lng:-87.612864};
      var map = new google.maps.Map(document.getElementById('map'), {zoom: 16, center: home});
      var marker = new google.maps.Marker({position: home, map: map});}
  </script>
  <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvQrwL5WpdEQ-wKv7CKDbWER2UwYE-b-k&callback=initMap">
  </script>