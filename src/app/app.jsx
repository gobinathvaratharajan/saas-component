import Axios from 'axios';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// css
import '../css/output.css';

// components
import { View } from 'components/lib';

// routes
import WelcomeRoutes from 'routes/Welcome';

// import settings with server_url
import Settings from 'settings.json';

const routes = [...WelcomeRoutes];

export default function App(props) {
  Axios.defaults.baseURL = Settings[process.env.NODE_ENV].server_url;

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<View display={route.view} title={route.title} />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
