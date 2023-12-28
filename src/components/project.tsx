import Image, { StaticImageData } from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  tags: Readonly<string[]>;
  imageURL: StaticImageData;
};

function Project({ title, description, tags, imageURL }: ProjectProps) {
  return (
    <article className="group relative mb-3 max-w-[42rem] overflow-clip border border-black/5 bg-slate-100 shadow-xl transition last:mb-0 even:pl-8 hover:bg-slate-300 sm:mb-8 sm:h-[20rem] sm:pr-8">
      <div className="flex h-full flex-col px-5 pb-7 pt-4 group-even:ml-[18rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="rounded-full bg-slate-600 px-3 py-1 text-[0.7rem] font-bold tracking-wider text-white"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageURL}
        alt={""}
        quality={95}
        className="absolute -right-40 top-8 w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
      />
    </article>
  );
}

export default Project;
