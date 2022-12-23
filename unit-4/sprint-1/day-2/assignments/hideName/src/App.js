import Avatar from "./Components/Avatar";
import "./styles.css";
// import Button from "./Components/Button";

const userDetails = [
  {
    id: 1,
    user_url:
      "https://media.gettyimages.com/id/482018359/photo/india-gate-new-delhi.jpg?s=612x612&w=gi&k=20&c=e9heXVuTwxzgoqCl2mEQjti5yAVKNZJgg9MtbfPcQlM=",
    name: "",
    border: false
  }
];

const user = userDetails.map((el) => {
  return <Avatar src={el.user_url} hidename={el.name} rounded={el.border} />;
});

export default function App() {
  return <div className="App">{user}</div>;
}
