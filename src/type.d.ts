export type TabKind = "description" | "comics" | "series" | "urls" | "events"
export type DetailTabKind = "comics" | "series" | "events"


export interface MovieData {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: UrlElement[];
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

export interface UrlElement {
    type: string;
    url: string;
}

export interface ContentBoxElements {
    events: DetailElement[];
    comics: DetailElement[];
    series: DetailElement[];
}

