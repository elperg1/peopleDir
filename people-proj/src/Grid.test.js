import { render, screen } from '@testing-library/react';
import Grid from './Grid';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Grid from './Grid';

import {
    MemoryRouter,
    createMemoryRouter,
    RouterProvider,
    useNavigate,
    BrowserRouter
} from 'react-router-dom';

const mockUser = {
    name:"test name"
}

test('renders Grid', async () => {
    render(<Person user={mockUser} />);

    const FAKE_EVENT = {
        user: {
            name: "987"
        }
    };

    const routes = [
        {
            path: "/",
            element: <Person />,
            loader: () => FAKE_EVENT,
        },
    ];

   const browserRouter = createBrowserRouter([
        {
          path: "/",
          element: <App />,
          loader: () => FAKE_EVENT,
          children: [
            {
              path: "/",
              element: <Person />,
              loader: () => FAKE_EVENT,
            },
          ],
        },
      ]);

    render(
        <BrowserRouter>
            <Grid />
            </BrowserRouter>
    );
    // user={user}

    screen.debug()

      const headerElement = screen.getByText(/Person Details/i);

      await waitFor(() => headerElement);
      expect(headerElement).toBeInTheDocument();
    //   expect(headerElement).toHaveTextContent(
    //     FAKE_EVENT.name
    //   );
});



