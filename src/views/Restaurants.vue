<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination 
      :category-id = "categoryId"
      :current-page = "currentPage"
      :total-page = "totalPage"
      :previous-page = "previousPage"
      :next-page = "nextPage"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantsPagination from './../components/RestaurantsPagination.vue'

const dummyData = {
  restaurants: [
    {
      "id": 1,
      "name": "Ahmad O'Connell",
      "tel": "395.517.2615",
      "address": "3319 Daniella Garden",
      "opening_hours": "08:00",
      "description": "reiciendis id ab",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.47766225887015",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 2,
      "name": "Buddy Dicki II",
      "tel": "(261) 762-5475 x842",
      "address": "999 Myriam Islands",
      "opening_hours": "08:00",
      "description": "ipsum",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.832681269416874",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 3,
      "name": "Marisol Wilderman",
      "tel": "075-092-2903",
      "address": "009 Eulalia Passage",
      "opening_hours": "08:00",
      "description": "Sunt praesentium beatae aut facilis quo.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.420798666279914",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 4,
      "name": "Gabriella Kreiger",
      "tel": "(881) 516-5842 x11612",
      "address": "9709 Gilda Plaza",
      "opening_hours": "08:00",
      "description": "Est nam asperiores illum qui soluta magnam ipsum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.37686416017391",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 5,
      "name": "Ewell Zboncak",
      "tel": "1-860-310-8323",
      "address": "511 Kay Road",
      "opening_hours": "08:00",
      "description": "Perferendis tempore consequatur voluptatem non mol",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.32519796012957",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 6,
      "name": "Casimir Jast",
      "tel": "(414) 811-9970",
      "address": "437 Padberg Fort",
      "opening_hours": "08:00",
      "description": "Ut dolores sed quaerat sint consequuntur voluptate",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.82898999400291",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 7,
      "name": "Elroy Bailey",
      "tel": "1-394-202-3453 x986",
      "address": "682 Goldner Curve",
      "opening_hours": "08:00",
      "description": "Porro iste quod esse. Omnis explicabo aut odio nos",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.813849154170875",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 8,
      "name": "Laurianne Daniel V",
      "tel": "041.995.6122",
      "address": "6705 Jolie Canyon",
      "opening_hours": "08:00",
      "description": "Voluptas sit blanditiis vero enim hic.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.811542306345096",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 9,
      "name": "Ian Larson",
      "tel": "479-683-5644 x4539",
      "address": "23263 Torp Fork",
      "opening_hours": "08:00",
      "description": "Pariatur et enim esse accusamus aperiam rem cum er",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.44494527843182",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 10,
      "name": "Charlene Zemlak",
      "tel": "276-330-2376",
      "address": "213 Homenick Track",
      "opening_hours": "08:00",
      "description": "Consequatur quia et accusamus veritatis. Consequat",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.58992651013915",
      "viewCounts": 0,
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-06-29T07:40:38.000Z",
        "updatedAt": "2022-06-29T07:40:38.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    }
  ],
  categories: [
    {
      "id": 1,
      "name": "中式料理",
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z"
    },
    {
      "id": 2,
      "name": "日本料理",
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z"
    },
    {
      "id": 3,
      "name": "義大利料理",
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z"
    },
    {
      "id": 4,
      "name": "墨西哥料理",
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z"
    },
    {
      "id": 5,
      "name": "素食料理",
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z"
    },
    {
      "id": 6,
      "name": "美式料理",
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z"
    },
    {
      "id": 7,
      "name": "複合式料理",
      "createdAt": "2022-06-29T07:40:38.000Z",
      "updatedAt": "2022-06-29T07:40:38.000Z"
    }
  ],
  categoryId: "",
  page: 1,
  totalPage: [
    1,
    2,
    3,
    4,
    5
  ],
  prev: 1,
  next: 2
}

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data() {
     return {
       restaurants: [],
       categories: [],
       categoryId: -1,
       currentPage: 1,
       totalPage: [],
       previousPage: -1,
       nextPage: -1
    }
  },
  created () {
    this.fetchRestaurants()
    },
  methods: {
    fetchRestaurants () {
      const { restaurants, categories, categoryId, page, totalPage, prev, next } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }
}
</script>