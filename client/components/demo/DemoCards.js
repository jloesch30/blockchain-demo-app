import UserTile from "./UserTile";

const DemoCards = ({ users }) => {
  return (
    <div className="mt-36">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-mono font-extrabold mb-2">
          Demo walk through
        </h1>
        <p className="text-center mx-4 max-w-lg">
          Below you will see a list of users that this application hosts, please
          click on one to view their profile
        </p>
      </div>
      <div className="my-10">
        <div className="grid gap-4 place-content-center">
          {users.map((value, index) => {
            return (
              <UserTile
                key={index}
                lineItemDescription={value.lineItemDescription}
                lineItemName={value.lineItemName}
                name={value.name}
              ></UserTile>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DemoCards;
