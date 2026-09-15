import React from "react";
import { describe, it, expect, afterEach, vi } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ShowProvider } from "../../contexts/ShowProvider";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import SearchWidget from ".";

global.fetch = vi.fn();

function createFetchResponse(data) {
    return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("SearchWidget component", () => {
    afterEach(() => {
        cleanup();
    });

    it("Displays 1 show", async () => {
        const data = [
            {
                show: {
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
                },
            },
        ];

        fetch.mockResolvedValue(createFetchResponse(data));

        render(
            <ShowProvider>
                <SearchWidget />
            </ShowProvider>,
        );
        expect(fetch).toHaveBeenCalledWith(
            "https://api.tvmaze.com/search/shows?q=Avatar",
        );

        const title = await screen.findByText('Avatar')
        expect(title).toBeInTheDocument()
    });
});
