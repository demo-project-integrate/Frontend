import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import LoginPage from "../LoginPage";

describe("LoginPage", () => {
  test("renders login page content correctly", () => {
    render(<LoginPage />);
    
    // Test static content
    expect(screen.getByText("Invoice Management System")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Generate invoices, track payments, and manage your finances with ease — all in one intuitive platform."
      )
    ).toBeInTheDocument();
    
    // Test for presence of login button
    expect(screen.getByRole("button", { name: /login here/i })).toBeInTheDocument();
    
    // Test for any other static elements you have
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByAltText("Logo")).toBeInTheDocument(); // If you have images
  });
});