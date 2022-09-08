import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout";
import { selectAuthState, setAuthState } from "../store/authSlice";
import {
  decrement,
  increment,
  incrementAsyncByAmount,
  selectCountState,
} from "../store/couterSlice";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const authState = useSelector(selectAuthState);
  const counterValue = useSelector(selectCountState);

  return (
    <Layout>
      <h1>Cremeria Pirules</h1>
    </Layout>
  );
};

export default Home;
