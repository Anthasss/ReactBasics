import { useState, useEffect } from "react";
import axios from "axios";

export default function useGetHomePicture() {
  const [homePicture, setHomePicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchHomePicture = async () => {
      try {
        setTimeout(() => {}, 1000);
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=VmRPttNTLwh7jbZ0yeFVUNJyfrrkCe07BMocFKUp`
        );

        if (isMounted) {
          setHomePicture(response.data);
          console.log(response.data);
        }
        console.log(response.data);
      } catch (err) {
        if (isMounted) {
          setError(err);
          console.log(error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchHomePicture();

    return () => {
      isMounted = false;
    };
  }, [error]);

  return { homePicture, loading };
}
