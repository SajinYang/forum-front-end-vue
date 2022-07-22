<template>
  <Spinner v-if="isLoading" />
  <div v-else>
    <div class="container py-5">
      <!-- 餐廳資訊頁 RestaurantDetail -->
      <RestaurantDetail
        :initialRestaurant="restaurant"
        :initialrestaurantComment="restaurantComment"
      />
      <hr />
      <!-- 餐廳評論 RestaurantComments -->
      <RestautantComments
        :restaurant-comments="restaurantComment"
        @after-delete-comment="afterDeleteComment"
      />

      <!-- 新增評論 CreateComment -->
      <CreateComment
        :restaurant-id="restaurant.id"
        @after-create-comment="afterCreateComment"
      />
    </div>
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail.vue";
import RestautantComments from "./../components/RestautantComments.vue";
import CreateComment from "./../components/CreateComment.vue";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";
import Spinner from "./../components/Spinner.vue";

export default {
  components: {
    RestaurantDetail,
    RestautantComments,
    CreateComment,
    Spinner,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComment: [],
      // currentUser: dummyUser.currentUser,
      isLoading: true,
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });
        const { restaurant, isFavorited, isLiked } = data;
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          Comments,
        } = restaurant;

        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        };

        this.restaurantComment = Comments;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
    afterDeleteComment(commentId) {
      this.restaurantComment = this.restaurantComment.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      console.log("payload", payload);
      const { commentId, restaurantId, text } = payload;
      this.restaurantComment.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to) {
    const { id: restaurantId } = to.params;
    this.fetchRestaurant(restaurantId);
  },
};
</script>