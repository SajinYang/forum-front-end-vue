import { apiHelper } from '../utils/helpers'
// const getToken = () => localStorage.getItem('token')

export default {
  getRestaurant ({ restaurantId  }) {
    return apiHelper.get(`/restaurants/${restaurantId }`)
  },
  getRestaurants ({page, categoryId}) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeeds () {
    return apiHelper.get('/restaurants/feeds')
  },
  getRestaurantsTop () {    
    return apiHelper.get('/restaurants/top')
  }
}

// 建立 API 設定檔步驟:
// https://assets-lighthouse.alphacamp.co/uploads/image/file/8332/ExportedContentImage_01.png