import bg from "../assets/img/404.jpg"
export default function ExpiredLink() {
    return (
      <main
        className="min-h-screen bg-cover bg-top sm:bg-top"
        style={{
          backgroundImage:
          `url(${bg})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">Sorry</p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-400 tracking-tight sm:text-5xl">
             Link Expired!
          </h1>
          <p className="mt-2 text-lg font-medium text-black text-opacity-50">
            It looks like the page you’re looking for doesn't exist. 
          </p>
          <p className="mt-2 text-lg font-medium text-black text-opacity-50">
            Generate a new link below
          </p>
          <div className="mt-6">
            <a
              href="/auth/veremail"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
            >
              Email Verification
            </a>
            <a
              href="/auth/enteremail"
              className="inline-flex items-center mx-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
            >
              Forgot Password
            </a>
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
            >
              Go Home
            </a>
          </div>
        </div>
      </main>
    )
  }
  