import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import SearchForm from ".";

describe("PageWrapper component", () => {
    beforeEach(() => {
        render(
			<SearchForm />
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("Displays a form", () => {
		const form = screen.getByRole('figure')
		expect(form).toBeInTheDocument()
    });

	it("Displays an input with submit button", () => {
		const input = screen.getByRole('textbox')
		const button = screen.getByRole('button')

		expect(input).toBeInTheDocument()
		expect(button).toBeInTheDocument()
		expect(button.value).toEqual('Search')

    });
});
