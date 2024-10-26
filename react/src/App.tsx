import { Route, Switch, Link } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import { Index } from './pages/Index';
import { Todos } from './pages/Todos';
import { NotFound } from './pages/NotFound';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="navbar flex justify-around w-full">
        <Link className="btn btn-ghost" href="/">
          Home
        </Link>
        <Link className="btn btn-ghost" href="/todos">
          Todos
        </Link>
      </div>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/todos" component={Todos} />
        <Route component={NotFound} />
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
