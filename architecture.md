# System Architecture

## מבנה תיקיות (Folders Structure)

```
src/
│
├── app/
│   ├── componnents/
│   │   ├── customers/         # ניהול לקוחות (טבלת תלמידים)
│   │   ├── home/              # דף הבית
│   │   ├── lesson-details/    # פרטי שיעור
│   │   ├── lesson-list/       # רשימת שיעורים
│   │   ├── login/             # התחברות
│   ├── guards/                # שמירת הרשאות (auth.guard.ts)
│   ├── interfaces/            # הגדרות מודלים/טבלאות
│   │   ├── lesson.ts
│   │   ├── student.ts
│   │   ├── user.ts
│   ├── services/              # שירותים (Auth, Users)
│   ├── app.component.*        # רכיב ראשי
│   ├── app.config.*           # קונפיגורציה
│   ├── app.routes.ts          # ניתוב
│
├── assets/                    # תמונות וקבצים סטטיים
├── styles.css                 # עיצוב גלובלי
├── main.ts                    # Bootstrap לאפליקציה
```

---

## טבלאות/אובייקטים עיקריים (Database Tables / Main Entities)

### 1. User (משתמש)
```typescript
export interface User {
  id: string;
  userName: string;
  phone: string;
  email: string;
  role: string;      // 'T' (מורה) או 'S' (מזכירות)
  password: string;
}
```

### 2. Student (תלמיד)
```typescript
export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  lesson: string;
  price: number;
  isPaied: boolean;
}
```

### 3. Lesson (שיעור)
```typescript
export interface Lesson {
  title: string;
  teacher: string;
  description: string;
  numberOfMeetings: number;
  startDate: Date;
  price: number;
  day: string;
  time: string;
  imageUrl: string;
}
```

### 4. Customer (לקוח)
- במימוש שלך, לקוחות (customers) הם למעשה תלמידים, ומוצגים ב-AgGrid עם עמודות: שם, משפחה, טלפון, מס' זהות, שיעור, מחיר, שולם.

---

## עקרונות ארכיטקטורה

- **Component-based**: כל מסך/פיצ'ר הוא קומפוננטה עצמאית.
- **Services**: לוגיקת גישה לנתונים והרשאות מרוכזת בשירותים (services).
- **Routing & Guards**: ניתוב לפי הרשאות משתמש (מורה/מזכירות).
- **Interfaces**: כל ישות עיקרית מוגדרת כ-interface ב-TypeScript.
- **Ag-Grid**: להצגת טבלאות נתונים (לקוחות/תלמידים).
- **Angular Material**: לעיצוב רכיבים (כרטיסי שיעור וכו').

---

## תרשים זרימה עיקרי

1. משתמש נכנס למערכת (login).
2. לפי סוג המשתמש (`role`), מועבר למסך המתאים (מורה/מזכירות).
3. מזכירות רואה טבלת תלמידים (customers), מורה רואה רשימת שיעורים.
4. כל ישות (שיעור, תלמיד, משתמש) מנוהלת דרך שירותים וקומפוננטות ייעודיות.

---

אם תרצה להוסיף דיאגרמות או הרחבות (כגון תיאור API/שירותים), אשמח לעזור!
