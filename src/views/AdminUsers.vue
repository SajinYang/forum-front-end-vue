<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />
    <table v-else class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
              @click="toggleAdmin({ userId: user.id, isAdmin: user.isAdmin })"
            >
              {{ user.isAdmin ? "set as user" : "set as admin" }}
            </button>

            <!-- <button
              v-if="user.isAdmin"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="
                toggleAdmin({ userId: user.id, isAdmin: user.iaAdmin })
              "
            > 
              set as user
            </button>
            <button
              v-else
              type="button"
              class="btn btn-link"
              @click.stop.prevent="
                toggleAdmin({ userId: user.id, isAdmin: user.iaAdmin })
              "
            >
              set as admin
            </button> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";
import Spinner from "../components/Spinner.vue";

export default {
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const { data } = await adminAPI.users.get();

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.users = data.users;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資訊，請稍後再試",
        });
      }
    },
    async toggleAdmin({ userId, isAdmin }) {
      try {
        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: (!isAdmin).toString(),
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !isAdmin,
            };
          }

          return user;
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法切換權限，請稍後再試",
        });
      }
    },
  },
};
</script>