import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdRateReview } from "react-icons/md";
import { HiMail } from "react-icons/hi";

export const links = [
  {
    id: 1,
    child: (
      <>
        <AiFillHome size={25} className="mr-4" />
      </>
    ),
    link: "home",
  },
  {
    id: 2,
    child: (
      <>
        <BsFillPersonLinesFill size={25} className="mr-4" />
      </>
    ),
    link: "about",
  },
  {
    id: 3,
    child: (
      <>
        <AiOutlineShoppingCart size={25} className="mr-4" />
      </>
    ),
    link: "shop",
  },
  {
    id: 4,
    child: (
      <>
        <MdRateReview size={25} className="mr-4" />
      </>
    ),
    link: "reviews",
  },
  {
    id: 5,
    child: (
      <>
        <HiMail size={25} className="mr-4" />
      </>
    ),
    link: "contact",
  },
];
