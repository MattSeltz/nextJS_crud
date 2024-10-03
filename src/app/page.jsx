import Link from "next/link";

import { getTasks } from "@/utils/get";

export default async function Home() {
  const tasks = await getTasks();

  return (
    <section>
      <ul className="flex gap-4 flex-wrap justify-center">
        {tasks.map((task) => (
          <Link key={task._id} href={`/delete/${task._id}`}>
            <li className="bg-slate-400 p-4 rounded-sm transition-colors hover:bg-slate-500 cursor-pointer">
              <p>
                <b>{task.title}</b>
              </p>
              <p>{task.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
