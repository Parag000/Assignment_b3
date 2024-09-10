// resetPageLoad.js
window.addEventListener('beforeunload', function() {
    // Remove the pageLoaded flag when navigating away
    sessionStorage.removeItem('pageLoaded');
});
