<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  "restaurant": {
    "id": 1,
    "name": "Ahmad O'Connell",
    "tel": "395.517.2615",
    "address": "3319 Daniella Garden",
    "opening_hours": "08:00",
    "description": "reiciendis id ab",
    "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.47766225887015",
    "viewCounts": 1,
    "createdAt": "2022-06-29T07:40:38.000Z",
    "updatedAt": "2022-07-02T12:44:21.000Z",
    "CategoryId": 2,
    "Category": {
      "id": 2,
      "name": "日本料理",
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z"
    },
    "Comments": [
      {
        "id": 1,
        "text": "Laboriosam nobis quidem id quo exercitationem sed consequuntur.",
        "UserId": 1,
        "RestaurantId": 1,
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z",
        "User": {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$FUHVlJfxR2Hj8y83Cp9XkOrsQuoJpTR4z0/JjdEQPujFSqnOqWWcC",
          "isAdmin": true,
          "image": null,
          "createdAt": "2022-06-29T07:40:37.000Z",
          "updatedAt": "2022-06-29T07:40:37.000Z"
        }
      },
      {
        "id": 51,
        "text": "Ipsum dolorum voluptatem occaecati et incidunt corrupti sint temporibus optio.",
        "UserId": 3,
        "RestaurantId": 1,
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z",
        "User": {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$PlmCCx9EjptDmZ7fiCU6vOGRX0BzEnYyWd7jluVQDjxRDj.sKqZBy",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-06-29T07:40:38.000Z",
          "updatedAt": "2022-06-29T07:40:38.000Z"
        }
      },
      {
        "id": 101,
        "text": "Tenetur sed dolor similique velit.",
        "UserId": 3,
        "RestaurantId": 1,
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z",
        "User": {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$PlmCCx9EjptDmZ7fiCU6vOGRX0BzEnYyWd7jluVQDjxRDj.sKqZBy",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-06-29T07:40:38.000Z",
          "updatedAt": "2022-06-29T07:40:38.000Z"
        }
      }
    ]
  }
}

export default {
  data () {
    return {
      restaurant: {}
    }    
  },
  created() {
    this.fetchRestaurantDashboard()
  },
  methods: {
    fetchRestaurantDashboard () {
      this.restaurant = dummyData.restaurant
    }
  }
}
</script>