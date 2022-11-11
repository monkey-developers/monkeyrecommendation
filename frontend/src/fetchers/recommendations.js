const URL = "https://recommendation-backend.fly.dev";

export const fetchRecommendations = async () => {
  const res = await fetch(`${URL}/recommendations-list`);
  return await res.json();
};

export const postRecommendations = async (data) => {
  const res = await fetch(`${URL}/recommendation`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const postImageRecommendations = async (data) => {
  const res = await fetch(`${URL}/recommendation-image`, {
    method: "POST",
    body: data,
  });
};
