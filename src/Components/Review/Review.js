
import "./Review.css";
import User from "../User/User";
import useReview from "../Hooks/useReview";

const Review = () => {
  const [users] = useReview()
  return (
    <div className="container d-flex justify-content-center">
      
      <div className="card-compo ">
        {users.map((user) => (
          <User user={user} key={user.id}></User>
        ))}
      </div>
    </div>
  );
};

export default Review;
