const UserItemTile = ({ name, description, validation }) => {
  return (
    <div className="bg-slate-400 py-3 px-4 rounded-lg my-2 shadow-md">
      <ul>
        <li>
          <h1>{name}</h1>
        </li>
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default UserItemTile;
