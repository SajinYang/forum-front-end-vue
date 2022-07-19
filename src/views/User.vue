
<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <UserProfileCard
      :user="user"
      :initialIsFollowed="isFollowed"
      :iscurrentUser="currentUser.id === user.id"
    />

    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard :followings="followings" />

        <!-- UserFollowersCard -->
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard :comments="comments" />

        <!-- UserFavoritedRestaurantsCard -->
        <UserFavoritedRestaurantsCard
          :favoritedRestaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard.vue";
import UserCommentsCard from "./../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard.vue";
import UserFollowersCard from "./../components/UserFollowersCard.vue";
import UserFollowingsCard from "./../components/UserFollowingsCard.vue";
import usersAPI from "./../apis/users";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    UserProfileCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
    UserFollowersCard,
    UserFollowingsCard,
  },
  data() {
    return {
      user: {
        id: 0,
        name: "",
        email: "",
        image: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isFollowed: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data, statusText } = await usersAPI.get({ userId });
        console.log(statusText);
        if (statusText !== "OK") {
          throw new Error(data.message);
        }

        const {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = data.profile;
        this.user = {
          ...this.user,
          id,
          name,
          email,
          image,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
        };
        this.comments = Comments;
        this.favoritedRestaurants = FavoritedRestaurants;
        this.followers = Followers;
        this.followings = Followings;
        this.isFollowed = data.isFollowed;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>