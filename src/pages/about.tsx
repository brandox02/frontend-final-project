import FullScreenContainer from "../components/structure/fullScreenContainer";
import Developer, { DeveloperProps } from "../components/users/developer";

const info = new Array<DeveloperProps>(
  {
    name: "Joseph Estevez",
    contrib: ["Tech lead, ", "Web designer, ", "Programmer"],
    picture_url: "/IMG_5200.jpg",
    github: "https://github.com/waterssh",
  },
  {
    name: "Brando Chiesa",
    contrib: ["Project structure, ", "QA expert, ", "programmer"],
    picture_url: "/brandon.jpeg",
    github: "https://github.com/brandonprogamer02",
  },
  {
    name: "Jefferson Payano",
    contrib: ["Backend designer, ", "Api services, ", "Community manager"],
    picture_url: "/jefferson.jpeg",
    github: "https://github.com/Jeffersonp4",
  },
  {
    name: "Diogenes Ulloa",
    contrib: ["System admin, ", "Server infrastructure, ", "Services manager"],
    picture_url: "/diogenes.jpg",
    github: "https://github.com/juniorulloa23",
  }
);

export default function About() {
  return (
    <FullScreenContainer>
      <main>
        <h3 className="fs-1 text-center">About</h3>
        <h2 className="fs-3 text-center m-4">our awesome team</h2>
        <div className="mt-5 pt-5">
          <div className="d-flex flex-wrap justify-content-center gap-5">
            {info.map((item, index) => (
              <Developer
                name={item.name}
                contrib={item.contrib}
                picture_url={item.picture_url}
                github={item.github}
                key={index}
              />
            ))}
          </div>
        </div>
      </main>
    </FullScreenContainer>
  );
}
