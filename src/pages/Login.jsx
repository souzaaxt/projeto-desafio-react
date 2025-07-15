import { useNavigate } from "react-router-dom";
import LoginImage from "../assets/logistics-animate.svg";
import Button from "../components/Button/Button";

function LoginPage() {

  let navigate = useNavigate();

  function handleSubmit() {
    setTimeout(function() {
      window.location.href = "/transactions";
    }, 500); // Redirect after 0.5 seconds
  }

  return (
    // Container
    <main className="w-full h-screen flex">
      {/* Esquerda */}
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 w-1/2 h-full flex flex-col justify-center items-center text-white gap-4">
        <img
          src={LoginImage}
          alt="Imagem ilustrativa de login"
          className="w-[350px]"
        />
        <h1 className="text-3xl font-bold">Secure Login Portal</h1>
        <p className="text-center">
          Access your dashboard securely with our protected login <br /> system.
          Your data is encrypted and secure.
        </p>
      </div>
      {/* Direita */}
      <div className="bg-white w-1/2 h-full">
        {/* Container do formulário */}
        <form className="flex flex-col justify-center items-center h-full max-w-md mx-auto">
          {/* Topo */}
          <header className="text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-gray-500">
              Enter your details to sign in to your account
            </p>
          </header>
          {/* Meio */}
          <main className="w-full">
            {/* Input email */}
            <label
              for="input-group-1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@example.com"
              />
            </div>

            {/* Input senha */}
            <label
              for="input-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              id="Senha"
            >
              Password
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="password"
                id="input-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="********"
              />
            </div>

            {/* Botão */}
            <Button onClick={handleSubmit}>Sign In</Button>
          </main>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
