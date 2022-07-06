<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <router-link :to="{name: 'user'}">
          <img :src="user.image" width="140px" height="140px">
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數： {{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button v-if="user.isFollowed" @click.stop.prevent="deleteFollower(user.id)" type="button"
            class="btn btn-danger">
            取消追蹤
          </button>
          <button v-else @click.stop.prevent="addFollower(user.id)" type="button" class="btn btn-primary">
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import NavTabs from './../components/NavTabs.vue'

  const dummyData = {
    users: [
      {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$FUHVlJfxR2Hj8y83Cp9XkOrsQuoJpTR4z0/JjdEQPujFSqnOqWWcC",
        "isAdmin": true,
        "image": "https://img-15.stickers.cloud/packs/e9890687-5a0f-4795-bd8a-58d88c3831c6/webp/784f2040-a075-4ec0-b16a-f342c1a46069.webp",
        "createdAt": "2022-06-29T07:40:37.000Z",
        "updatedAt": "2022-06-29T07:40:37.000Z",
        "Followers": [],
        "FollowerCount": 0,
        "isFollowed": false
      },
      {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$w10vxA0LjbeKpZD6cMfrAOt/un0F/naPuo3sDL6Fp.ZwJEFPeLWsy",
        "isAdmin": false,
        "image": "https://img-15.stickers.cloud/packs/e9890687-5a0f-4795-bd8a-58d88c3831c6/webp/5c18bc04-9eb3-48a3-b28a-903377f93633.webp",
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z",
        "Followers": [],
        "FollowerCount": 0,
        "isFollowed": false
      },
      {
        "id": 3,
        "name": "user2",
        "email": "user2@example.com",
        "password": "$2a$10$PlmCCx9EjptDmZ7fiCU6vOGRX0BzEnYyWd7jluVQDjxRDj.sKqZBy",
        "isAdmin": false,
        "image": "https://img-15.stickers.cloud/packs/e9890687-5a0f-4795-bd8a-58d88c3831c6/webp/303f5b31-ded2-4ed1-828a-4225e147d927.webp",
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z",
        "Followers": [],
        "FollowerCount": 0,
        "isFollowed": false
      }
    ]
  }

  export default {
    components: {
      NavTabs
    },
    data () {
      return {
        users: []
      }
    },
    created () {
      this.fetchUsers ()
    },
    methods: {
      fetchUsers () {
        this.users = dummyData.users
      },
      addFollower (userId) {
        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              isFollowed: true,
              FollowerCount: user.FollowerCount + 1
            }
          }
        })
        
      },
      deleteFollower(userId) {
        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              isFollowed: false,
              FollowerCount: user.FollowerCount - 1
            }
          }
        })
      }
    }
  }
</script>
