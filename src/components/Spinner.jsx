import ClipLoader from "react-spinners/ClipLoader";
import { useRecoilValue } from "recoil";
import { ThemeMode } from "../Recoil/State";

const override = {
  display: "block",
  margin: "100px auto",
};

function Spinner({ loading }) {
  const themeMode = useRecoilValue(ThemeMode);

  return (
    <div className="flex justify-center items-center">
      <ClipLoader
        color={themeMode === "dark" ? "white" : "blue"}
        loading={loading}
        cssOverride={override}
        size={100}
      />
    </div>
  );
}

export default Spinner;
