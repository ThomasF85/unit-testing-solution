function cubicVolume(length, width, depth) {
  if (length < 0 || width < 0 || depth < 0) {
    return 0;
  }
  return length * width * depth;
}

export { cubicVolume };
