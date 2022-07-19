<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="user.name">Name</label>
        <input
          v-model="name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="user.image">Image</label>
        <img
          v-if="image"
          :src="image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        {{ isProcessing ? "更新中.." : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      id: -1,
      name: "",
      image: "",
      email: "",
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser() {
      this.setUser();
    },
  },
  created() {
    const { id } = this.$route.params;
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: "not-found" });
      return;
    }
    this.setUser();
  },
  beforeRouteUpdate(to) {
    const { id } = to.params;
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: "not-found" });
      return;
    }
    this.setUser();
  },
  methods: {
    setUser() {
      this.id = this.currentUser.id;
      this.name = this.currentUser.name;
      this.email = this.currentUser.email;
      this.image = this.currentUser.image;
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.image = imageURL;
      }
    },
    async handleSubmit(e) {
      if (!this.name) {
        Toast.fire({
          icon: "warning",
          title: "請填寫姓名欄位",
        });
        return;
      }

      const form = e.target;
      const formData = new FormData(form);
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }

      try {
        this.isProcessing = true;

        const { data } = await usersAPI.update({
          userId: this.id,
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$router.push({ name: "user", params: { id: this.id } });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資訊，請稍後再試",
        });
      }
    },
  },
};
</script>