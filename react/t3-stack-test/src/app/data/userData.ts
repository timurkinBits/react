export interface User {
    name: string;
    verified: boolean;
    position: string;
    joined: string;
    skills: string[];
    avatar: string;
  }
  
  const userData: User = {
    name: "Tatarinov Timofey",
    verified: true,
    position: "Senior Developer, Finland",
    joined: "December 7, 2024",
    skills: [
      "HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB",
      "Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis",
      "MySQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"
    ],
    avatar: "https://via.placeholder.com/150"
  };
  
  export default userData;
  