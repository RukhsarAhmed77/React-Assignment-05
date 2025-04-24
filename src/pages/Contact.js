export default function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="I'm Batman!"/>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="example@gmail.com"/>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea rows="5" placeholder="Enter your Msg here"></textarea>
        </div>
        <button className="button">Send Message</button>
      </form>
    </div>
  );
}