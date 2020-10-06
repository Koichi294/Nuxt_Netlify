<template>
  <div class="container">
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="入力" v-model="content"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-btn @click="add(content)" color="primary"> 追加 </v-btn>
      </v-col>
    </v-row>

    <v-simple-table height="300px">
      <tbody>
        <tr v-for="item in list" :key="item.content">
          <td style="width: 40px">
            <v-checkbox
              @click="$store.commit('todo/toggle', item)"
            ></v-checkbox>
          </td>
          <td>{{ item.content }}</td>
          <td style="width: 40px">
            <v-btn
              fab
              small
              @click="$store.commit('todo/delete', item.content)"
              color="error"
            >
              <v-icon dark> mdi-minus </v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>

    <v-simple-table height="300px">
      <tbody>
        <tr v-for="item in doneList" :key="item.content">
          <td style="width: 40px">
            <v-checkbox
              :input-value="item.isDone"
              @click="$store.commit('todo/toggle', item)"
            ></v-checkbox>
          </td>
          <td>
            <font color="gray">{{ item.content }}</font>
          </td>
          <td style="width: 40px">
            <v-btn
              fab
              small
              @click="$store.commit('todo/delete', item.content)"
              color="error"
            >
              <v-icon dark> mdi-minus </v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => {
    return {
      content: "",
    };
  },
  computed: {
    list() {
      const list = this.$store.getters["todo/list"].filter(
        (todo) => todo.isDone == false
      );
      return list;
    },
    doneList() {
      const list = this.$store.getters["todo/list"].filter(
        (todo) => todo.isDone == true
      );
      return list;
    },
  },
  methods: {
    add(content) {
      this.$store.commit("todo/add", content);
      this.content = "";
    },
  },
};
</script>
