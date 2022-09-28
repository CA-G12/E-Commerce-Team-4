const checkLogin = (req, res) => {
  const isLoged = req.cookies.token;

  if (!isLoged) res.status(200).json({ msg: 'Unauthenticated' })
  else res.status(200).json({ msg: 'authenticated' })
  return;
}

module.exports = {checkLogin};