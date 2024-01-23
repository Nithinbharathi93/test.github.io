const startButton = document.getElementById('startButton');
const videoFeed = document.getElementById('videoFeed');
let whoisitb = document.getElementById("whoi");

startButton.addEventListener('click', function() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            videoFeed.srcObject = stream;
            whoisitb.innerHTML = "Its You..!";
        })
        .catch(function(err) {
            console.log('An error occurred: ' + err);
        });
});
