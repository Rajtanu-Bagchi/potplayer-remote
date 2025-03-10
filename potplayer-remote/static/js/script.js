let isPlaying = false;
const playIcon = document.getElementById('playIcon');
const connectionStatus = document.querySelector('.connection-status');

// Function to check server status
async function checkServerStatus() {
    try {
        const response = await fetch('/status'); // Add a /status endpoint in your Flask app
        if (response.ok) {
            connectionStatus.textContent = 'Connected';
            connectionStatus.style.background = '#a8d8ff'; // Blue for connected
        } else {
            throw new Error('Server error');
        }
    } catch (error) {
        connectionStatus.textContent = 'Disconnected';
        connectionStatus.style.background = '#ff6f61'; // Red for disconnected
    }
}

// Check server status on page load
checkServerStatus();

// Check server status periodically
setInterval(checkServerStatus, 5000); // Check every 5 seconds

function control(cmd,event) {
    // Add click animation
    event.target.classList.add('clicked');
    setTimeout(() => event.target.classList.remove('clicked'), 200);

    if(cmd === 'playpause') togglePlayIcon();

    fetch(`/${cmd}`).catch(err => showError());
}

function showError() {
    const status = document.querySelector('.connection-status');
    status.style.background = '#ff6f61';
    status.textContent = 'Connection Lost!';
    setTimeout(() => {
        status.style.background = '#a8d8ff';
        status.textContent = 'Connected';
    }, 2000);
}

function togglePlayIcon() {
    isPlaying = !isPlaying;
    playIcon.classList.toggle('fa-play');
    playIcon.classList.toggle('fa-pause');
}

function shutdownServer(event) {
    if (confirm("Are you want to shutdown the server?")) {
        fetch('/shutdown').then(() => alert("Server is Shutting Down...")).catch(err => {console.log("Server has been shut down.");});
    }
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/static/js/sw.js').then((registration) => {
        console.log('Service Worker registered:', registration);
    }).catch((error) => {
        console.error('Service Worker registration failed:', error);
    });
}

// Prevent zooming on mobile
document.addEventListener('touchmove', (e) => {
    if (e.scale !== 1) e.preventDefault();
}, {passive: false});