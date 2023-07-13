/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "../utils/contacts";

export async function loader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}

const Contact = () => {
  const { contact } = useLoaderData()

  // const contact = {
  //   first: "Levi",
  //   last: "Okoye",
  //   avatar:
  //     "https://i.pinimg.com/736x/15/2c/86/152c86196f4b6e5e4a6b501fa542f2a5.jpg",
  //   twitter: "leviackerman",
  //   notes: "No Casualties, Don't You Dare Die",
  //   favorite: true,
  // };

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              href={`https://twitter.com/${contact.twitter}`}
              target="_blank"
              rel="noreferrer"
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(e) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                e.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

const Favorite = ({ contact }) => {
  let favorite = contact.favorite;

  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
};

export default Contact;
