import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import ShowGallery from ".";
import { ShowImageProvider } from "../../contexts/ShowImageProvider";

global.fetch = vi.fn();

function createFetchResponse(data) {
    return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("ShowGallery component", () => {
    afterEach(() => {
        cleanup();
    });

    it("Display a link", async () => {
        const mockShow = [
            {
                id: 1,
                name: "Avatar",
                rating: { average: 7.3 },
                language: "English",
                premiered: "2026-10-09",
                summary: "A show.",
                image: { medium: "https://example-image.com" },
            },
        ];

        fetch.mockResolvedValue(createFetchResponse(mockShow));

        render(
            <MemoryRouter>
                <ShowImageProvider>
                    <ShowGallery />
                </ShowImageProvider>
                ,
            </MemoryRouter>,
        );

        expect(fetch).toHaveBeenCalledWith("https://api.tvmaze.com/shows");

        const link = await screen.findByRole("figure");
        expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/1")
    });
});
