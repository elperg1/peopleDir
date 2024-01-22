import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from './App';
import PersonDetails from './PersonDetails';

import {
    MemoryRouter,
    createMemoryRouter,
    createBrowserRouter,
    RouterProvider,
    useNavigate
} from 'react-router-dom';

test('renders PersonDetails', async () => {
    const FAKE_EVENT = {
        userDetails: {
            dob: "987"
        }
    };

    const routes = [
        {
            path: "PersonDetails",
            element: <PersonDetails />,
            loader: () => FAKE_EVENT,
        },
    ];

    // const router = createMemoryRouter(routes, {
    //     initialEntries: ["/", "PersonDetails"],
    //     initialIndex: 1,
    // });

   const browserRouter = createBrowserRouter([
        {
          path: "/",
          element: <App />,
          loader: () => FAKE_EVENT,
          children: [
            {
              path: "PersonDetails",
              element: <PersonDetails />,
              loader: () => FAKE_EVENT,
            },
          ],
        },
      ]);

    render(
        <RouterProvider router={browserRouter} />
    );

    // screen.debug()

    //   const headerElement = screen.getByText(/Person Details/i);

    //   await waitFor(() => headerElement);
    //   expect(headerElement).toBeInTheDocument();
    //   expect(headerElement).toHaveTextContent(
    //     FAKE_EVENT.name
    //   );
});

