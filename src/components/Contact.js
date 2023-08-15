import "./Contact.css";
const Contact = () => {
  return (
    <div className="container-fluid contact ">
      <div class="wrapper">
        <form class="form">
          <div class="pageTitle">Contact Us</div>
          <div class="secTitle">We are glad to have you here!</div>
          <input type="Name" class="name formEntry" placeholder="Name" />
          <input type="Email" class="email formEntry" placeholder="Email" />
          <textarea class="message formEntry" placeholder="Message"></textarea>
          <button class="submit formEntry" onclick="thanks()">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
