import { GET_LISTINGS, LOADING_LISTINGS } from "./type";
import type { RootState, AppDispatch } from "../store";

export const setOpenLinkItem =
  (openLinkTitle: string) => (dispatch: AppDispatch, getState: RootState) => {
    dispatch({ type: LOADING_LISTINGS });

    dispatch({
      type: GET_LISTINGS,
      payload: openLinkTitle,
    });
  };
