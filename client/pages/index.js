import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  console.log(req.headers);
  if (typeof window === "undefined") {
    // on the server
    // kubectl get service -n ingress-nginx のLoadBalancerの名前を参照
    // headerを指定しないと動かないの、ちょっと難しいな
    const { data } = await axios.get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
      {
        headers: req.headers, // ホスト名やcookie情報が含まれるのでOK
      }
    );
    return data;
  } else {
    // on the cliente
    const { data } = await axios.get("/api/users/currentuser");
    return data;
  }
  return {};
};

export default LandingPage;
