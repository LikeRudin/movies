export interface MovieData {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: object;
    comics: string[];
    stories: string[];
    events: [];
    series: [];
    thumbnail: {
      path: string,
      extension: string
    }
  }