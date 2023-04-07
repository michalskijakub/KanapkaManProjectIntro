<template>
    <v-container>
        <v-row class="justify-center ma-2">
            <v-card class="ma-4 pa-4">
                <v-form ref="form" @submit.prevent="onSubmit">
                    <p class="text-h5">{{ $t("main.registerDescription") }}</p>
                    <v-text-field :label="this.$t('main.email')" v-model="email" :rules="emailRules" type="email"
                        required>
                    </v-text-field>
                    <v-text-field :label="this.$t('main.password')" v-model="password" :rules="passwordRules"
                        type="password" required>
                    </v-text-field>
                    <v-text-field :label="this.$t('main.confirmPassword')" v-model="confirmPassword"
                        :rules="passwordRules" type="password" required></v-text-field>
                    <v-checkbox v-model="checkbox">
                        <template v-slot:label>
                            <div>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <a target="_blank" href="/PageNotFound" @click.stop v-on="on">
                                            {{ $t("main.statuteDescription") }}
                                        </a>
                                    </template>
                                    {{ $t("main.openStatute") }}
                                </v-tooltip>
                            </div>
                        </template>
                    </v-checkbox>

                    <v-btn color="primary" block type="submit">{{ $t("main.register") }}</v-btn>
                </v-form>
                <br />
                <v-btn color="primary" @click.prevent="signUpWithGoogle" outlined block>{{ $t("main.loginGoogle")
                }}</v-btn>
                <br />
                <v-btn color="primary" outlined block to="/login">{{ $t("main.haveAccount") }}</v-btn>
            </v-card>
        </v-row>
    </v-container>
</template>
  
<script setup>
import { ref } from "vue";
import { emailRules, passwordRules } from "@/utils/rules";
import { useUser } from "@/store/UserStore";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const form = ref(null);
const user = useUser();

const onSubmit = async () => {
    if (form.value.validate()) {
        await user.register(email.value, password.value);
    }
};
const signUpWithGoogle = async () => {
    await user.registerWithGoogle();
};


/*function postData() {
    alert(
        "Email: " +
        this.email +
        "\nHasło: " +
        this.password +
        "\nPowtórzone hasło: " +
        this.confirmPassword
    );
}*/
</script>
  
  