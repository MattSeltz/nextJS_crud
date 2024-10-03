import { Footer } from "@/components/Footer";
import { getTask } from "@/utils/getOne";

export default async function Home({ params }) {
  const { id } = params;

  const task = await getTask(id);

  return (
    <section className="bg-slate-500 p-4 rounded-sm shadow-sm shadow-white transition-colors hover:bg-slate-400 cursor-pointer">
      <p>
        <b>{task.title}</b>
      </p>
      <p>{task.description}</p>
      <Footer id={id}></Footer>
    </section>
  );
}
