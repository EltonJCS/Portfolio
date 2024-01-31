type SectionHeadingProps = {
  title: string;
};

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <h2 className="mb-8 text-center text-3xl font-medium capitalize drop-shadow-[0_0_16px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_0_16px_rgba(255,255,255,0.4)]">
      {title}
    </h2>
  );
};

export default SectionHeading;
