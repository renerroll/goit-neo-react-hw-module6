import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";
import Contact from "../components/Contact";
import classes from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={classes["contact-list"]}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />{" "}
          </li>
        ))
      ) : (
        <li>No contacts found</li>
      )}
    </ul>
  );
}

export default ContactList;
