export const healthCheck = (req, res) => {
  return res.json({ status: "ok", message: "API funcionando!" });
};
