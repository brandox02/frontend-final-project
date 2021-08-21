import Image from "next/image";

export type DeveloperProps = {
  name: string;
  contrib: Array<string>;
  picture_url: string;
  github: string;
};

const Contrib = ({ name }) => {
  return <span>{name}</span>;
};

export default function Developer(props: DeveloperProps) {
  return (
    <section className="dev-card">
      <Image
        className="dev-picture"
        src={props.picture_url}
        width="300"
        height="300"
      />
      <div className="text-center">
        <p className="fs-4 text-center">
          <a href={props.github}>{props.name}</a>
        </p>

        {props.contrib.map((item, index) => {
          return <Contrib name={item} key={index} />;
        })}
      </div>
    </section>
  );
}
