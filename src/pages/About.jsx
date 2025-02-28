const About = () => {
    const teamMembers = [
      {
        name: "Tom Cruise",
        title: "Founder & Chairman",
        img: "https://hips.hearstapps.com/hmg-prod/images/tom-cruise-attends-the-australian-premiere-of-mission-news-photo-1723493931.jpg",
      },
      {
        name: "Emma Watson",
        title: "Managing Director",
        img: "https://cdn.britannica.com/29/215029-050-84AA8F39/British-actress-Emma-Watson-2017.jpg",
      },
      {
        name: "Will Smith",
        title: "Product Designer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeAJRn8SrkfuOOt024SDrRM0K0xOqD71suxA&s",
      },
    ];
  
    return (
      <div className="container py-5">
        {/* Our Story Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="fw-bold">Our Story</h2>
            <p className="text-muted">
              Founded in 2015, Exclusive is South Asia’s premier online shopping
              marketplace with an active presence in Bangladesh, Pakistan, India,
              and Sri Lanka. Supported by a wide range of tailored marketing,
              data, and service solutions, Exclusive has 10,500 sellers and 45.5k
              active customers on its platform.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://www.handtalk.me/en/wp-content/uploads/sites/3/2024/04/BP_Como-melhorar-vendas-de-e-commerce-com-acessibilidade-capa.png"
              alt="Our Story"
              className="img-fluid rounded w-100"
              style={{ objectFit: "cover", height: "300px" }}
            />
          </div>
        </div>
  
        {/* Team Section */}
        <div className="row text-center mb-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
              <div className="border p-3 rounded">
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-circle img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h4 className="fw-bold mt-3">{member.name}</h4>
                <p className="text-muted">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default About;
  