import db from "#db/client";
import { createEmployee } from './queries/employees.js';

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const employees = [
    { name: 'Alice Green', birthday: '1990-05-14', salary: 72000 },
    { name: 'Bob Stone', birthday: '1985-09-23', salary: 68000 },
    { name: 'Charlie Sky', birthday: '1992-11-01', salary: 63000 },
    { name: 'Dana White', birthday: '1988-03-30', salary: 75000 },
    { name: 'Eli North', birthday: '1995-07-08', salary: 59000 },
    { name: 'Fiona Ray', birthday: '1983-01-19', salary: 82000 },
    { name: 'George Kim', birthday: '1991-06-12', salary: 67000 },
    { name: 'Hannah Park', birthday: '1989-02-25', salary: 70000 },
    { name: 'Ian Wolf', birthday: '1993-12-17', salary: 61000 },
    { name: 'Jane Doe', birthday: '1994-04-05', salary: 66000 }
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }
}
