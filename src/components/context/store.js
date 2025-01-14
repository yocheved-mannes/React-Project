import { useState } from "react";

export const CreateStore = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "Michal", email: "m@gmail.com", password: "m1234!" , role: "Maneger"},
    { id: 2, username: "Sara", email: "s@gmail.com", password: "s1234!" , role: "user"},
    { id: 3, username: "Chagit", email: "c@gmail.com", password: "c1234!" , role: "user"}
  ]);

  const [currentUser, setCurrentUser] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "כינור",
      ToolType: "מיתר",
      Details: "כינור הוא כלי מיתר בעל צליל ייחודי ונוגה. הוא מורכב מגוף עץ חלול ומיתרים הנמתחים על גבי צוואר הכינור. הכינור משמש במגוון סגנונות מוזיקליים, החל ממוזיקה קלאסית ועד לפולקלור ומוזיקה עכשווית. מתאים לכל רמות הנגינה.",
      price: 200,
      img: "CINOR.jpg"
    },
    {
      id: 2,
      name: "אקורדיון",
      ToolType: "קלידים",
      Details: "האקורדיון הוא כלי נגינה שמבוסס על קפלים הנפתחים ונסגרים ליצירת צליל. בכלי זה יש גם קלידים המאפשרים לנגן מנגינות ייחודיות, והוא פופולרי במוזיקה עממית ובאירועים חגיגיים. קל ללמידה ומהנה לשימוש.",
      price: 300,
      img: "ACORDION.jpg"
    },
    {
      id: 3,
      name: "נבל",
      ToolType: "מיתר",
      Details: "הנבל הוא אחד מכלי הנגינה העתיקים בעולם, הידוע בצליל הרך והמרגיע שלו. הנבל מורכב ממיתרים הנמתחים על מסגרת משולשת, וכל מיתר מייצר צליל ייחודי. מתאים במיוחד לנגינה קלאסית ואווירתית.",
      price: 500,
      img: "NEVEL2.jpg"
    },
    {
      id: 4,
      name: "חצוצרה",
      ToolType: "נשיפה",
      Details: "החצוצרה היא כלי נשיפה פופולרי שמיוצר ממתכת ומפיק צלילים חזקים וברורים. היא משמשת במגוון רחב של סגנונות, כולל ג'אז, תזמורות קלאסיות ומוזיקה מודרנית. כלי מושלם להוספת אנרגיה ודרמה.",
      price: 250,
      img: "CHATOTRA2.jpg"
    },
    {
      id: 5,
      name: "תופים",
      ToolType: "קצב",
      Details: "התופים הם הבסיס לקצב בכל להקה ותזמורת. מערכת התופים כוללת תוף בס, תופי סנר ומצילות שמאפשרים יצירת מגוון רחב של מקצבים. מתאים לכל מי שאוהב להכניס אנרגיה ודינמיקה למוזיקה.",
      price: 400,
      img: "topim.jpg"
    },
    {
      id: 6,
      name: "קלרינט",
      ToolType: "נשיפה",
      Details: "הקלרינט הוא כלי נשיפה מעץ עם צליל חם וגמיש. הוא נמצא בשימוש נרחב במוזיקה קלאסית, ג'אז ומוזיקה עממית. קל ללמוד עליו והוא מספק חווית נגינה מהנה ומתמשכת.",
      price: 350,
      img: "klarinet2.jpg"
    },
    {
      id: 7,
      name: "גיטרה",
      ToolType: "מיתר",
      Details: "הגיטרה היא כלי מיתר אהוב המתאים למגוון רחב של סגנונות מוזיקליים, כולל רוק, קלאסי, ג'אז ועוד. היא כוללת שישה מיתרים ומתאימה לנגנים מתחילים ומתקדמים כאחד.",
      price: 400,
      img: "gitara3.jpg"
    },
    {
      id: 8,
      name: "אקורדיון מתקדם",
      ToolType: "קלידים",
      Details: "אקורדיון מתקדם זה משלב טכנולוגיה חדשנית עם מסורת עשירה של נגינה. מתאים לנגנים מקצועיים ולחובבים שמעוניינים להרחיב את יכולותיהם המוזיקליות. כלי איכותי עם עיצוב ייחודי.",
      price: 350,
      img: "aaaaa.jpg"
    }
  ]);
  
  
  const store = {
    users,
    currentUser, 
    setCurrentUser,
    products,
    setProducts, // פונקציה לעדכון המוצרים

    // התחברות
    Login: (email, password) => {
      const user = users.find((u) => u.email === email && u.password === password);

      if (!user) {
        alert("אחד הפרטים שגוי או משתמש לא נמצא");
        return;
      } else {
        setCurrentUser(user);
        console.log(user.username + " התחבר בהצלחה!");
      }
    },

    // הרשמה
    Register: (newUser) => {
      if (users.some((u) => u.email === newUser.email)) {
        alert("המייל כבר קיים במערכת!");
        return;
      } else {
        newUser.id = users[users.length - 1].id + 1;
        setUsers([...users, newUser]);
        setCurrentUser(newUser);
        alert(`שלום ל${newUser.username}💥נרשמת בהצלחה`);
      }
    }
  };

  return store;
};
