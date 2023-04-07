<template>
    <v-container>
        <v-row class="justify-center ma-2">
            <v-card class="ma-4 pa-4">
                <v-form ref="form" @submit.prevent="onSubmit">
                    <p class="text-h5">{{ $t("main.resetPasswordDescription") }}</p>
                    <v-text-field :label="this.$t('main.email')" v-model="email" :rules="emailRules" type="email"
                        required>
                    </v-text-field>
                    <v-btn color="primary" type="submit" block>{{ $t("main.resetPassword") }}</v-btn> <br />
                </v-form>
                <div id="buttons">
                    <v-btn color="primary" outlined to="/login" block>{{ $t("main.login") }}</v-btn>
                    <br />
                    <v-btn color="primary" outlined to="/register" block>{{ $t("main.register") }}</v-btn>
                </div>
            </v-card>
        </v-row>
    </v-container>
</template>
  
<script setup>
import { ref } from "vue";
import { emailRules } from "@/utils/rules";
import { useUser } from "@/store/UserStore";

const email = ref("");
const form = ref(null);
const user = useUser();

const onSubmit = () => {
    if (form.value.validate()) {
        user.resetPassword(email.value);
    }
};
/*function postData() {
    alert("Email: " + email.value);
}*/
</script>
  