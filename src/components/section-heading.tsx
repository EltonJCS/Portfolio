type SectionHeadingProps = {
  title: string;
};

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return <h2 className="mb-8 text-3xl font-medium capitalize">{title}</h2>;
};

export default SectionHeading;
