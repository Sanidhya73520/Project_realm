export default function Profiles() {
  const users = [
    { name: "Sanidhya", domain: "Frontend" },
    { name: "Rahul", domain: "Backend" },
  ];

  return (
    <div style={{ padding: "50px" }}>
      <h2>Developers</h2>

      {users.map((user, i) => (
        <div key={i}>
          <h3>{user.name}</h3>
          <p>{user.domain}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}