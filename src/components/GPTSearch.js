import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";
import { APP_BACKGROUND } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={APP_BACKGROUND}
          alt="bg-img"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
