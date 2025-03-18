import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import LoginPage from "../LoginPage";
import { keycloak } from "../../providers/keycloak";

vi.mock("../../providers/keycloak", () => ({
  keycloak: {
    login: vi.fn(),
  },
}));

describe("LoginPage", () => {
  test("renders LoginPage correctly", () => {
    render(<LoginPage />);
    
    expect(screen.getByText("Invoice Management System")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Generate invoices, track payments, and manage your finances with ease — all in one intuitive platform."
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login here/i })).toBeInTheDocument();
  });

  test("calls keycloak.login on button click", () => {
    render(<LoginPage />);
    const loginButton = screen.getByRole("button", { name: /login here/i });
    fireEvent.click(loginButton);
    expect(keycloak.login).toHaveBeenCalledWith({
      redirectUri: "http://localhost:5173/dashboard",
    });
  });
});