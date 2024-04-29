function PetInfo(props) {
  const { animal, age, hasPet } = props;
  console.log(props);

  return (
    <h1>
      {" "}
      {hasPet ? `My ${animal} is ${age} years old` : "I don't have an animal"}
    </h1>
  );
}
export default PetInfo;
