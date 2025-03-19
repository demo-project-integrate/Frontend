import { render, screen } from "@testing-library/react";
import productData from "../../data/product.json";
import "@testing-library/jest-dom";
import ProductList from "../../component/productlist";

describe("ProductList Component", () => {
  test("renders Product List heading", () => {
    render(<ProductList />);
    expect(screen.getByText(/Product List/i)).toBeInTheDocument();
  });

  test("renders search input field", () => {
    render(<ProductList />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });

  test("renders table headers correctly", () => {
    render(<ProductList />);
    expect(screen.getByText(/S. No./i)).toBeInTheDocument();
    expect(screen.getByText(/Product Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Description/i)).toBeInTheDocument();
    expect(screen.getByText(/Price/i)).toBeInTheDocument();
    expect(screen.getByText(/HSN Code/i)).toBeInTheDocument();
  });

  test("renders product data correctly", () => {
    render(<ProductList />);
    
    productData.forEach((product) => {
      expect(screen.getByText(product.productName)).toBeInTheDocument();
      expect(screen.getByText(product.description.slice(0, 50) + "...")).toBeInTheDocument();
      expect(screen.getByText(`₹${product.price.toFixed(2)}`)).toBeInTheDocument();
    });
  });

  test("renders delete and edit icons for each product", () => {
    render(<ProductList />);
    
    const deleteIcons = screen.getAllByTestId("delete-icon");
    const editIcons = screen.getAllByTestId("edit-icon");

    expect(deleteIcons.length).toBe(productData.length);
    expect(editIcons.length).toBe(productData.length);
  });
});
