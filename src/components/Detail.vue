<template>
  <div>
    <video controls autoplay id="myVideo" width="100%" height="100%"></video>

    <div v-if="!VideoDisplay">
      <div
        class="background"
        :style="{
          'background-image':
            'url(' +
            'https://statics.ocs.fr' +
            ProgrammeData.fullscreenimageurl +
            ')',
        }"
      ></div>
      <div class="content">
        <h1>{{ ProgrammeData.title[0].value }}</h1>
        <p>{{ ProgrammeData.subtitle }}</p>
        <p id="pitch">{{ pitch }}</p>
        <button id="myBtn" v-on:click="play">Play</button>
      </div>
    </div>
  </div>
</template>
<script>
import OcsService from "@/services/OcsService";
import ShakaService from "@/services/ShakaService";
export default {
  name: "Detail",
  props: ["ProgrammeData"],
  data() {
    return {
      detailData: [],
      pitch: "",
      VideoDisplay: false,
    };
  },
  methods: {
    // méthode pour démarrer la video de la programme
    play() {
      this.VideoDisplay = true;
      ShakaService.DisplayVideo(
        "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd"
      );
    },
    // méthode pour afficher le pitch dans la description de la programme
    async getProgrammeDetail() {
      if (!this.ProgrammeData) {
        this.detailData = [];
        return false;
      }
      const response = await OcsService.getProgrammeDetail({
        url: this.ProgrammeData.detaillink,
      });
      let responses = response.data;
      this.detailData = responses.contents;
      if (this.detailData.pitch) {
        this.pitch = this.detailData.pitch;
      } else {
        this.pitch = this.detailData.seasons[0].pitch;
      }
    },
  },
  mounted() {
    // implémentation de la méthode
    this.getProgrammeDetail();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
  font-size: 17px;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100%;
  opacity: 0.9;
}
.center {
  margin: 0;
  position: absolute;
  width: 250px;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: "Roboto", sans-serif;
}
.content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}
#myVideo {
  display: none;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
#pitch {
  font-size: 1.275vw;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #f1f1f1;
}
#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}
</style>
