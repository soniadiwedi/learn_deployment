// import Courses ,Title and UserCard here
// keep a user object with mentioned properties and pass down to UserCard as prop
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";
import Courses from "./Components/Courses"



export default function App() {

  return (<>
          <Title/>
          <UserCard
          name={"Chrisse"}
          avatar={"https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"}
          posts={1841}
          followers={66868}
          address={"4018 sach Trail"}
          />

  </>)
}
