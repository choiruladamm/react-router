import { redirect } from "react-router-dom";
import { deleteContact } from "../utils/contacts";

export async function action({ params }) {
  // throw new Error ("oh jambret");
  await deleteContact(params.contactId);

  return redirect("/");
}
