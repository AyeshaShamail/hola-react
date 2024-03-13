// import { foodImage } from "../utils/constants";
const Contact = () => {
  return (
    <div
      className="flex justify-center items-center m-6 p-6"
      // style={{ backgroundImage: `url(${foodImage})` }}
    >
      <div className="bg-orange-300 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6 text-white">
          Contact Us
        </h1>
        <p className="text-2xl italic text-center mb-6 text-white">
          Got a technical issue? Let us know.
        </p>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-white rounded-md p-2 focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-white rounded-md p-2 focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-white">
              Comment
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border border-white rounded-md p-2 focus:outline-none focus:border-blue-500"
              placeholder="Leave ur comment here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-orange-400 py-2 px-4 rounded-md hover:bg-opacity-100 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
