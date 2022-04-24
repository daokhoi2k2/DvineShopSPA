const checkImageValid = (file: File, sizeKb: number) => {
  // Check type
  if (
    file.type === 'image/png' ||
    file.type === 'image/jpg' ||
    file.type === 'image/jpeg' ||
    file.type === 'image/svg+xml'
  ) {
    // Check size
    const fileKb = file.size / 1024;
    console.log(fileKb, sizeKb)
    if (fileKb <= sizeKb) {
      return true;
    }
  }

  return false;
};
export default checkImageValid;
