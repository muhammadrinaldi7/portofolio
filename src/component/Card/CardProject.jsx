export const CardProject = ({ image, title, project, links }) => {
  return (
    <div className="relative flex flex-col overflow-hidden bg-white rounded-xl shadow-md group hover:shadow-2xl transition duration-300">
      <div className="relative w-full h-64 bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={project}
          className="object-cover w-full h-full transition duration-500 transform group-hover:scale-110"
        />
        {links && (
          <a
            href={links}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <button className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-lg">
              Visit Project
            </button>
          </a>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm font-bold text-gray-500">{title}</p>
        <h2 className="text-xl font-semibold text-gray-800">{project}</h2>
      </div>
    </div>
  );
};
