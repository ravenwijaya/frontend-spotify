import React, { Component } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import DiscoverService from "../../../services/discover";


export default class Discover extends Component {
  constructor() {
    super();
    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };
  }
  componentDidMount() {
    this.getAPI();
  }
  getAPI() {
    try {
      Promise.allSettled([
        DiscoverService.getNewReleased(),
        DiscoverService.getFeaturedPlaylists(),
        DiscoverService.getCategories(),
      ]).then(([newReleased, featuredPlaylists, category]) => {
        this.setState({
          newReleases: newReleased.value.albums.items,
          playlists: featuredPlaylists.value.playlists.items,
          categories: category.value.categories.items,
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
