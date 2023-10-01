module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/event/myevents",
        destination: "https://f85e-103-4-221-252.ngrok-free.app/api/event/myevents",
      },
      {
        source: "/api/event/createevent",
        destination: "https://f85e-103-4-221-252.ngrok-free.app/api/event/createevent",
      },
      {
        source: "/api/user/login",
        destination: "https://f85e-103-4-221-252.ngrok-free.app/api/user/login",
      },
      {
        source: "/api/user/signup",
        destination: "https://f85e-103-4-221-252.ngrok-free.app/api/user/signup",
      },
      {
        source: "/api/event/verifyevent",
        destination: "https://f85e-103-4-221-252.ngrok-free.app/api/event/verifyevent",
      },
      {
        source: "/api/event/verifybooking",
        destination: "https://f85e-103-4-221-252.ngrok-free.app/api/event/verifybooking",
      },
    ];
  };
  return {
    rewrites,
  };
};