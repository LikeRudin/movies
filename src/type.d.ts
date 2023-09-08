export type TabKind = "description" | "comics" | "series"

export interface MovieData {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: object;
    comics: {
        items?: ItemsWithName[] | undefined;
      };
      series: {
        items?: ItemsWithName[] | undefined;
      };
    stories: objects;
    events: object;
    thumbnail: {
      path: string,
      extension: string
    }
  }


export interface ItemsWithName {
    name:string
  }