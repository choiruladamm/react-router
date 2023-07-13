/* eslint-disable react-refresh/only-export-components */

import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getContacts } from "../utils/contacts";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

const Root = () => {
  const { contacts } = useLoaderData();

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>

        {/* search input */}
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>

        {/* nav link */}
        {contacts.length ? (
          <nav>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <p>
            <i>no contacts</i>
          </p>
        )}
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
