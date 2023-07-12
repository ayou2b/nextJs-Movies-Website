"use client";
import { actions } from "../Store";

export const fetchActorInformation = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in actor information 1");
      }
      dispatch(actions.setDataIsLoaded());
      const data = await response.json();
      return data;
    };

    try {
      const actorInformation = await fetchData();
      dispatch(actions.getActorInformation(actorInformation));
    } catch (error) {
      console.log("error in actor information 2");
    }
  };
};
