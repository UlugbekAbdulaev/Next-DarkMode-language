import About from "../Components/About";
import Aside from "../Components/Aside";
import Books from "../Components/Books";
import Category from "../Components/Category";
import Main from "../Components/Main";



export default function Home() {
  return (
    <div>
    <Main />
    <Category />
    <Aside />
    <Books />
    <About />
    </div>
  );
}
