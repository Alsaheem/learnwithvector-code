const url = "https://aws.amazon.com/";

const heistExecutor = (params) => {
  console.log("executor_called");
};

export const handler = async (event) => {
  try {
    // fetch is available in Node.js 18 and later runtimes
    const res = await fetch(url);
    console.info("status", res.status);
    heistExecutor();
    return res.status;
  } catch (e) {
    console.error(e);
    return 500;
  }
};
