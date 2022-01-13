import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import vector from "../../Assets/uni.png";
import { useNavigate } from "react-router-dom";
import { getBooksDetail } from "../../../store/actionCreators";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
type Props = {
  title: string;
  thumbnail: string;
  id: string;
};
const Book: React.FC<Props> = ({ id, title, thumbnail = "" }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const colors = ["#6d28d9", "#c026d3", "#be123c", "#1d4ed8", "#10b981"];
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#ebebeb] justify-center items-center rounded-3xl w-64 my-4">
      <div className="flex flex-col justify-center pl-8 pr-8">
        <img className="rounded-lg w-48 h-48 p-4" src={thumbnail} />
        <div className=" text-xl my-2  text-center font-black font-['Open_Sans'] ">
          {title.split(" ").length > 1
            ? title.split(" ")[0] + " " + title.split(" ")[1]
            : title}
        </div>
      </div>
      <div
        className={`cursor-pointer flex items-center justify-center bg-[#6d28d9] w-full h-14 rounded-b-xl`}
        onClick={() => {
          dispatch(getBooksDetail(id));
          navigate("/book/" + id, { replace: true });
        }}
      >
        <div className="text-white font-bold">View</div>
        <FontAwesomeIcon
          className="mx-2"
          color="#fff"
          size="1x"
          icon={faArrowRight}
        />
      </div>
    </div>
  );
};
export default Book;
