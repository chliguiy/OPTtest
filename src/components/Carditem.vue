<template>
  <v-app id="inspire">
    <v-container fluid>
      <v-row dense v-if="count > 1">
        <v-col
          v-for="(item, index) in ProgrammeData"
          :key="`item-${index}`"
          :cols="3"
        >
          <v-card dark shaped :elevation="24">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">{{
                  item.title[0].value
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="'https://statics.ocs.fr' + item.imageurl"
            >
            </v-img>
            <v-card-subtitle class="pb-0">{{ item.subtitle }}</v-card-subtitle>
            <v-card-actions>
              <v-btn
                color="orange"
                text
                :to="{ name: 'detail', params: { ProgrammeData: item } }"
              >
                <v-icon>mdi-file-video</v-icon>
                Détail
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-card class="mx-auto" max-width="344" shaped v-else>
        <v-row dense>
          <v-col :cols="12">
            <v-card dark shaped :elevation="24">
              <v-img
                class="white--text align-end"
                height="auto"
                src="./../assets/movie_not_found.png"
              >
              </v-img>
            </v-card>
          </v-col> </v-row
      ></v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Card",
  props: {
    ProgrammeData: Array,
    count: Number,
  },
};
</script>
