export interface State {
  site: SiteState;
  listings: ListingsState;
}

export interface SiteState {
  siteLoading: boolean;
  openLinkItem: string;
}

export interface ListingsState {
  listingsLoading: boolean;
  listings: [];
  count: number;
  limit: number;
  page: number;
  pages: number;
  sortValue: string;
}
