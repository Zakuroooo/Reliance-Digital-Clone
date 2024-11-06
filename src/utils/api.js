// api.js

const projectId = "bng7dtu7whwk";

export const fetchProductsByCategory = async (category) => {
  const response = await fetch(
    `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"sellerTag":"${category}"}`,
    {
      headers: {
        projectId: projectId,
      },
    }
  );

  const data = await response.json();
  return data.data;
};

export const fetchProductById = async (productId) => {
  const response = await fetch(
    `https://academics.newtonschool.co/api/v1/ecommerce/product/${productId}`,
    {
      headers: {
        projectId: projectId,
      },
    }
  );

  const data = await response.json();
  return data.data;
};
