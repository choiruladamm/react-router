/* eslint-disable react-refresh/only-export-components */

import { Outlet, useLoaderData, Form, redirect } from "react-router-dom";
import { getContacts, createContact } from "../utils/contacts";
import ContactItem from "../components/ContactItem";

// create contact logic
export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

// root loader logic
export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

// root componnent
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
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>

        {/* nav link */}
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact} />
              ))}
            </ul>
          ) : (
            <p>
              <i>no contacts</i>
            </p>
          )}
        </nav>
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
