// JavaScript for the details page
window.onload = function() {
    // Store the first image URL in local storage
    localStorage.setItem('firstImage', document.getElementById('first-image').src);
};

// Initialize Google Map
function initMap() {
    var propertyLocation = {lat: -1.2921, lng: 36.8219}; // Set property location
    var map = new google.maps.Map(document.getElementById('map'), {
        center: propertyLocation,
        zoom: 14
    });

    var marker = new google.maps.Marker({
        position: propertyLocation,
        map: map
    });
}

// Call map initialization
initMap();
