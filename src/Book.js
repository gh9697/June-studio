import React from "react";
import fire from "./Fire";

const Book = () => {
  const handleLogout = () => {
    alert("handleLogout");
    fire.auth().signOut();
  };

  return (
    <section className="book">
      <nav>
        <h2>welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};

export default Book;
