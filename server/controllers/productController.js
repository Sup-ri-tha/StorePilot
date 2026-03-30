import Product from "../models/Product.js";

export const getHealthStatus = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running successfully",
  });
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};