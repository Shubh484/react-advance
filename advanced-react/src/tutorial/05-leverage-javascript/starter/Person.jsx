import avatar from "../../../assets/default-avatar.svg";

const Person = ({ name, nickName = "shake and bake", images }) => {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      <p>NickName : {nickName}</p>
    </div>
  );
};

export default Person;
