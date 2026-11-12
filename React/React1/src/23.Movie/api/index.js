import React from "react";
import axios from "axios";

const ApiKey = "30f11aef768c5ad4fba081ceae85bd23";
const BaseUrl = "https://api.themoviedb.org/3/";

export function popularMovies(currentPage) {
  const response = axios.get(`${BaseUrl}movie/popular`, {
    params: {
      api_key: ApiKey,
      page: currentPage,
    },
  });
  return response;
}

export function popularTv(currentPage) {
  const response = axios.get(`${BaseUrl}tv/popular`, {
    params: {
      api_key: ApiKey,
      page: currentPage,
    },
  });
  return response;
}

export function searchMovies(query, currentPage) {
  const response = axios.get(`${BaseUrl}search/movie`, {
    params: {
      api_key: ApiKey,
      page: currentPage,
      query: query,
    },
  });
  return response;
}

export function movieDetails(id) {
  const response = axios.get(`${BaseUrl}movie/${id}`, {
    params: {
      api_key: ApiKey,
    },
  });
  return response;
}

export function movieTrailer(id) {
  const response = axios.get(`${BaseUrl}movie/${id}/videos`, {
    params: {
      api_key: ApiKey,
    },
  });
  return response;
}

export function movieCast(id) {
  const response = axios.get(`${BaseUrl}movie/${id}/credits`, {
    params: {
      api_key: ApiKey,
    },
  });
  return response;
}
