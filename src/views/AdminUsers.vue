<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th scope="col" width="140">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td>
            <button v-if="user.isAdmin" type="button" class="btn btn-link" @click.stop.prevent="toggleAdmin(user.id)">
              set as user
            </button>
            <button v-else type="button" class="btn btn-link" @click.stop.prevent="toggleAdmin(user.id)">
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav.vue'

const dummyData = {
  users: [
    {
      "id": 1,
      "name": "root",
      "email": "root@example.com",
      "password": "$2a$10$M0JjkO4REiJUgO9nJH8CJeW2PkYYSFYUD8.eExcHRvfTaYAyWEbya",
      "isAdmin": true,
      "image": "https://i.imgur.com/WVkkrFw.jpeg",
      "createdAt": "2022-05-26T14:29:23.000Z",
      "updatedAt": "2022-07-07T06:19:04.000Z"
    },
    {
      "id": 2,
      "name": "user1",
      "email": "user1@example.com",
      "password": "$2a$10$KSYR4XLJ2pIi5cCv00sSjeAPqbLRIPExv.GM7hH8pWBJD/UQkJdPW",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-05-26T14:29:23.000Z",
      "updatedAt": "2022-05-26T14:29:23.000Z"
    },
    {
      "id": 3,
      "name": "user2",
      "email": "user2@example.com",
      "password": "$2a$10$Cz5WOE03h2zV5aGJCiBFK.DSomlj/OfBusIIGuAo/NdFbpZm1LvIW",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-05-26T14:29:23.000Z",
      "updatedAt": "2022-05-26T14:29:23.000Z"
    },
    {
      "id": 11,
      "name": "123",
      "email": "a1093353@nuk.edu.tw",
      "password": "$2a$10$sgaFTysYu344LFLNkOifQuRYXgyVB1kHOCqNPUT6FQXrjOJ.tMb7u",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-06-04T09:36:38.000Z",
      "updatedAt": "2022-06-04T09:36:38.000Z"
    },
    {
      "id": 21,
      "name": "1",
      "email": "1@123",
      "password": "$2a$10$b8DU8U96n2XKCi.5xhUAwOuT717QdIdjE3w3RnLEv.pTZ5EzkvdoO",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-06-06T08:30:28.000Z",
      "updatedAt": "2022-06-06T08:30:28.000Z"
    },
    {
      "id": 31,
      "name": "a",
      "email": "apple@gmail.com",
      "password": "$2a$10$FmSDp6BwRmyrlg2DU4TCV.pgPE62..I4ikcQO4.itWvp7gb.mlH5q",
      "isAdmin": false,
      "image": "https://i.imgur.com/sOvLPgN.jpeg",
      "createdAt": "2022-06-07T06:52:28.000Z",
      "updatedAt": "2022-06-07T06:54:03.000Z"
    },
    {
      "id": 41,
      "name": "zj",
      "email": "winnie.zheng02@gmail.com",
      "password": "$2a$10$xov5ED0Z0uUnYw9xd1/lZeXhvbbIW0Ji21G1UAP0dccItxjhQCFCO",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-06-08T09:35:08.000Z",
      "updatedAt": "2022-06-08T09:35:08.000Z"
    },
    {
      "id": 51,
      "name": "45645646",
      "email": "hyt27473@gmail.com",
      "password": "$2a$10$vDIn3y5KmF99M2kY2Oly6eCR.K11KWo3GVFFD/zQQY9bcCxujaTgC",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-06-18T11:49:04.000Z",
      "updatedAt": "2022-06-18T11:49:04.000Z"
    },
    {
      "id": 61,
      "name": "123",
      "email": "11111@hhh.com",
      "password": "$2a$10$sT7XZsnpjxqjGi4O6OnMf.YCl/5bk0UzutrAl2R72htZHBX.9n1dC",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-06-23T15:01:37.000Z",
      "updatedAt": "2022-06-23T15:01:37.000Z"
    },
    {
      "id": 71,
      "name": null,
      "email": "email@example.com",
      "password": "$2a$10$J1o/pLautYehTbEjtYIiWOLGxLU7AAzdrYD1w7sfMWwtVJRgQKIda",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-06-28T06:09:50.000Z",
      "updatedAt": "2022-06-28T06:09:50.000Z"
    },
    {
      "id": 81,
      "name": "Donkey",
      "email": "donkey@example.com",
      "password": "$2a$10$tjmssfWwgDgfKj8pzoY5GuelvIxm7y9GkVoY.d2nqm/c7WT2MibKK",
      "isAdmin": false,
      "image": "https://i.imgur.com/L3wPbJn.jpeg",
      "createdAt": "2022-06-28T15:47:12.000Z",
      "updatedAt": "2022-07-05T13:14:31.000Z"
    },
    {
      "id": 91,
      "name": "陳小明",
      "email": "qwe752166@yahoo.com.tw",
      "password": "$2a$10$fLV4ID84LkVkoDkdWrSKPuE1I5xzaXCYKTC6r9pz1zdgt6lFH/JMK",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-06-29T05:11:56.000Z",
      "updatedAt": "2022-06-29T05:11:56.000Z"
    }
  ]
}

export default {
  components: {
    AdminNav
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      this.users = dummyData.users
    },
    toggleAdmin (userId) {
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }
        return user
      })
    }
  }
}
</script>