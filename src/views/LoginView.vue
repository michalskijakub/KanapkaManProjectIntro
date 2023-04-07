<template>
    <v-container>
        <v-row class="justify-center ma-2">
            <v-card class="ma-4 pa-4">
                <v-form ref="form" @submit.prevent="onSubmit">
                    <p class="text-h5">{{ $t("main.loginDescription") }}</p>
                    <v-text-field :label="this.$t('main.email')" v-model="email" :rules="emailRules" type="email"
                        required>
                    </v-text-field>
                    <v-text-field :label="this.$t('main.password')" v-model="password" :rules="passwordRuleLogin"
                        type="password" required>
                    </v-text-field>
                    <v-btn color="primary" type="submit" block>{{ $t("main.login") }}</v-btn> <br />
                </v-form>
                <div id="buttons">
                    <v-btn color="primary" @click.prevent="loginGoogle" block>{{ $t("main.loginGoogle") }}</v-btn>
                    <br />
                    <v-btn color="primary" outlined to="/reset-password" block>{{ $t("main.forgotPassword") }}</v-btn>
                    <br />
                    <v-btn color="primary" outlined to="/register" block>{{ $t("main.register") }}</v-btn>
                </div>
            </v-card>
        </v-row>
    </v-container>
</template>
  
<script setup>
import { ref } from "vue";
import { emailRules, passwordRuleLogin } from "@/utils/rules";
import { useUser } from "@/store/UserStore";

const email = ref("");
const password = ref("");
const form = ref(null);
const user = useUser();

const onSubmit = () => {
    if (form.value.validate()) {
        user.login(email.value, password.value);
    }
};
const loginGoogle = async () => {
    await user.loginWithGoogle();
};


/*function postData() {
    alert("Email: " + email.value + "\Hasło: " + password.value);
}*/
</script>

  