// Redirects to the sign-in page if no Firebase user is logged in.
// Include AFTER firebase-init.js on any page that requires a session.
window.addEventListener('agri-ready', function () {
    window.agri.onAuthChange(function (user) {
        if (!user) {
            window.location.href = '02_signin.html';
        }
    });
});
