export type TTopAnime = {
  data: [
    {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
        webp: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
      };
      trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
      };
      approved: true;
      titles: [
        {
          type: string;
          title: string;
        }
      ];
      title: string;
      title_english: string;
      title_japanese: string;
      title_synonyms: [string];
      type: string;
      source: string;
      episodes: number;
      status: string;
      airing: true;
      aired: {
        from: string;
        to: string;
        prop: {
          from: {
            day: number;
            month: number;
            year: number;
          };
          to: {
            day: number;
            month: number;
            year: number;
          };
          string: string;
        };
      };
      duration: string;
      rating: string;
      score: number;
      scored_by: number;
      rank: number;
      popularity: number;
      members: number;
      favorites: number;
      synopsis: string;
      background: string;
      season: string;
      year: number;
      broadcast: {
        day: string;
        time: string;
        timezone: string;
        string: string;
      };
      producers: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      licensors: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      studios: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      genres: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      explicit_genres: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      themes: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      demographics: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
    }
  ];
  pagination: {
    last_visible_page: number;
    has_next_page: true;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
};

export type TUpcomingAnime = {
  data: [
    {
      mal_id: 0;
      url: "string";
      images: {
        jpg: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
        webp: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
      };
      trailer: {
        youtube_id: "string";
        url: "string";
        embed_url: "string";
      };
      approved: true;
      titles: [
        {
          type: "string";
          title: "string";
        }
      ];
      title: "string";
      title_english: "string";
      title_japanese: "string";
      title_synonyms: ["string"];
      type: "TV";
      source: "string";
      episodes: 0;
      status: "Finished Airing";
      airing: true;
      aired: {
        from: "string";
        to: "string";
        prop: {
          from: {
            day: 0;
            month: 0;
            year: 0;
          };
          to: {
            day: 0;
            month: 0;
            year: 0;
          };
          string: "string";
        };
      };
      duration: "string";
      rating: "G - All Ages";
      score: 0;
      scored_by: 0;
      rank: 0;
      popularity: 0;
      members: 0;
      favorites: 0;
      synopsis: "string";
      background: "string";
      season: "summer";
      year: 0;
      broadcast: {
        day: "string";
        time: "string";
        timezone: "string";
        string: "string";
      };
      producers: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      licensors: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      studios: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      genres: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      explicit_genres: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      themes: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      demographics: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
    }
  ];
  pagination: {
    last_visible_page: 0;
    has_next_page: true;
    items: {
      count: 0;
      total: 0;
      per_page: 0;
    };
  };
};

export type TNowAnime = {
  data: [
    {
      mal_id: 0;
      url: "string";
      images: {
        jpg: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
        webp: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
      };
      trailer: {
        youtube_id: "string";
        url: "string";
        embed_url: "string";
      };
      approved: true;
      titles: [
        {
          type: "string";
          title: "string";
        }
      ];
      title: "string";
      title_english: "string";
      title_japanese: "string";
      title_synonyms: ["string"];
      type: "TV";
      source: "string";
      episodes: 0;
      status: "Finished Airing";
      airing: true;
      aired: {
        from: "string";
        to: "string";
        prop: {
          from: {
            day: 0;
            month: 0;
            year: 0;
          };
          to: {
            day: 0;
            month: 0;
            year: 0;
          };
          string: "string";
        };
      };
      duration: "string";
      rating: "G - All Ages";
      score: 0;
      scored_by: 0;
      rank: 0;
      popularity: 0;
      members: 0;
      favorites: 0;
      synopsis: "string";
      background: "string";
      season: "summer";
      year: 0;
      broadcast: {
        day: "string";
        time: "string";
        timezone: "string";
        string: "string";
      };
      producers: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      licensors: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      studios: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      genres: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      explicit_genres: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      themes: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      demographics: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
    }
  ];
  pagination: {
    last_visible_page: 0;
    has_next_page: true;
    items: {
      count: 0;
      total: 0;
      per_page: 0;
    };
  };
};

export type TRandomAnime = {
  data: {
    mal_id: 0;
    url: "string";
    images: {
      jpg: {
        image_url: "string";
        small_image_url: "string";
        large_image_url: "string";
      };
      webp: {
        image_url: "string";
        small_image_url: "string";
        large_image_url: "string";
      };
    };
    trailer: {
      youtube_id: "string";
      url: "string";
      embed_url: "string";
    };
    approved: true;
    titles: [
      {
        type: "string";
        title: "string";
      }
    ];
    title: "string";
    title_english: "string";
    title_japanese: "string";
    title_synonyms: ["string"];
    type: "TV";
    source: "string";
    episodes: 0;
    status: "Finished Airing";
    airing: true;
    aired: {
      from: "string";
      to: "string";
      prop: {
        from: {
          day: 0;
          month: 0;
          year: 0;
        };
        to: {
          day: 0;
          month: 0;
          year: 0;
        };
        string: "string";
      };
    };
    duration: "string";
    rating: "G - All Ages";
    score: 0;
    scored_by: 0;
    rank: 0;
    popularity: 0;
    members: 0;
    favorites: 0;
    synopsis: "string";
    background: "string";
    season: "summer";
    year: 0;
    broadcast: {
      day: "string";
      time: "string";
      timezone: "string";
      string: "string";
    };
    producers: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    licensors: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    studios: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    genres: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    explicit_genres: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    themes: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    demographics: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
  };
};

export type TFullRecommendedAnime = {
  data: [
    {
      mal_id: "string";
      entry: TRecommendedAnime[];
      content: "string";
      user: {
        url: "string";
        username: "string";
      };
    }
  ];
  pagination: {
    last_visible_page: 0;
    has_next_page: true;
  };
};

export type TRecommendedAnime = {
  mal_id: 0;
  url: "string";
  images: {
    jpg: {
      image_url: "string";
      small_image_url: "string";
      large_image_url: "string";
    };
    webp: {
      image_url: "string";
      small_image_url: "string";
      large_image_url: "string";
    };
  };
  title: "string";
};

export type TFullAnime = {
  data: {
    mal_id: 0 | string;
    url: "string";
    images: {
      jpg: {
        image_url: "string";
        small_image_url: "string";
        large_image_url: "string";
      };
      webp: {
        image_url: "string";
        small_image_url: "string";
        large_image_url: "string";
      };
    };
    trailer: {
      youtube_id: "string";
      url: "string";
      embed_url: "string";
    };
    approved: true;
    titles: [
      {
        type: "string";
        title: "string";
      }
    ];
    title: "string";
    title_english: "string";
    title_japanese: "string";
    title_synonyms: ["string"];
    type: "TV";
    source: "string";
    episodes: 0;
    status: "Finished Airing";
    airing: true;
    aired: {
      from: "string";
      to: "string";
      prop: {
        from: {
          day: 0;
          month: 0;
          year: 0;
        };
        to: {
          day: 0;
          month: 0;
          year: 0;
        };
        string: "string";
      };
    };
    duration: "string";
    rating: "G - All Ages";
    score: 0;
    scored_by: 0;
    rank: 0;
    popularity: 0;
    members: 0;
    favorites: 0;
    synopsis: "string";
    background: "string";
    season: "summer";
    year: 0;
    broadcast: {
      day: "string";
      time: "string";
      timezone: "string";
      string: "string";
    };
    producers: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    licensors: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    studios: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    genres: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    explicit_genres: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    themes: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    demographics: [
      {
        mal_id: 0;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    relations: [
      {
        relation: "string";
        entry: [
          {
            mal_id: 0;
            type: "string";
            name: "string";
            url: "string";
          }
        ];
      }
    ];
    theme: {
      openings: ["string"];
      endings: ["string"];
    };
    external: [
      {
        name: "string";
        url: "string";
      }
    ];
    streaming: [
      {
        name: "string";
        url: "string";
      }
    ];
  };
};

export type TAnime = {
  data: [
    {
      mal_id: 0;
      url: "string";
      images: {
        jpg: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
        webp: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
      };
      trailer: {
        youtube_id: "string";
        url: "string";
        embed_url: "string";
      };
      approved: true;
      titles: [
        {
          type: "string";
          title: "string";
        }
      ];
      title: "string";
      title_english: "string";
      title_japanese: "string";
      title_synonyms: ["string"];
      type: "TV";
      source: "string";
      episodes: 0;
      status: "Finished Airing";
      airing: true;
      aired: {
        from: "string";
        to: "string";
        prop: {
          from: {
            day: 0;
            month: 0;
            year: 0;
          };
          to: {
            day: 0;
            month: 0;
            year: 0;
          };
          string: "string";
        };
      };
      duration: "string";
      rating: "G - All Ages";
      score: 0;
      scored_by: 0;
      rank: 0;
      popularity: 0;
      members: 0;
      favorites: 0;
      synopsis: "string";
      background: "string";
      season: "summer";
      year: 0;
      broadcast: {
        day: "string";
        time: "string";
        timezone: "string";
        string: "string";
      };
      producers: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      licensors: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      studios: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      genres: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      explicit_genres: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      themes: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      demographics: [
        {
          mal_id: 0;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
    }
  ];
  pagination: {
    last_visible_page: 0;
    has_next_page: true;
    items: {
      count: 0;
      total: 0;
      per_page: 0;
    };
  };
};
