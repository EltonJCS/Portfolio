import Image from "next/image";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="group flex h-[3rem] w-[8rem] items-center justify-center gap-1 rounded-full bg-slate-900 text-white outline-none transition-all hover:scale-110 hover:bg-slate-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-60"
      disabled={pending}
      type="submit"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Enviar{" "}
          <Image
            className="opacity-90 invert transition-all group-hover:translate-x-2 group-hover:scale-125"
            src="/icons/send.svg"
            alt=""
            width={20}
            height={20}
            quality={100}
          />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
