import { bati } from "../utils/Axios";

const DiscoverService = {

  async getNewReleased() {
    const data = await bati
      .get(`/browse/new-releases`)
      .then((res) => res.data)
      .catch(console.error);
    return data ? data : [];
  },

  async getFeaturedPlaylists() {
    const data = await bati
      .get(`/browse/featured-playlists`)
      .then((res) => res.data)
      .catch(console.error);
    return data ? data : [];
  },

  async getCategories() {
    const data = await bati
      .get(`/browse/categories`)
      .then((res) => res.data)
      .catch(console.error);
    return data ? data : [];
  },

};
export default DiscoverService;