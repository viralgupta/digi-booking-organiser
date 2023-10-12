module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/event/myevents",
        destination: "https://e979-103-4-222-252.ngrok-free.app/api/event/myevents",
      },
      {
        source: "/api/event/createevent",
        destination: "https://e979-103-4-222-252.ngrok-free.app/api/event/createevent",
      },
      {
        source: "/api/user/login",
        destination: "https://e979-103-4-222-252.ngrok-free.app/api/user/login",
      },
      {
        source: "/api/user/signup",
        destination: "https://e979-103-4-222-252.ngrok-free.app/api/user/signup",
      },
      {
        source: "/api/event/verifyevent",
        destination: "https://e979-103-4-222-252.ngrok-free.app/api/event/verifyevent",
      },
      {
        source: "/api/event/verifybooking",
        destination: "https://e979-103-4-222-252.ngrok-free.app/api/event/verifybooking",
      },
    ];
  };
  return {
    rewrites,
  };
};