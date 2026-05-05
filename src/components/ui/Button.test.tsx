import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from './Button';

const wrap = (ui: React.ReactElement) => <BrowserRouter>{ui}</BrowserRouter>;

describe('Button', () => {
  it('renders children', () => {
    render(wrap(<Button>Click me</Button>));
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders as a Link when "to" prop is provided', () => {
    render(wrap(<Button to="/quote">Get a quote</Button>));
    const link = screen.getByText('Get a quote').closest('a');
    expect(link).toHaveAttribute('href', '/quote');
  });

  it('applies the correct variant classes', () => {
    render(wrap(<Button variant="outline">Outline</Button>));
    const btn = screen.getByText('Outline');
    expect(btn.className).toMatch(/border-neutral-light/);
  });

  it('renders as button element when no "to" prop', () => {
    render(wrap(<Button type="submit">Submit</Button>));
    const btn = screen.getByText('Submit');
    expect(btn.tagName).toBe('BUTTON');
    expect(btn).toHaveAttribute('type', 'submit');
  });
});
