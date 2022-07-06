<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div v-for="restaurant in restaurants" :key="restaurant.id" class="card mb-3"
      style="max-width: 540px;margin: auto;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image">
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button v-if="restaurant.isFavorited" @click.stop.prevent="deleteFavorite(restaurant.id)" type="button"
              class="btn btn-danger mr-2">
              移除最愛
            </button>
            <button v-else @click.stop.prevent="addFavorite(restaurant.id)" type="button" class="btn btn-primary">
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'

const dummyData = {
  restaurants: [
    {
      "id": 50,
      "name": "Lila Marks",
      "tel": "1-439-954-6623 x091",
      "address": "8280 Bailey Fields",
      "opening_hours": "08:00",
      "description": "Voluptas molestias iure. Quisquam suscipit quia eu",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.67798655031642",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 4,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 49,
      "name": "Wilfredo Wehner",
      "tel": "1-510-316-5682 x60956",
      "address": "669 Morgan Run",
      "opening_hours": "08:00",
      "description": "Dolore consequuntur explicabo sint corporis dolore",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.44292394845512",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 48,
      "name": "Karl Vandervort",
      "tel": "1-804-381-9330 x5837",
      "address": "1158 Lelia Land",
      "opening_hours": "08:00",
      "description": "Possimus accusamus porro. In aut inventore accusan",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.37560748821608",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 47,
      "name": "Donny Casper II",
      "tel": "015.365.3022 x138",
      "address": "97919 Brandt Well",
      "opening_hours": "08:00",
      "description": "Et dolores suscipit. Aut dolorem est deleniti volu",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.25364520453211",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 46,
      "name": "Pete Mueller",
      "tel": "(623) 540-8087 x0679",
      "address": "378 Quitzon Lodge",
      "opening_hours": "08:00",
      "description": "sed velit corporis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.23375228550232",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 45,
      "name": "Jensen Douglas",
      "tel": "1-999-856-6188 x185",
      "address": "7464 Ullrich Inlet",
      "opening_hours": "08:00",
      "description": "Est qui porro vel occaecati. Voluptates dolorum in",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.24900112688586",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 44,
      "name": "Kaley Klocko",
      "tel": "1-646-273-9530",
      "address": "036 Felicia Mills",
      "opening_hours": "08:00",
      "description": "repudiandae non est",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.912533944475705",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 3,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 43,
      "name": "Miss Jordan Harber",
      "tel": "1-482-342-2095 x00298",
      "address": "37863 Moriah Hollow",
      "opening_hours": "08:00",
      "description": "veritatis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=4.130110342455806",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 42,
      "name": "Shaniya Will",
      "tel": "(391) 296-1584",
      "address": "1743 Karson Roads",
      "opening_hours": "08:00",
      "description": "Optio dolore qui mollitia quia accusantium quia qu",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.9368866875331845",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 41,
      "name": "Madaline Baumbach",
      "tel": "072-543-9399 x081",
      "address": "7031 Runolfsson Corner",
      "opening_hours": "08:00",
      "description": "Rem et dolor. Labore odio deserunt atque et delect",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.82601502237181",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    }
  ]
}

export default {
  components: {
    NavTabs
  },
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchTopRestaurants()
  },
  methods: {
    fetchTopRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    addFavorite(restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id !== restaurantId) {
          return restaurant
        } else {
          return {
            ...restaurant,
            isFavorited: true,
            FavoriteCount: restaurant.FavoriteCount + 1
          }          
        }
      })
    },
    deleteFavorite(restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id !== restaurantId) {
          return restaurant
        } else {
          return {
            ...restaurant,
            isFavorited: false,
            FavoriteCount: restaurant.FavoriteCount - 1
          }
        }
      })
    }
  }
}
</script>