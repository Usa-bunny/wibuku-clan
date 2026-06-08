export interface AnimeResponse {
  data: Anime;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer | null;

  approved: boolean;

  titles: Title[];
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];

  type: string | null;
  source: string | null;

  episodes: number | null;
  status: string | null;
  airing: boolean;

  aired: Aired;

  duration: string | null;
  rating: string | null;

  score: number | null;
  scored_by: number | null;

  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;

  synopsis: string | null;
  background: string | null;

  season: string | null;
  year: number | null;

  broadcast: Broadcast | null;

  producers: MalEntity[];
  licensors: MalEntity[];
  studios: MalEntity[];

  genres: MalEntity[];
  explicit_genres: MalEntity[];
  themes: MalEntity[];
  demographics: MalEntity[];
}

export interface Title {
  type: string
  title: string
}

export interface Images {
  jpg: ImageFormat;
  webp: ImageFormat;
}

export interface ImageFormat {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Trailer {
  youtube_id: string | null;
  url: string | null;
  embed_url: string | null;
  images: TrailerImages;
}

export interface TrailerImages {
  image_url: string | null;
  small_image_url: string | null;
  medium_image_url: string | null;
  large_image_url: string | null;
  maximum_image_url: string | null;
}

export interface Aired {
  from: string | null;
  to: string | null;
  prop: AiredProp;
  string: string | null;
}

export interface AiredProp {
  from: DateParts;
  to: DateParts;
}

export interface DateParts {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface Broadcast {
  day: string | null;
  time: string | null;
  timezone: string | null;
  string: string | null;
}

export interface MalEntity {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}