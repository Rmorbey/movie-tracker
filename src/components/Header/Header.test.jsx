import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Header from ".";

describe("Header component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("Displays a nav bar with three children", () => {
        const nav = screen.getByRole("navigation");

        expect(nav).toBeInTheDocument();
        expect(nav.childNodes.length).toBe(3);
    });

	it("Changes location when a navlink is clicked", async () => {
		expect(window.location.href).not.toContain("/shows")

        const shows = screen.getByText("Shows");

		await userEvent.click(shows)
		expect(window.location.href).toContain('/shows')
    });

});
