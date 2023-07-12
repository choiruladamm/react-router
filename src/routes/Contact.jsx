import { Form } from "react-router-dom";

const Contact = () => {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

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
      </div>

    </div>
  );
};

const Favorite = ({contact}) => {
  let favorite = contact.favorite

  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite ? "Remove from favorites" : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  )
}

export default Contact;
