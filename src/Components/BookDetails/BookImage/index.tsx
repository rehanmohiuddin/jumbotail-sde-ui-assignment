import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { shallowEqual, useSelector } from "react-redux";

type Props = {
  image: string;
};
const BookImage: React.FC<Props> = ({ image }) => {
  const Books: readonly Book[] = useSelector(
    (state: BookState) => state.Books,
    shallowEqual
  );

  return (
    <div className="flex p-8 items-center justify-center">
      <img className="w-80 h-80 rounded-xl" src={image} />
    </div>
  );
};
export default BookImage;
