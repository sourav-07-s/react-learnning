function Contact() {
  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600">
            Have a question or want to work together? We'd love to hear
            from you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl bg-gray-900 p-8 text-white shadow-lg">

            <h2 className="text-2xl font-semibold">
              Get in Touch
            </h2>

            <p className="mt-4 text-gray-400">
              Feel free to contact us for any questions, feedback, or
              collaboration opportunities.
            </p>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-sm text-gray-400">
                  Email
                </p>

                <p className="mt-1 text-lg">
                  example@email.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Phone
                </p>

                <p className="mt-1 text-lg">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Location
                </p>

                <p className="mt-1 text-lg">
                  Odisha, India
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">

            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Form submitted");
              }}
              className="space-y-5"
            >

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;