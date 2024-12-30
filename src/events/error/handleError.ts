export default (error: Error) => {
  console.error(error);
  // Prefer an exit if the commandkit anticrash is disable, it may be cleaner
  //   process.exit();
};
