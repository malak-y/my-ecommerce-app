
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
    return (
      <div className="container mt-5 mb-5"> {/* Added mb-5 for spacing */}
        <div className="row">
          {/* Contact Info Section */}
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h5>
                <i className="bi bi-telephone-fill text-danger"></i> Call To Us
              </h5>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +880161112222</p>
              <hr />
              <h5>
                <i className="bi bi-envelope-fill text-danger"></i> Write To Us
              </h5>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>support@exclusive.com</p>
            </div>
          </div>
  
          {/* Contact Form Section */}
          <div className="col-md-8">
            <div className="card p-4 shadow-sm">
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Your Name *" required />
                  </div>
                  <div className="col">
                    <input type="email" className="form-control" placeholder="Your Email *" required />
                  </div>
                  <div className="col">
                    <input type="tel" className="form-control" placeholder="Your Phone *" required />
                  </div>
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-danger w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Contact  