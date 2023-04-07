<template>
  <v-app>
    <Navigation />

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import { RouterView } from "vue-router";
import { useUser } from "./store/UserStore";

const user = useUser();
user.getCurrentUser();
</script>
