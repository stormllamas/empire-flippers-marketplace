import { SET_OPEN_LINK_ITEM } from "./type";
import type { RootState, AppDispatch } from "../store";

export const setOpenLinkItem =
  (openLinkTitle: string) => (dispatch: AppDispatch, getState: RootState) => {
    dispatch({
      type: SET_OPEN_LINK_ITEM,
      payload: openLinkTitle,
    });
  };
