<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initialRestaurant="restaurant" :initialrestaurantComment="restaurantComment" />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestautantComments :restaurant-comments="restaurantComment" @after-delete-comment="afterDeleteComment" />

    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment" />
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestautantComments from './../components/RestautantComments.vue'
import CreateComment from './../components/CreateComment.vue'


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
    "updatedAt": "2022-07-02T12:44:21.782Z",
    "CategoryId": 2,
    "Category": {
      "id": 2,
      "name": "日本料理",
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z"
    },
    "FavoritedUsers": [],
    "LikedUsers": [],
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
  },
  "isFavorited": false,
  "isLiked": false
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  components: {
    RestaurantDetail,
    RestautantComments,
    CreateComment
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComment: [],
      currentUser: dummyUser.currentUser
    }
  },
  created () {
    console.log(this.$route.params)
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id:', restaurantId)

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      },
      this.restaurantComment = dummyData.restaurant.Comments
    },
    afterDeleteComment (commentId) {
      this.restaurantComment = this.restaurantComment.filter(comment => comment.id !== commentId)
    },
    afterCreateComment (payload) {
      console.log('payload', payload)
      const { commentId, restaurantId, text } = payload
      this.restaurantComment.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  }
}
</script>