import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Product from "../ProductPage";

describe("Product Component", () => {
  test("renders Product component correctly", () => {
    render(<Product />);

    expect(screen.getByText("Add Product")).toBeInTheDocument();
    expect(screen.getByLabelText(/Product Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Product Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/HSN Code/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("updates input values on change", () => {
    render(<Product />);

    const productNameInput = screen.getByLabelText(/Product Name/i) as HTMLInputElement;
    fireEvent.change(productNameInput, { target: { value: "Test Product" } });
    expect(productNameInput.value).toBe("Test Product");

    const productDescInput = screen.getByLabelText(/Product Description/i) as HTMLInputElement;
    fireEvent.change(productDescInput, { target: { value: "Test Description" } });
    expect(productDescInput.value).toBe("Test Description");

    const hsnCodeInput = screen.getByLabelText(/HSN Code/i) as HTMLInputElement;
    fireEvent.change(hsnCodeInput, { target: { value: "123456" } });
    expect(hsnCodeInput.value).toBe("123456");

    const priceInput = screen.getByLabelText(/Price/i) as HTMLInputElement;
    fireEvent.change(priceInput, { target: { value: "99.99" } });
    expect(priceInput.value).toBe("99.99");
  });

  test("submits the form when submit button is clicked", () => {
    render(<Product />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
    // Add assertion for form submission logic if needed
  });
});