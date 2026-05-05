import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';

const renderRoute = (initialEntry: string) => {
  render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

describe('App routing', () => {
  it('renders the home page hero', () => {
    renderRoute('/');
    expect(screen.getByText(/Reliable Cargo Movement/i)).toBeInTheDocument();
  });

  it('renders the about page hero', () => {
    renderRoute('/about');
    // h1 specifically (not the navbar link)
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /about us/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the navbar on every page', () => {
    renderRoute('/');
    // "Get a quote" CTA appears in navbar
    const ctas = screen.getAllByText(/Get a quote/i);
    expect(ctas.length).toBeGreaterThan(0);
  });
});
