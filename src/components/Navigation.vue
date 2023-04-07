<script setup>
import { ref } from "vue";
import { useUser } from "@/store/UserStore";
import { storeToRefs } from "pinia";
import router from "@/router";
import { onAuthStateChanged, getAuth } from "firebase/auth";


const drawer = ref(false);
const selectedMenu = ref("/");
const toggleDrawer = () => {
    drawer.value = !drawer.value;
};

const user = useUser();
const { userAuth } = storeToRefs(user);

const loggedNavigation = [
    {
        path: "/",
        text: "home.home",
    },
    {
        path: "/about",
        text: "home.about",
    },
    {
        path: "/dashboard",
        text: "home.dashboard",
    },
];

const unloggedNavigation = [
    {
        path: "/",
        text: "home.home",
    },
    {
        path: "/about",
        text: "home.about",
    },
    {
        path: "login",
        text: "home.login",
    },
    {
        path: "/register",
        text: "home.register",
    },
    {
        path: "/reset-password",
        text: "home.resetPassword",
    },
];

const auth = getAuth();
const navigation = ref([]);
onAuthStateChanged(auth, () => {
    if (userAuth.value) {
        navigation.value = loggedNavigation;
    } else {
        navigation.value = unloggedNavigation;
    }
});

const logout = () => {
    user.logout();
    router.push("/");
};


</script>
<template>
    <div>
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
            <v-toolbar-title>{{ $t("home.name") }}</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer">
            <v-list nav flat>
                <v-list-item-group v-model="selectedMenu" color="primary">
                    <v-list-item v-for="item in navigation" :key="item.path" :value="item.value"
                        @click="router.push(item.path)">{{ $t(item.text) }}</v-list-item>

                    <v-list-item v-if="userAuth" key="logout" value="/" @click="logout()">
                        <v-list-item-title>{{ $t("home.logout") }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
  
  