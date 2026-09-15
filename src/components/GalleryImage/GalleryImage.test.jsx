import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import GalleryImage from ".";

describe("GalleryImage component", () => {

	afterEach(() => {
		cleanup()
	})

	it("Display an image", () => {
		const mockShow = {
			image: {
				medium: "https://example-image.com"
			}
		}

		render(<GalleryImage show={mockShow} />)

		const img = screen.getByRole('img')
		expect(img).toBeInTheDocument()
		expect(img).toHaveAttribute('src', "https://example-image.com")

	})

})