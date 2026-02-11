import Layout from "./Layout";
import Home from "./pages/Home";
import Terms from "./pages/TermosDeUso";
import Privacy from "./pages/PoliticaDePrivacidade";

export const pagesConfig = {
  Layout,
  mainPage: "home",
  Pages: {
    home: Home,
    termos: Terms,
    privacidade: Privacy,
  },
} as const;
