
export const ArticleDetails = (props) => {
  const { element } = props;

  const formattedDate = new Date(element.publishedAt).toLocaleDateString(
    undefined,
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <>
      <article className="relative select-none border px-8 pt-10 pb-20 text-white hover:border-[#8a38f4] transition-all shadow-md">
        <h2 className="text-lg uppercase font-semibold">
            <span className="text-[#8a38f4]">{"⬧"}</span> {element.title}</h2>
        <p className="text-sm text-gray-300">{element.description}</p>
        <span className="absolute bottom-4 text-sm font-medium">
          {formattedDate}
        </span>
        <a
          href={element.url}
          target="_blank"
          className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center bg-[#8a38f4] text-white transition-all hover:w-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </article>
    </>
  );
};
