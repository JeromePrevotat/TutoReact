import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Alert } from "../Components/tuto/alert";
import userEvent from "@testing-library/user-event";

describe('<Alert>', () => {
    it('should render correctly', () => {
        const {container} = render(<Alert type="danger">Error</Alert>);
        expect(container.firstChild).toMatchInlineSnapshot(`
          <div
            class="alert alert-danger"
            role="alert"
          >
            Error
          </div>
        `);
    })
    it('should close after click', async () => {
        const {container} = render(<Alert type="danger">Error</Alert>);
        await userEvent.click(screen.getByText('Close'));
        expect(container.firstChild).toMatchInlineSnapshot('null');
    });
});