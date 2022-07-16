<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="user.name">Name</label>
        <input v-model="user.name" id="name" type="text" name="name" class="form-control" placeholder="Enter Name"
          required>
      </div>

      <div class="form-group">
        <label for="user.image">Image</label>
        <img v-if="user.image" :src="user.image" class="d-block img-thumbnail mb-3" width="200" height="200">
        <input id="image" type="file" name="image" accept="image/*" class="form-control-file"
          @change="handleFileChange">
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
const dummyData = {
  user: {
      'id': 1,
      'name': 'root',
      'email': 'root@example.com',
      'password': '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
      'isAdmin': true,
      'image': 'https://i.imgur.com/58ImzMM.png',
  }
}

export default {
  data () {
    return {
      user: {
        id: -1,
        name: '',
        image: ''
      }      
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  methods: {
    fetchUser (userId) {
      console.log('userId:', userId)
      const { user } = dummyData
      this.user = {
        ...this.user,
        id: user.id,
        name: user.name,
        image: user.image,
      }
    },
    handleFileChange (e) {
      const {files} = e.target
      if (files.length === 0) {
        this.user.image = ''      
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.user.image = imageURL
      }
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      for (let [name, value] of formData.entries()) {
        console.log(name + ':' + value)
      }
    }
  }
}
</script>