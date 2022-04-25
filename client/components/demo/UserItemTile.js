const UserItemTile = ({ name, description, validation }) => {
  return (
    <div className="bg-slate-400 py-3 px-4 rounded-lg my-2 shadow-md mx-3">
      <ul>
        <li>
          <h1>
            <span className="font-bold">Line Item Name:</span> {name}
          </h1>
        </li>
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default UserItemTile;
