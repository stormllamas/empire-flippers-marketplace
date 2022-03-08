import { GET_LISTINGS, LOADING_LISTINGS } from "./type";
import type { RootState, AppDispatch } from "../store";
import axios from "axios";

export const getListings =
  () => async (dispatch: AppDispatch, getState: RootState) => {
    dispatch({ type: LOADING_LISTINGS });

    const res = await axios.get(
      "https://api.empireflippers.com/api/v1/listings/list?listing_status=Sold"
    );

    dispatch({
      type: GET_LISTINGS,
      payload: res.data.data,
    });
  };
