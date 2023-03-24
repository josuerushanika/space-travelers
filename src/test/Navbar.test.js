import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();

    const logoElement = screen.getByAltText('page-logo');
    expect(logoElement).toBeInTheDocument();

    const rocketsLink = screen.getByText('Rockets');
    expect(rocketsLink).toBeInTheDocument();
    expect(rocketsLink).toHaveAttribute('href', '/');

    const missionsLink = screen.getByText('Missions');
    expect(missionsLink).toBeInTheDocument();
    expect(missionsLink).toHaveAttribute('href', '/Missions');

    const profileLink = screen.getByText('Profile');
    expect(profileLink).toBeInTheDocument();
    expect(profileLink).toHaveAttribute('href', '/Profile');
  });
});
