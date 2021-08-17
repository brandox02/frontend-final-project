type ListType = {
  name: string;
};

export default function ListObject(props: ListType) {
  return (
    <div className="list-object">
      <span className="name">
        {props.name}
      </span>
    </div>
  );
}
