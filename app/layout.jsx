import "@styles/globals.css";

import Nav from "@components/Nav";

import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI prompts",
};

const rootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default rootLayout;
