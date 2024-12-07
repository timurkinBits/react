import React from "react";
import { User } from "../data/userData";
import "./../styles/UserCard.css";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} className="avatar" />
      <h2>
        {user.name} {user.verified && <span className="verified">✔</span>}
      </h2>
      <p>{user.position}</p>
      <h3>SKILLS</h3>
      <div className="skills">
        {user.skills.map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>
      <p className="joined">Joined on {user.joined}</p>
    </div>
  );
};

export default UserCard;
