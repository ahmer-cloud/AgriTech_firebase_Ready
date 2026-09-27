// Shows a floating "Sign In" button in the top-right corner for guests
// (no Firebase user logged in). Logged-in users see nothing extra --
// their existing avatar/profile link keeps working as before.
// Include AFTER firebase-init.js on any page that should be browsable
// WITHOUT forcing login (dashboard, mandi rates, weather, etc).
window.addEventListener('agri-ready', function () {
    window.agri.onAuthChange(function (user) {
        const existing = document.getElementById('guestSigninBtn');

        if (user) {
            // Logged in -- remove the guest button if it's there.
            if (existing) existing.remove();
            return;
        }

        if (existing) return; // already showing, nothing to do

        const btn = document.createElement('a');
        btn.id = 'guestSigninBtn';
        btn.href = '02_signin.html';
        btn.textContent = 'Sign In';
        btn.style.cssText = [
            'position:fixed',
            'top:14px',
            'right:14px',
            'z-index:3000',
            "font-family:'Plus Jakarta Sans', sans-serif",
            'font-weight:700',
            'font-size:0.82rem',
            'color:#fff',
            'background:linear-gradient(135deg, #52B788, #2D6A4F)',
            'padding:0.55rem 1.15rem',
            'border-radius:20px',
            'text-decoration:none',
            'box-shadow:0 6px 16px rgba(0,0,0,0.35)',
            'border:1px solid rgba(255,255,255,0.2)'
        ].join(';');

        document.body.appendChild(btn);
    });
});