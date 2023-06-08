import { describe, test, expect } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/preact';
import { App } from './app';

describe("App", () => {
  test("should render", () => {
    const { container } = render(<App/>);
    expect(container.textContent).toMatch('Vite + Preact');
  });
});
