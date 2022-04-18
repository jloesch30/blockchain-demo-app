const UserItemTile = ({ name, description, validation }) => {
  const [isValid] = validation;
  const [validationDetails] = validation;

  return (
    <>
      <div>
        <ul>
          <li>
            <h1>{name}</h1>
          </li>
          <li>{description}</li>
        </ul>
      </div>
    </>
  );
};

export default UserItemTile;
