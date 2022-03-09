import { GET_LISTINGS, LOADING_LISTINGS, SET_SORT_VALUE } from "./types";
import type { RootState, AppDispatch } from "../store";
import axios from "axios";

interface IListingsParams {
  page?: number;
  sortValue?: string;
  sortOrder?: string;
}

const parseSortOrder = (order: any) => {
  if ("(Low to High)") {
    return "asc";
  } else {
    return "desc";
  }
};

export const getListings =
  ({ page, sortValue, sortOrder }: IListingsParams) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    dispatch({ type: LOADING_LISTINGS });

    const res = await axios.get(
      `https://api.empireflippers.com/api/v1/listings/list?page=${
        page ? page : 1
      }${
        sortValue ? `&sort=${sortValue}&order=${parseSortOrder(sortOrder)}` : ""
      }`
    );

    dispatch({
      type: GET_LISTINGS,
      payload: res.data.data,
    });
  };

export const changeSortValue =
  (newSortValue: string) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    dispatch({
      type: SET_SORT_VALUE,
      payload: newSortValue,
    });
  };
