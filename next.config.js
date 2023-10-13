module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/event/myevents",
        destination: "https://2e8f-14-96-13-220.ngrok-free.app/api/event/myevents",
      },
      {
        source: "/api/event/createevent",
        destination: "https://2e8f-14-96-13-220.ngrok-free.app/api/event/createevent",
      },
      {
        source: "/api/user/login",
        destination: "https://2e8f-14-96-13-220.ngrok-free.app/api/user/login",
      },
      {
        source: "/api/user/signup",
        destination: "https://2e8f-14-96-13-220.ngrok-free.app/api/user/signup",
      },
      {
        source: "/api/event/verifyevent",
        destination: "https://2e8f-14-96-13-220.ngrok-free.app/api/event/verifyevent",
      },
      {
        source: "/api/event/verifybooking",
        destination: "https://2e8f-14-96-13-220.ngrok-free.app/api/event/verifybooking",
      },
    ];
  };
  return {
    rewrites,
  };
};