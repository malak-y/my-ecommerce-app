
import { IoIosArrowDown } from "react-icons/io";
const Sidebar = () => {
    const categories = [
      "Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle",
      "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"
    ];
    return (
      <aside className="col-md-3 p-3 border-end">
        <ul className="list-group">
          {categories.map((cat) => (
            <li key={cat} className="list-group-item d-flex justify-content-between align-items-center">
              {cat} <IoIosArrowDown />
            </li>
          ))}
        </ul>
      </aside>
    );
  };
  export default Sidebar