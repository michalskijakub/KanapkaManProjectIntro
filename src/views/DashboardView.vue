<template>
    <v-row class="justify-center ma-2">
        <v-col class="ma-4 pa-4">
            <v-btn color="primary" @click="showAddProductForm = true">
                {{ $t("list.addReservation") }}
            </v-btn>
            <v-simple-table height="300px">
                <template #default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                {{ $t("list.name") }}
                            </th>
                            <th class="text-left">
                                {{ $t("list.date") }}
                            </th>
                            <th class="text-left">
                                {{ $t("list.from") }}
                            </th>
                            <th class="text-left">
                                {{ $t("list.to") }}
                            </th>
                            <th class="text-left">
                                {{ $t("list.place") }}
                            </th>
                            <th class="text-left">
                                {{ $t("list.option") }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in products" :key="item.ref.id" class="text-left">
                            <td>{{ item.name }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.from }}</td>
                            <td>{{ item.to }}</td>
                            <td>{{ item.place }}</td>
                            <td>
                                <v-btn tile color="secondary" small @click.prevent="handleEdit(item)">
                                    <v-icon left>
                                        mdi-pencil
                                    </v-icon>{{ $t("list.edit") }}
                                </v-btn>
                                &nbsp;
                                <v-btn tile color="third" small @click.prevent="handleDelete(item)">
                                    <v-icon left>
                                        mdi-delete
                                    </v-icon>{{ $t("list.delete") }}
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-dialog v-model="showAddProductForm">
            <v-card>
                <v-card-title>{{ $t("list.addNewReservation") }}</v-card-title>
                <v-card-text>
                    <v-text-field :label="this.$t('list.name')" v-model="name"></v-text-field>
                    <v-text-field :label="this.$t('list.date')" v-model="date"></v-text-field>
                    <!-- todo: use date picker <v-date-picker :label="this.$t('list.date')" v-model="date"></v-date-picker> -->
                    <v-text-field :label="this.$t('list.from')" v-model="from"></v-text-field>
                    <!-- todo: use time picker <v-time-picker :label="this.$t('list.from')" v-model="from"></v-time-picker> -->
                    <v-text-field :label="this.$t('list.to')" v-model="to"></v-text-field>
                    <!-- todo: use time picker <v-time-picker :label="this.$t('list.to')" v-model="to"></v-time-picker> -->
                    <v-text-field :label="this.$t('list.place')" v-model="place"></v-text-field>
                    <br />
                    <v-btn color="primary" block @click.prevent="handleAddProduct">{{ $t("main.save") }}</v-btn>
                    <br />
                    <v-btn block @click="showAddProductForm = false">{{ $t("main.cancel") }}</v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-dialog v-model="showEditProductForm">
            <v-card>
                <v-card-title>{{ $t("list.editReservation") }}</v-card-title>
                <v-card-text>
                    <v-text-field :label="this.$t('list.name')" v-model="name"></v-text-field>
                    <v-text-field :label="this.$t('list.date')" v-model="date"></v-text-field>
                    <!-- todo: use date picker -->
                    <v-text-field :label="this.$t('list.from')" v-model="from"></v-text-field>
                    <!-- todo: use time picker -->
                    <v-text-field :label="this.$t('list.to')" v-model="to"></v-text-field>
                    <!-- todo: use time picker -->
                    <v-text-field :label="this.$t('list.place')" v-model="place"></v-text-field>
                    <br />
                    <v-btn color="primary" block @click.prevent="handleEditSave">{{ $t("main.save") }}</v-btn>
                    <br />
                    <v-btn block @click="showEditProductForm = false">{{ $t("main.cancel") }}</v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { useProduct } from "@/store/ProductStore";
import { storeToRefs } from "pinia";

const showAddProductForm = ref(false);
const showEditProductForm = ref(false);
const selectedProduct = ref(null);
const productStore = useProduct();
const { products } = storeToRefs(productStore);

const name = ref("");
const date = ref("");
const from = ref("");
const to = ref("");
const place = ref("");

const handleAddProduct = () => {
    showAddProductForm.value = false;
    productStore.addProduct({
        name: name.value,
        date: date.value,
        from: Number(from.value),
        to: Number(to.value),
        place: place.value,
    });
    name.value = "";
    date.value = "";
    from.value = "";
    to.value = "";
    place.value = "";
};

const handleCancel = () => {
    name.value = "";
    date.value = "";
    from.value = "";
    to.value = "";
    place.value = "";
    showEditProductForm.value = false;
    showAddProductForm.value = false;
    selectedProduct.value = null;
};

const handleEdit = (item) => {
    name.value = item.name;
    date.value = item.date;
    from.value = item.from;
    to.value = item.to;
    place.value = item.place;
    selectedProduct.value = item;
    showEditProductForm.value = true;
};

const handleDelete = (item) => {
    selectedProduct.value = item;
    productStore.deleteProduct(item);
    selectedProduct.value = null;
};

const handleEditSave = () => {
    productStore.updateProduct({
        ref: selectedProduct.value.ref,
        name: name.value,
        date: date.value,
        from: Number(from.value),
        to: Number(to.value),
        place: place.value,
    });
    name.value = "";
    date.value = "";
    from.value = "";
    to.value = "";
    place.value = "";
    showEditProductForm.value = false;
    selectedProduct.value = null;
};

onMounted(() => {
    productStore.getProducts();
});
</script>
  