<template>
  <v-app>
    <header v-if="!DisplaySearch">
      <div class="overlay"></div>
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src="./../assets/video/ocs.mp4" type="video/mp4" />
      </video>
      <div class="container h-100">
        <div class="s006">
          <fieldset>
            <legend></legend>
            <div class="inner-form">
              <div class="input-field">
                <button
                  class="btn-search"
                  type="button"
                  v-on:click="getProgrammes"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    ></path>
                  </svg>
                </button>
                <input
                  id="search"
                  type="text"
                  placeholder="recherche"
                  v-on:keyup.enter="getProgrammes"
                  v-model="title"
                />
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </header>
    <div class="searchBox">
      <b-navbar type="dark" class="dark" v-if="DisplaySearch">
        <b-nav-form>
          <div class="img">
            <img alt="Vue logo" src="./../assets/logo.png" />
          </div>
          <b-form-input
            id="search"
            class="mr-sm-2"
            placeholder="Rechercher"
            v-on:keyup="getProgrammes"
            v-model="title"
          ></b-form-input>

          <v-btn @click="getProgrammes" rounded dark>
            <v-icon>mdi-magnify</v-icon>
            Rechercher
          </v-btn>
        </b-nav-form>
      </b-navbar>
      <br />
      <Carditem
        :ProgrammeData="ProgrammeData"
        :count="count"
        v-if="DisplaySearch"
      />
    </div>
  </v-app>
</template>

<script>
import Carditem from "./Carditem.vue";
import OcsService from "@/services/OcsService";
export default {
  name: "Home",
  data() {
    return {
      title: "",
      ProgrammeData: [],
      count: 0,
      DisplaySearch: false,
    };
  },
  components: {
    Carditem,
  },
  methods: {
    //méthode pour afficher les programmes dans la balise card
    async getProgrammes() {
      if (this.title.trim() === "" || this.title.length <= 1) {
        this.ProgrammeData = [];
        this.count = 0;
        this.DisplaySearch = false;
        return false;
      }
      this.DisplaySearch = true;
      const response = await OcsService.getProgrammes({
        title: this.title,
      });
      let responses = response.data.contents;
      this.count = response.data.count;
      if (this.count === 0) {
        this.ProgrammeData = [];
        return false;
      }
      this.ProgrammeData = responses;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dark {
  background-color: black;
}
header {
  position: absolute;
  background-color: black;
  height: 100vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}
.img {
  width: 100px;
}
.img img {
  width: 100%;
}
</style>
