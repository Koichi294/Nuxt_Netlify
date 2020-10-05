<template>
  <div class="container">
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="入力" v-model="content"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-btn @click="$store.commit('todo/add', content)" color="primary"
          >追加</v-btn
        >
      </v-col>
    </v-row>

    <v-simple-table height="300px">
      <thead>
        <tr>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.content">
          <td>{{ item.content }}</td>
          <td style="width: 40px">
            <v-btn
              fab
              small
              @click="$store.commit('todo/delete', item.content)"
              color="error"
              ><v-icon dark> mdi-minus </v-icon></v-btn
            >
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      content: "",
    };
  },
  computed: {
    list() {
      return this.$store.getters["todo/list"];
    },
  },
};
</script>
