
const shaka = require("shaka-player");


class ShakaService {

    // méthode pour afficher la vidéo avec l'utilisation de plugin Shaka-player
    static DisplayVideo(url) {

        let videoElement = document.getElementById("myVideo");
        videoElement.style.display = "block";
        var shakaplayer = new shaka.Player(videoElement);
        var playerConfig = {
            streaming: {
                bufferingGoal: 30,
            },
            preferredAudioLanguage: 'fr-FR'
        };
        if (shaka.Player.isBrowserSupported()) {
            shakaplayer.configure(playerConfig);
            shakaplayer.load(url);
        }
    }

}
export default ShakaService;