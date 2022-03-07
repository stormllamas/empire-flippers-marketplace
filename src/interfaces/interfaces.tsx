export interface State {
  site: SiteState;
}

export interface SiteState {
  siteLoading: boolean;
  openLinkItem: string;
}
