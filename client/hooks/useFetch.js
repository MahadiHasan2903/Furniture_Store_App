import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/config/constants";
const useFetch = () => {
  //State variables
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Function to fetch data from API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/get-products`);
      setData(response.data.products);
    } catch (error) {
      setError(true);
      console.log("Error while fetching:", error);
    } finally {
      setLoading(false);
    }
  };

  //Function to fetchData after initial render
  useEffect(() => {
    fetchData();
  }, []);

  // Function to refetch data (can be used to trigger data fetching manually)
  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  // Return data, loading state, error state, and refetch function
  return { data, loading, error, refetch };
};

export default useFetch;
