import { useContext } from "react";
import MyContext from "./context/context";

export function UserMeneger() {
  const { users } = useContext(MyContext); // שליפת המשתמשים מהסטור

  return (
    <div>
      <h2>ניהול משתמשים</h2>
      <table border="1" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>מזהה</th>
            <th>שם משתמש</th>
            <th>אימייל</th>
            <th>סיסמה</th>
            <th>תפקיד</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserMeneger;
