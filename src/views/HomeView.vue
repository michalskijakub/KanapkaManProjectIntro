<template>
  <v-row class="justify-center ma-2">
    <v-card class="ma-4 pa-4" outlined width="50%">
      <!-- todo: on some of resolutions text between btn's is covered up -->
      <!-- todo: missing CTA - https://stablewp.com/10-brilliant-landing-page-cta-tactics-to-boost-your-conversion-rates -->
      <div class="picture mb-2" id="app">
        <p class="text-h5">{{ $t("home.name") }}</p>
      </div>
      <div class="buttons">
        <v-btn color="primary" to="/login" block>{{ $t("main.login") }}</v-btn>
        <br />
        <v-btn color="primary" to="/register" block>{{ $t("main.register") }}</v-btn>
      </div>
    </v-card>
  </v-row>
</template>
