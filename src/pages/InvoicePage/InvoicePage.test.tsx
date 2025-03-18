import { render, screen } from "@testing-library/react";
import Invoice from "../InvoicePage";

describe("Invoice Component", () => {
  beforeEach(() => {
    render(<Invoice />);
  });

  test("renders invoice title", () => {
    expect(screen.getByText(/Invoice/i)).toBeInTheDocument();
  });

  test("renders logo section", () => {
    expect(screen.getByText(/Logo/i)).toBeInTheDocument();
  });

  test("renders From section", () => {
    expect(screen.getByText(/From/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Business Name")).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText("Email").length).toBeGreaterThan(0);
    expect(screen.getByPlaceholderText("Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Business Number")).toBeInTheDocument();
  });

  test("renders Bill To section", () => {
    expect(screen.getByText(/Bill To/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText("Email").length).toBeGreaterThan(0);
    expect(screen.getByPlaceholderText("Client Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Client Phone")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Mobile")).toBeInTheDocument();
  });

  test("renders invoice details section", () => {
    expect(screen.getAllByText(/Number/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms/i)).toBeInTheDocument();
  });

  test("renders items table headers", () => {
    expect(screen.getByText(/DESC/i)).toBeInTheDocument();
    expect(screen.getByText(/RATE/i)).toBeInTheDocument();
    expect(screen.getByText(/QTY/i)).toBeInTheDocument();
    expect(screen.getByText(/AMOUNT/i)).toBeInTheDocument();
  });

  test("renders Notes section", () => {
    // Instead of getByText, ensure at least one 'Notes' element is present
    expect(screen.getAllByText(/Notes/i).length).toBeGreaterThan(0);
    expect(screen.getByText("Additional notes")).toBeInTheDocument()
  });
});