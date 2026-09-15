import React from "react";
import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import ShowCard from ".";

describe("Getter component", () => {
    const mockShow = {
        name: "Avatar",
        rating: {
            average: 7.3,
        },
        language: "English",
        premiered: "2026-10-09",
        summary: "A show.",
        image: {
            medium: "https://example-image.com",
        },
    };

    beforeEach(() => {
        render(<ShowCard show={mockShow} />);
    });

    afterEach(() => {
        cleanup();
    });

    it("Displays a show card with img, rating, name, language, premiered and summary.", async () => {
        const img = screen.getByRole("img");
        const rating = screen.getByRole("figure");
        const name = screen.getByRole("heading");
        const languageAndPremiered = screen.getByRole("figure-2");
        const summary = screen.getByRole("figure-3");

        expect(img).toBeInTheDocument();
        expect(rating).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(languageAndPremiered).toBeInTheDocument();
        expect(summary).toBeInTheDocument();

        expect(img).toHaveAttribute("src", "https://example-image.com");
        expect(rating.textContent).toEqual(" (7.3/10)");
        expect(name.textContent).toEqual("Avatar");
        expect(languageAndPremiered.textContent).toEqual("English, 2026-10-09");
        expect(summary.textContent).toEqual("A show.");
    });
});
